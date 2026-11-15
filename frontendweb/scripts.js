const catalogo = document.getElementById('catalogo');

async function carregarPokemons() {
  for (let i = 1; i <= 12; i++) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemon = await resposta.json();

    catalogo.innerHTML += `
      <div class="card">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h3>#${pokemon.id} - ${pokemon.name}</h3>
        <p>Tipo: ${pokemon.types[0].type.name}</p>
      </div>
    `;
  }
}

carregarPokemons();