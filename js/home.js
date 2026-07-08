function isExamOver(course) {
    return new Date(course.examDate).getTime() < Date.now();
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

function renderCourses() {
    const grid = document.getElementById("course-grid");
    grid.innerHTML = "";

    Object.values(COURSES).forEach((course) => {
        const over = isExamOver(course);
        const card = document.createElement("div");
        card.className = "course-card";
        card.style.setProperty("--c1", course.color);
        card.style.setProperty("--c2", course.accent);
        card.innerHTML = `
        <span class="emoji">${course.emoji}</span>
        <h3>${course.code}</h3>
        <div class="course-full">${course.name}</div>
        <div class="exam-meta">📅 ${formatDate(course.examDate)}</div>
        <span class="status-pill ${over ? "status-over" : "status-upcoming"}">
          ${over ? "Exam passed" : "Upcoming"}
        </span>
      `;
        card.addEventListener("click", () => handleCourseClick(course));
        grid.appendChild(card);
    });
}

function handleCourseClick(course) {
    if (isExamOver(course)) {
        openModal(`
        <h2>😅 Too late!</h2>
        <p>This exam is over, what are you doing here? Go touch some grass — or review anyway, no judgment.</p>
        <div class="center mt-24">
          <button class="btn btn-secondary" id="review-anyway-btn">Review anyway</button>
        </div>
      `);
        document.getElementById("review-anyway-btn").addEventListener("click", () => {
            window.location.href = `quiz.html?course=${course.code}`;
        });
        return;
    }
    window.location.href = `quiz.html?course=${course.code}`;
}

function scoreClass(percent) {
    if (percent >= 70) return "good";
    if (percent >= 50) return "mid";
    return "bad";
}

function renderAttempts() {
    const list = document.getElementById("attempts-list");
    const attempts = getAttempts();

    if (attempts.length === 0) {
        list.innerHTML = `<div class="empty-note">No attempts yet — take a quiz and it'll show up here.</div>`;
        return;
    }

    list.innerHTML = attempts.map((a) => `
      <div class="attempt-row">
        <div class="info">
          <span class="score ${scoreClass(a.percent)}">${a.percent}%</span>
          <span class="course-tag">${a.course}${a.type ? " · " + a.type : ""} — ${a.correct}/${a.total} correct</span>
        </div>
        <span class="course-tag">${a.date}</span>
      </div>
    `).join("");
}

document.getElementById("clear-attempts").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    renderAttempts();
});

renderCourses();
renderAttempts();