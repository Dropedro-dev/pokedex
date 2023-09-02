const pokemonOL = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 20;
let offset = 0;

const clonePokemons = pokemon => {
    const liPokemon = model.querySelector('#model .pokemon').cloneNode(true);
    
    liPokemon.setAtribute('data-key', pokemon.id);
    liPokemon.querySelector('.pokemonImage').classList.add(pokemon.type);
    liPokemon.querySelector('.number').innerHTML = `#${pokemon.id}`;
    liPokemon.querySelector('.pokemonImage img').src = pokemon.photo;
    liPokemon.querySelector('.pokemonImage img').alt = pokemon.name;
    liPokemon.querySelector('.name').innerHTML = pokemon.name;
    liPokemon.querySekector('.detail .types').innerHTML = pokemon.types.map(type =>`<li class="type ${type}">${type}</li>`).join(' ');

}

const pokemonToLi = pokemon =>{
    return `
        <li class="pokemon">
            <a href="">
                <div class="pokemonImage ${pokemon.type}">

                    <span class="number">#${pokemon.id}</span>
                    <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
                </div>
                                    
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type => `<li class="type ${type}">${type}</li>`)).join(' ')}
                    </ol>

                    
                </div>
            </a>
        </li>
`};
const loadPokemonItens = (offset, limit) =>{
    pokeApi.getPokemons(offset, limit).then((pokemonList = [])=> {
        const newHtml =pokemonList.map( pokemon => pokemonToLi(pokemon)).join('');
        pokemonOL.innerHTML += newHtml;
        
    })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click',()=>{
    offset+= limit;
    loadPokemonItens(offset, limit);
})