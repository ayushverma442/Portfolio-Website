const output = document.getElementById("output");
const input = document.getElementById("command");

/* Command responses */
const responses = {
  help: `
Available commands:
• about        → Who I am
• skills       → Technical skills
• education    → Academic background
• contact      → Email & phone
• profiles     → Coding profiles
• neofetch     → System-style profile view
• clear        → Clear terminal
  `,

  about: `
Ayush Verma
Frontend Developer & Computer Science Student
Focused on clean UI, scalable code,
and continuous learning.
  `,

  skills: `
HTML5
CSS3
JavaScript
Git & GitHub
Data Structures (C++)
  `,

  education: `
B.Tech in Computer Science Engineering
2024 – Present
CGPA: 8.52
Pranveer Singh Institute of Technology

Senior Secondary (CBSE)
2022 – 2024
Score: 86.4%
  `,

  contact: `
Email: <a href="mailto:ayush.verma.1302@gmail.com">ayush.verma.1302@gmail.com</a>
Phone: <a href="tel:7786863473">7786863473</a>
  `,

  profiles: `
GitHub: <a href="https://github.com/ayushverma442" target="_blank">github.com/ayushverma442</a>
LeetCode: <a href="https://leetcode.com/u/verma_ayush/" target="_blank">leetcode.com/verma_ayush</a>
GeeksforGeeks: <a href="https://www.geeksforgeeks.org/profile/ayushvergoh6" target="_blank">gfg.org/ayush</a>
CodeChef: <a href="https://www.codechef.com/users/huge_zenith_31" target="_blank">codechef.com/huge_zenith_31</a>
  `,

  neofetch: `
<div class="neofetch">
  <img src="Photo.jpg" alt="Ayush Verma">
  <div>
    <div><span class="label">User:</span> Ayush Verma</div>
    <div><span class="label">Role:</span> Frontend Developer</div>
    <div><span class="label">Location:</span> Kanpur, India</div>
    <div><span class="label">Education:</span> B.Tech CSE</div>
    <div><span class="label">CGPA:</span> 8.52</div>
    <div><span class="label">Skills:</span> HTML, CSS, JavaScript</div>
  </div>
</div>
  `
};

/* Print output */
function print(text) {
  output.innerHTML += `<div class="output-line">${text}</div>`;
  output.scrollTop = output.scrollHeight;
}

/* Command history */
let history = [];
let historyIndex = -1;

input.addEventListener("keydown", (e) => {
  /* ENTER */
  if (e.key === "Enter") {
    const cmd = input.value.trim().toLowerCase();

    if (cmd !== "") {
      history.push(cmd);
      historyIndex = history.length;
    }

    print(`<span class="prompt">➜ ayush</span> <span class="path">~</span> $ ${cmd}`);
    input.value = "";

    if (cmd === "clear") {
      output.innerHTML = "";
      return;
    }

    print(responses[cmd] || "Command not found. Type 'help'");
  }

  /* ARROW UP */
  if (e.key === "ArrowUp") {
    if (history.length && historyIndex > 0) {
      historyIndex--;
      input.value = history[historyIndex];
    }
    e.preventDefault();
  }

  /* ARROW DOWN */
  if (e.key === "ArrowDown") {
    if (historyIndex < history.length - 1) {
      historyIndex++;
      input.value = history[historyIndex];
    } else {
      historyIndex = history.length;
      input.value = "";
    }
    e.preventDefault();
  }
});

/* Minimal startup hint */
print("Type 'help' to see available commands.");
