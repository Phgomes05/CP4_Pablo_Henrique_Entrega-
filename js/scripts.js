/* CP3 — interatividade e persistência local */
(function () {
  "use strict";
  const STORAGE_KEY = "pabloPortfolioInteresses";
  const FORM_KEY = "pabloPortfolioUltimoContato";

  function readJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch (_) { return fallback; }
  }

  function renderInterests() {
    const saved = readJSON(STORAGE_KEY, []);
    const output = document.getElementById("saved-interests");
    if (output) output.textContent = saved.length ? saved.join(", ") : "Nenhum interesse salvo ainda.";
    document.querySelectorAll("[data-favorite]").forEach(button => {
      const active = saved.includes(button.dataset.favorite);
      button.setAttribute("aria-pressed", String(active));
      button.textContent = active ? "✓ Interesse salvo" : "☆ Salvar interesse";
    });
  }

  document.querySelectorAll("[data-favorite]").forEach(button => {
    button.addEventListener("click", () => {
      const saved = readJSON(STORAGE_KEY, []);
      const item = button.dataset.favorite;
      const next = saved.includes(item) ? saved.filter(value => value !== item) : [...saved, item];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      renderInterests();
    });
  });
  renderInterests();

  // Desenha um gráfico simples na página de gráficos.
  const canvas = document.getElementById("desenho");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const bars = [55, 95, 135, 175, 215];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "16px Arial";
    ctx.fillStyle = "#333";
    ctx.fillText("Evolução dos estudos (exemplo)", 18, 28);
    bars.forEach((height, index) => {
      const x = 35 + index * 100;
      ctx.fillStyle = "#b51f26";
      ctx.fillRect(x, 220 - height, 55, height);
      ctx.fillStyle = "#333";
      ctx.fillText(String(index + 1), x + 22, 242);
    });
  }

  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  const lastSubmission = document.getElementById("last-submission");

  function showLastSubmission() {
    if (!lastSubmission) return;
    const data = readJSON(FORM_KEY, null);
    lastSubmission.textContent = data
      ? `Contato de ${data.nome} (${data.email}) salvo em ${data.dataHora}.`
      : "Nenhuma mensagem salva.";
  }
  showLastSubmission();

  if (form && feedback) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      feedback.className = "feedback-message";
      const data = Object.fromEntries(new FormData(form).entries());
      const nome = (data.nome || "").trim();
      const mensagem = (data.mensagem || "").trim();
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "");
      const telefoneValido = /^[0-9() +\-]{10,18}$/.test(data.telefone || "");

      let erro = "";
      if (nome.length < 3) erro = "Informe seu nome completo (mínimo de 3 caracteres).";
      else if (!emailValido) erro = "Informe um endereço de e-mail válido.";
      else if (!telefoneValido) erro = "Confira o telefone informado.";
      else if (!data.data) erro = "Selecione a data de contato.";
      else if (!data.assunto) erro = "Selecione um assunto.";
      else if (!data.preferencia) erro = "Escolha como prefere ser contatado.";
      else if (mensagem.length < 10) erro = "A mensagem precisa ter pelo menos 10 caracteres.";
      else if (!data.autorizacao) erro = "É necessário autorizar o uso dos dados para retorno.";

      if (erro) {
        feedback.textContent = erro;
        feedback.classList.add("error");
        return;
      }

      const registro = {
        nome, email: data.email, assunto: data.assunto,
        mensagem, dataHora: new Date().toLocaleString("pt-BR")
      };
      localStorage.setItem(FORM_KEY, JSON.stringify(registro));
      feedback.textContent = "Dados validados e salvos neste navegador com sucesso! Este formulário é demonstrativo e não envia e-mail.";
      feedback.classList.add("success");
      form.reset();
      showLastSubmission();
    });
    form.addEventListener("reset", () => {
      feedback.className = "feedback-message";
      feedback.textContent = "";
    });
  }
})();
