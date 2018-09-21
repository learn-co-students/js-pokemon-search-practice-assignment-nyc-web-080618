document.addEventListener("DOMContentLoaded", () => {
  console.log(POKEMON)

  const pokemonContainer = document.getElementById('pokemon-container')
  const pokemonSearchForm = document.getElementById('pokemon-search-form')


  pokemonSearchForm.addEventListener('keyup', (event)=> {
    console.log(event.key)
    console.log(event.target.value)
    let result = POKEMON.filter(pokemon => {
      return pokemon.name.includes(event.target.value)
    })



    for(let element of result){
      let pokeBox = document.createElement('div')
      pokeBox.className = 'pokemon-container'
      let pokeName = document.createElement('h1')
      pokeName.innerText = element.name
      pokeName.className = 'center-text'
      pokeBox.appendChild(pokeName)
      let pokeImgFront = document.createElement('img')
      pokeImgFront.src = element.sprites.front
      pokeBox.appendChild(pokeImgFront)

      let flipText = document.createElement('p')
      flipText.innerText = "flip card"
      flipText.id = "flip"
      flipText.className = 'center-text'
      pokeBox.appendChild(flipText)

      flipText.addEventListener("click", event =>{
          if (pokeImgFront.src === element.sprites.front){
          pokeImgFront.src = element.sprites.back
        } else {
          pokeImgFront.src = element.sprites.front
        }
      })


      pokemonContainer.appendChild(pokeBox)

    }

  })





})
