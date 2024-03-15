const elementoParaInserirLivros = document.getElementById("livros");

function exibirLivrosNaTela(listaDeLivros) {
  elementoParaInserirLivros.innerHTML = "";
  listaDeLivros.forEach((livro) => {
    const livroDiv = `
          <div class="livro">
          <img src="${livro.imagem}" alt="${livro.alt}" />
          <h2>${livro.titulo}</h2>
          <p>Autor: ${livro.autor}</p>
          <p>Preço: ${livro.preco.toFixed(2)}</p>
          <p>Categoria: ${livro.categoria}</span>
          </div>
          `;
    elementoParaInserirLivros.innerHTML += livroDiv;
  });
}
