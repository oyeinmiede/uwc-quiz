/* ============================================================
   STATE
   ============================================================ */
const params = new URLSearchParams(window.location.search);
const courseCode = params.get("course");
const course = COURSES[courseCode];

const state = {
    view: "setup",          // setup | active | results
    adcType: "RABBIT",       // RABBIT | SNAIL | BOTH   (ADC321 only)
    adcSource: "builtin",    // builtin | import         (ADC321 only)
    importedQuestions: null,
    numQuestions: 10,
    timerMode: "none",       // "none" or minutes (number)
    customMinutes: 15,
    questions: [],
    answers: [],
    currentIndex: 0,
    timeLeftSec: null,
    timerId: null,
    resultFilter: "all"
};

const app = document.getElementById("app");

if (!course) {
    app.innerHTML = `<div class="empty-note">Unknown course. <a href="index.html">Go back home</a>.</div>`;
} else {
    render();
}

/* ============================================================
   HELPERS
   ============================================================ */
function getPool() {
    if (course.hasTypes) {
        if (state.adcSource === "import" && state.importedQuestions) {
            return state.importedQuestions;
        }
        if (state.adcType === "RABBIT") return QUESTION_BANKS.ADC321_RABBIT;
        if (state.adcType === "SNAIL") return QUESTION_BANKS.ADC321_SNAIL;
        return [...QUESTION_BANKS.ADC321_RABBIT, ...QUESTION_BANKS.ADC321_SNAIL];
    }
    return QUESTION_BANKS[course.code] || [];
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function openModal(html) {
    const overlay = document.getElementById("modal-overlay");
    const box = document.getElementById("modal-box");
    box.innerHTML = `<button class="modal-close" id="modal-close-btn">&times;</button>` + html;
    overlay.classList.remove("hidden");
    document.getElementById("modal-close-btn").addEventListener("click", closeModal);
}
function closeModal() {
    document.getElementById("modal-overlay").classList.add("hidden");
}
document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
});

/* ============================================================
   RENDER ROUTER
   ============================================================ */
function render() {
    if (state.view === "setup") renderSetup();
    else if (state.view === "active") renderActive();
    else if (state.view === "results") renderResults();
}

/* ============================================================
   SETUP SCREEN
   ============================================================ */
function renderSetup() {
    const pool = getPool();
    const maxAvail = pool.length;
    const countOptions = [5, 10, 15, 20, 25, 30].filter(n => n <= maxAvail);
    if (countOptions.length === 0 || countOptions[countOptions.length - 1] !== maxAvail) {
        countOptions.push(maxAvail);
    }
    if (!countOptions.includes(state.numQuestions)) state.numQuestions = countOptions[0] || 0;

    const timerOptions = [
        { label: "No timer", value: "none" },
        { label: "10 min", value: 10 },
        { label: "15 min", value: 15 },
        { label: "20 min", value: 20 },
        { label: "30 min", value: 30 },
        { label: "Custom", value: "custom" }
    ];

    app.innerHTML = `
    <div class="hero">
      <h1>${course.emoji} ${course.code}</h1>
      <p>${course.name} · Exam: ${formatDate(course.examDate)}</p>
    </div>

    <div class="setup-card">
      ${course.hasTypes ? renderAdcTypeAndSource() : ""}

      <div class="field-group">
        <label>Number of questions ${maxAvail === 0 ? "<span style='color:var(--red)'>(no questions available)</span>" : ""}</label>
        <div class="pill-group" id="count-pills">
          ${countOptions.map(n => `<div class="pill-option ${n === state.numQuestions ? "selected" : ""}" data-count="${n}">${n}</div>`).join("")}
        </div>
      </div>

      <div class="field-group">
        <label>Timer</label>
        <div class="pill-group" id="timer-pills">
          ${timerOptions.map(t => `<div class="pill-option ${(t.value === state.timerMode) || (t.value === "custom" && typeof state.timerMode === "number" && !timerOptions.slice(1, 5).map(x => x.value).includes(state.timerMode)) ? "selected" : ""}" data-timer="${t.value}">${t.label}</div>`).join("")}
        </div>
        <div class="custom-input" id="custom-timer-wrap" style="display:none;">
          <input type="number" min="1" id="custom-minutes" value="${state.customMinutes}"> minutes
        </div>
      </div>

      <button class="btn btn-primary" id="start-quiz-btn" ${maxAvail === 0 ? "disabled" : ""} style="width:100%; justify-content:center;">
        Start Quiz →
      </button>
    </div>
  `;

    // Count pills
    document.querySelectorAll("#count-pills .pill-option").forEach(el => {
        el.addEventListener("click", () => {
            state.numQuestions = Number(el.dataset.count);
            renderSetup();
        });
    });

    // Timer pills
    document.querySelectorAll("#timer-pills .pill-option").forEach(el => {
        el.addEventListener("click", () => {
            const v = el.dataset.timer;
            if (v === "custom") {
                state.timerMode = state.customMinutes;
                document.getElementById("custom-timer-wrap").style.display = "flex";
            } else if (v === "none") {
                state.timerMode = "none";
            } else {
                state.timerMode = Number(v);
            }
            renderSetup();
        });
    });
    if (typeof state.timerMode === "number" && ![10, 15, 20, 30].includes(state.timerMode)) {
        document.getElementById("custom-timer-wrap").style.display = "flex";
    }
    const customInput = document.getElementById("custom-minutes");
    if (customInput) {
        customInput.addEventListener("input", (e) => {
            state.customMinutes = Number(e.target.value) || 1;
            state.timerMode = state.customMinutes;
        });
    }

    if (course.hasTypes) wireAdcControls();

    document.getElementById("start-quiz-btn").addEventListener("click", startQuiz);
}

