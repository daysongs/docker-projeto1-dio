const cardpokemon = document.querySelector("#cardpokemon")


const limit1 = 1
let id = (document.cookie.split('=')[1])-1;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    <li class="abilities">ABILITIES</li>
                    ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('')}
                    <li class="height">Height :${pokemon.height} </li>
                    <li class="weight">Weight :${pokemon.weight} </li>
                </ol>
                  <div>
                    <img src="${pokemon.photo}"
                         alt="${pokemon.name}">
                  </div>
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        cardpokemon.innerHTML += newHtml
    })
}
loadPokemonItens(id, limit1)







