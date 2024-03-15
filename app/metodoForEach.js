const elementoParaInserirLivros = document.getElementById("livros");
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById(
  "valor_total_livros_disponiveis"
);

function exibirLivrosNaTela(listaDeLivros) {
  elementoParaInserirLivros.innerHTML = "";
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = "";
  listaDeLivros.forEach((livro) => {
    let disponibilidade =
      livro.quantidade > 0 ? "livro__imagens" : "livros__imagens indisponivel";
    const livroDiv = `
          <div class="livro">
          <img class="${disponibilidade}" src="${livro.imagem}" alt="${
      livro.alt
    }" />
          <h2>${livro.titulo}</h2>
          <p>Autor: ${livro.autor}</p>
          <p>Preço: ${livro.preco.toFixed(2)}</p>
          <p>Categoria: ${livro.categoria}</span>
          </div>
          `;
    elementoParaInserirLivros.innerHTML += livroDiv;
  });
}
