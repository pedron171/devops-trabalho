// Simulação didática de um workflow rodando passos
const steps = [
  { key: "checkout", label: "Checkout do repositório", delay: 600 },
  { key: "setup", label: "Setup Node v20", delay: 700 },
  { key: "install", label: "Instalar dependências (npm ci)", delay: 900 },
  { key: "test", label: "Rodar testes (npm test)", delay: 1000 },
  { key: "done", label: "Finalizar job", delay: 500 },
];

const logsEl = document.getElementById("logs");
const btn = document.getElementById("runDemo");

function badgeEl(key) {
  return document.querySelector(`[data-badge="${key}"]`);
}

function log(line) {
  const now = new Date().toLocaleTimeString();
  logsEl.textContent += `[${now}] ${line}\n`;
  logsEl.scrollTop = logsEl.scrollHeight;
}

async function run() {
  btn.disabled = true;
  logsEl.textContent = "";
  document.querySelectorAll(".badge").forEach(b => {
    b.classList.remove("is-running","is-ok");
  });

  for (const s of steps) {
    const b = badgeEl(s.key);
    b.classList.add("is-running");
    log(`▶ Iniciando: ${s.label}...`);
    // simula a execução
    await new Promise(r => setTimeout(r, s.delay));
    b.classList.remove("is-running");
    b.classList.add("is-ok");
    log(`✔ Concluído: ${s.label}`);
  }

  log("🎉 Workflow finalizado com sucesso!");
  btn.disabled = false;
}

btn?.addEventListener("click", run);
