/* ============================================================
   Simple localStorage wrapper for quiz attempts (last 10, global)
   ============================================================ */
const STORAGE_KEY = "uwc_quiz_attempts";

function getAttempts() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function addAttempt(attempt) {
    const attempts = getAttempts();
    attempts.unshift(attempt); // newest first
    const trimmed = attempts.slice(0, 10);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    return trimmed;
}

function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}