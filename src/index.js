document.addEventListener("DOMContentLoaded", () => {
  const field = document.querySelector("#pokemon-search-input")
  field.addEventListener("keyup", function (e) {
    const container = document.querySelector("#pokemon-container")
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild)
    }

    const selected = POKEMON.filter( function (x) {
      return x.name.includes(field.value)
    })

    selected.forEach( function(pokemon) {
      const div = document.createElement("div")
      div.className = "pokemon-container"

      const h1 = document.createElement("h1")
      h1.innerHTML = pokemon.name

      const imgDiv = document.createElement("div")
      imgDiv.style = "width:96px;margin:auto"

      const img = document.createElement("img")
      img.src = pokemon.sprites.front
      img.className = pokemon.name

      const p = document.createElement("p")
      p.innerHTML = "flip card"
      p.className = "center-text flip-image"
      p.style = "text-align: center"
      p.className = pokemon.name

      p.addEventListener("click",function() {
        const poke = POKEMON.find( function (pokemon) {
          return pokemon.name == this.className
        }.bind(this))
        const pokeImg = document.querySelector(`img.${p.className}`)
        if (poke.sprites.front == pokeImg.src) {
          pokeImg.src = poke.sprites.back
        } else {
          pokeImg.src = poke.sprites.front
        }
      })

      div.appendChild(h1)
      div.appendChild(imgDiv)
      imgDiv.appendChild(img)
      div.appendChild(p)
      container.appendChild(div)
    })
  })
})
