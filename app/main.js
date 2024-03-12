let livros = [];
const endpointDaAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaAPI();

const elementoParaInserirLivros = document.getElementById("livros");

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endpointDaAPI);
  livros = await res.json();
  console.table(livros);
  exibirLivrosNaTela(livros);
}

function exibirLivrosNaTela(listaDeLivros) {
  listaDeLivros.forEach((livro) => {
    const livroDiv = `
        <div class="livro">
        <img src="${livro.imagem}" alt="${livro.alt}" />
        <h2>${livro.titulo}</h2>
        <p>Autor: ${livro.autor}</p>
        <p>Preço: ${livro.preco}</p>
        <p>Categoria: ${livro.categoria}</span>
        </div>
        `;
    elementoParaInserirLivros.innerHTML += livroDiv;
  });
}