function renderAdcTypeAndSource() {
    return `
    <div class="field-group">
      <label>Question set</label>
      <div class="pill-group" id="adc-type-pills">
        <div class="pill-option ${state.adcType === "RABBIT" ? "selected" : ""}" data-type="RABBIT">🐇 Rabbit</div>
        <div class="pill-option ${state.adcType === "SNAIL" ? "selected" : ""}" data-type="SNAIL">🐌 Snail</div>
        <div class="pill-option ${state.adcType === "BOTH" ? "selected" : ""}" data-type="BOTH">Both</div>
      </div>
    </div>

    <div class="field-group">
      <label>Source</label>
      <div class="pill-group" id="adc-source-pills">
        <div class="pill-option ${state.adcSource === "builtin" ? "selected" : ""}" data-source="builtin">Built-in questions</div>
        <div class="pill-option ${state.adcSource === "import" ? "selected" : ""}" data-source="import">Import my own</div>
      </div>
    </div>

    ${state.adcSource === "import" ? `
      <div class="field-group">
        <label style="display:flex; align-items:center; gap:8px;">
          Upload JSON file
          <span class="btn-icon" id="import-info-btn" title="How to prepare this file">i</span>
        </label>
        <input type="file" id="import-file-input" accept="application/json,.json">
        <div id="import-status" style="font-size:13px; color:var(--text-muted); margin-top:8px;"></div>
      </div>
    ` : ""}
  `;
}

function wireAdcControls() {
    document.querySelectorAll("#adc-type-pills .pill-option").forEach(el => {
        el.addEventListener("click", () => {
            state.adcType = el.dataset.type;
            renderSetup();
        });
    });
    document.querySelectorAll("#adc-source-pills .pill-option").forEach(el => {
        el.addEventListener("click", () => {
            state.adcSource = el.dataset.source;
            renderSetup();
        });
    });

    const infoBtn = document.getElementById("import-info-btn");
    if (infoBtn) infoBtn.addEventListener("click", openImportInfoModal);

    const fileInput = document.getElementById("import-file-input");
    if (fileInput) fileInput.addEventListener("change", handleFileImport);
}

