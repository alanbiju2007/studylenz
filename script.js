// --- 1. Task Progress Logic ---
function updateProgress() {
  const checkboxes = document.querySelectorAll('#task-list input[type="checkbox"]');
  const checked = document.querySelectorAll('#task-list input[type="checkbox"]:checked');
  const pct = Math.round((checked.length / checkboxes.length) * 100);

  document.getElementById("progress-bar").style.width = pct + "%";
  document.getElementById("progress-text").textContent = pct + "% Completed";
}

// --- 2. Pomodoro Focus Timer ---
let timeLeft = 25 * 60;
let timerId = null;

function renderTime() {
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  document.getElementById("timer-display").textContent = 
    `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function toggleTimer() {
  const btn = document.getElementById("timer-btn");
  if (timerId === null) {
    // Start
    btn.textContent = "Pause";
    timerId = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        renderTime();
      } else {
        clearInterval(timerId);
        timerId = null;
        btn.textContent = "Start";
        alert("Pomodoro session completed! Time for a 5-minute break.");
      }
    }, 1000);
  } else {
    // Pause
    clearInterval(timerId);
    timerId = null;
    btn.textContent = "Resume";
  }
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  timeLeft = 25 * 60;
  document.getElementById("timer-btn").textContent = "Start";
  renderTime();
}

// --- 3. Lens AI Chat Mock ---
function sendDoubt() {
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text) return;

  const chatBox = document.getElementById("chat-box");

  // User bubble
  const userMsg = document.createElement("div");
  userMsg.className = "chat-msg user";
  userMsg.textContent = text;
  chatBox.appendChild(userMsg);
  input.value = "";

  // Bot response
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "chat-msg bot";
    botMsg.textContent = "Great question! Let's break this down into first principles step-by-step...";
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 600);
}
