const botoes = document.querySelectorAll(".btn");

botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementBtn = document.getElementById(this.id);
  const categoria = elementBtn.value;
  let livrosFiltrados = livros.filter((livro) => livro.categoria == categoria);
  console.table(livrosFiltrados);
}