function handleFileImport(e) {
    const file = e.target.files[0];
    const statusEl = document.getElementById("import-status");
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
        try {
            const data = JSON.parse(evt.target.result);
            if (!Array.isArray(data) || data.length === 0) throw new Error("empty");
            const valid = data.every(q => q.q && Array.isArray(q.options) && q.options.length >= 2 && typeof q.answer === "number");
            if (!valid) throw new Error("bad shape");
            state.importedQuestions = data;
            statusEl.style.color = "var(--green)";
            statusEl.textContent = `✓ Loaded ${data.length} questions.`;
            renderSetup();
        } catch (err) {
            state.importedQuestions = null;
            statusEl.style.color = "var(--red)";
            statusEl.textContent = "✗ Couldn't read that file. Make sure it's valid JSON in the expected format (use the 'i' button for help).";
        }
    };
    reader.readAsText(file);
}

function openImportInfoModal() {
    const promptText = `You are helping me create exam-prep quiz questions from my course notes.

From the notes/text I paste below, generate AT LEAST 100 multiple-choice questions.

Rules:
- Do not repeat or rephrase the same question twice.
- Each question must have exactly 4 answer options.
- Only one option is correct.
- Cover the material broadly and evenly, not just the first few pages.
- Output ONLY valid JSON — an array of objects — with no extra commentary, in exactly this shape:

[
  {
    "q": "Question text here?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "answer": 0
  }
]

"answer" is the zero-based index (0-3) of the correct option in "options".

Here are my notes:
[PASTE YOUR NOTES HERE]`;

    openModal(`
    <h2>Importing your own questions</h2>
    <p>You can generate a custom question bank using an AI model like ChatGPT or Gemini, then upload the result here.</p>
    <ol>
      <li>Copy the prompt below.</li>
      <li>Paste it into ChatGPT, Gemini, or a similar AI chat, then paste your course notes where indicated.</li>
      <li>The AI will reply with a JSON array of questions.</li>
      <li>Save that reply as a <strong>.json</strong> file and upload it above.</li>
    </ol>
    <div class="prompt-box" id="prompt-box">
      <button class="copy-btn" id="copy-prompt-btn">Copy</button>${promptText}
    </div>
  `);

    document.getElementById("copy-prompt-btn").addEventListener("click", () => {
        navigator.clipboard.writeText(promptText).then(() => {
            const btn = document.getElementById("copy-prompt-btn");
            btn.textContent = "Copied!";
            setTimeout(() => (btn.textContent = "Copy"), 1500);
        });
    });
}

/* ============================================================
   START / ACTIVE QUIZ
   ============================================================ */
function startQuiz() {
    const pool = getPool();
    if (pool.length === 0) return;

    const count = Math.min(state.numQuestions, pool.length);
    state.questions = shuffle(pool).slice(0, count);
    state.answers = new Array(state.questions.length).fill(null);
    state.currentIndex = 0;

    if (state.timerMode === "none") {
        state.timeLeftSec = null;
    } else {
        state.timeLeftSec = Number(state.timerMode) * 60;
        clearInterval(state.timerId);
        state.timerId = setInterval(tickTimer, 1000);
    }

    state.view = "active";
    render();
}

function tickTimer() {
    if (state.timeLeftSec === null) return;
    state.timeLeftSec--;
    if (state.timeLeftSec <= 0) {
        clearInterval(state.timerId);
        state.timeLeftSec = 0;
        finishQuiz();
        return;
    }
    const chip = document.getElementById("timer-chip");
    if (chip) {
        chip.textContent = formatTime(state.timeLeftSec);
        chip.classList.toggle("low", state.timeLeftSec <= 30);
    }
}

function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
}

