const Pokemon = (() => {
  // array to store ALL pokemon
  const allPokemon = []
  let filteredListOfPokemon = null

  return class Pokemon {
    constructor(attributesObject) {
      this.id = attributesObject.order
      this.name = attributesObject.name
      this.abilities = attributesObject.abilities
      this.sprites = attributesObject.sprites
      this.flippedCard = false
      // add each newly created pokemon "instance" to our allPokemon array
      allPokemon.push(this)
    }

    static renderAll() {
      //default to all pokemon if no arg is passed
      //static is like a "class method": Pokemon.renderAll()
      // return a large string of HTML that we can use to set innerHTML when rendering and re-rendering all pokemon
      if (filteredListOfPokemon) {
        return filteredListOfPokemon.map(pokeInstance => pokeInstance.render()).join('')
      } else {
        return allPokemon.map(pokeInstance => pokeInstance.render()).join('')
      }
    }

    static filterPokemonBasedOnSearchTerm(userPokeNameToSearch) {
      filteredListOfPokemon = allPokemon.filter(pokeInstance => pokeInstance.name.includes(userPokeNameToSearch.toLowerCase())
      )
    }

    static flipPokemonImage(pokeName) {
      // find the pokemon that the user clicked by name
      const clickedPokemon = allPokemon.find(pokeInstance => pokeInstance.name === pokeName)
      // toggle flipped from true to false
      clickedPokemon.flippedCard = !clickedPokemon.flippedCard
    }

    render() {
      // "instance" method on an individual pokemon: pikachu.render()
      // since the EXECUTION CONTEXT of this method is pikachu, `this` will be that pokemon
      return `<div class="pokemon-container">
          <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc">
            <h1 class="center-text">${this.name}</h1>
            <div style="width:239px;margin:auto">
              <div style="width:96px;margin:auto">
                <img src=${this.flippedCard ? this.sprites.back : this.sprites.front}>
              </div>
            </div>
            <button data-name="${this.name}" style="padding:10px;" class="center-text flip-image">
              FlipIt™️
            </button>
          </div>
        </div>`
    }
  }
})()
