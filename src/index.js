document.addEventListener('DOMContentLoaded', () => {
  // grab the DOM elements we care about:
  const divToAppendPokemon = document.querySelector('#poke-container')
  const userSearchInputField = document.querySelector('#pokemon-search-input')

  console.log(POKEMON) //log our data
  // create new pokemon as soon as our app mounts:
  POKEMON.forEach(pokeData => new Pokemon(pokeData))
  // initially render ALL pokemon
  divToAppendPokemon.innerHTML = Pokemon.renderAll()

  userSearchInputField.addEventListener('input', event => {
    const userSearchTerm = event.target.value
    Pokemon.filterPokemonBasedOnSearchTerm(userSearchTerm)
    divToAppendPokemon.innerHTML = Pokemon.renderAll()
  })
  // DOM events will bubble up the tree
  // a parent node will know about ALL EVENTS that happen to its children
  // we can listen for clicks on the outermost PARENT NODE and respond accordingly
  divToAppendPokemon.addEventListener('click', event => {
    // if the user clicked a button
    if (event.target.nodeName === 'BUTTON') {
      const clickedPokemonName = event.target.dataset.name

      Pokemon.flipPokemonImage(clickedPokemonName)
      divToAppendPokemon.innerHTML = Pokemon.renderAll()
    }
  })
})