function renderActive() {
    const q = state.questions[state.currentIndex];
    const total = state.questions.length;
    const progressPct = Math.round(((state.currentIndex + 1) / total) * 100);
    const selected = state.answers[state.currentIndex];
    const isLast = state.currentIndex === total - 1;

    app.innerHTML = `
    <div class="quiz-header">
      <strong>${course.code}</strong>
      <div class="progress-bar"><div class="progress-fill" style="width:${progressPct}%"></div></div>
      ${state.timeLeftSec !== null ? `<span class="timer-chip" id="timer-chip">${formatTime(state.timeLeftSec)}</span>` : `<span class="timer-chip">No timer</span>`}
    </div>

    <div class="question-card">
      <div class="q-index">Question ${state.currentIndex + 1} of ${total}</div>
      <h3>${q.q}</h3>
      ${q.options.map((opt, i) => `
        <button class="option-btn ${selected === i ? "selected" : ""}" data-i="${i}">${opt}</button>
      `).join("")}
    </div>

    <div class="quiz-nav">
      <button class="btn btn-secondary" id="prev-btn" ${state.currentIndex === 0 ? "disabled" : ""}>← Previous</button>
      <button class="btn btn-primary" id="next-btn">${isLast ? "Submit Quiz" : "Next →"}</button>
    </div>
  `;

    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            state.answers[state.currentIndex] = Number(btn.dataset.i);
            renderActive();
        });
    });

    document.getElementById("prev-btn").addEventListener("click", () => {
        state.currentIndex--;
        renderActive();
    });

    document.getElementById("next-btn").addEventListener("click", () => {
        if (isLast) {
            finishQuiz();
        } else {
            state.currentIndex++;
            renderActive();
        }
    });
}

/* ============================================================
   RESULTS
   ============================================================ */
function finishQuiz() {
    clearInterval(state.timerId);
    state.view = "results";
    state.resultFilter = "all";

    const total = state.questions.length;
    const correct = state.questions.reduce((acc, q, i) => acc + (state.answers[i] === q.answer ? 1 : 0), 0);
    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

    addAttempt({
        course: course.code,
        type: course.hasTypes ? state.adcType : undefined,
        total,
        correct,
        percent,
        date: new Date().toLocaleString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
    });

    render();
}

function renderResults() {
    const total = state.questions.length;
    const correctCount = state.questions.reduce((acc, q, i) => acc + (state.answers[i] === q.answer ? 1 : 0), 0);
    const percent = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    let filtered = state.questions.map((q, i) => ({ q, i, userAnswer: state.answers[i], isCorrect: state.answers[i] === q.answer }));
    if (state.resultFilter === "correct") filtered = filtered.filter(x => x.isCorrect);
    if (state.resultFilter === "wrong") filtered = filtered.filter(x => !x.isCorrect);

    app.innerHTML = `
    <div class="results-summary">
      <div style="font-size:14px; color:var(--text-muted);">${course.code} results</div>
      <div class="big-score" style="color:${percent >= 70 ? 'var(--green)' : percent >= 50 ? '#e1b12c' : 'var(--red)'}">${percent}%</div>
      <div>${correctCount} correct out of ${total}</div>
    </div>

    <div class="filter-row">
      <button class="pill-option ${state.resultFilter === "all" ? "selected" : ""}" data-filter="all">All (${total})</button>
      <button class="pill-option ${state.resultFilter === "correct" ? "selected" : ""}" data-filter="correct">Correct (${correctCount})</button>
      <button class="pill-option ${state.resultFilter === "wrong" ? "selected" : ""}" data-filter="wrong">Wrong (${total - correctCount})</button>
    </div>

    <div id="review-list">
      ${filtered.map(({ q, i, userAnswer, isCorrect }) => `
        <div class="review-item">
          <span class="tag ${isCorrect ? "tag-correct" : "tag-wrong"}">${isCorrect ? "Correct" : "Wrong"}</span>
          <div class="rq">${i + 1}. ${q.q}</div>
          <div class="ra">Your answer: ${userAnswer === null ? "<em>No answer</em>" : q.options[userAnswer]}</div>
          ${!isCorrect ? `<div class="ra" style="color:var(--green)">Correct answer: ${q.options[q.answer]}</div>` : ""}
        </div>
      `).join("") || `<div class="empty-note">Nothing to show for this filter.</div>`}
    </div>

    <div class="center mt-32">
      <button class="btn btn-secondary" id="retake-btn">Retake Quiz</button>
      <a href="index.html" class="btn btn-primary">Back to Home</a>
    </div>
  `;

    document.querySelectorAll(".filter-row .pill-option").forEach(el => {
        el.addEventListener("click", () => {
            state.resultFilter = el.dataset.filter;
            renderResults();
        });
    });

    document.getElementById("retake-btn").addEventListener("click", () => {
        state.view = "setup";
        render();
    });
}