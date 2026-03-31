function clicou() {
  const mensagem = document.getElementById("mensagem");

  mensagem.innerText = "Funcionou! 🎉";
  mensagem.style.color = "#4CAF50";
  mensagem.style.fontWeight = "bold";

  // animação simples
  mensagem.style.transform = "scale(1.1)";
  mensagem.style.transition = "0.3s";

  setTimeout(() => {
    mensagem.style.transform = "scale(1)";
  }, 300);
}