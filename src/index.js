  const searchInput=document.getElementById('pokemon-search-input')
  const pokemonContainer=document.getElementById('pokemon-container')

  searchInput.addEventListener("keyup",event=>{
    pokemonContainer.innerHTML=''
    if (event.target.value.length===0) {
      return
     }
        POKEMON.forEach(pokemon=>{
          if (pokemon.name.includes(event.target.value)) {
            pokemonContainer.innerHTML += `<div class="pokemon-container">
                <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
                <h1 class="center-text">${pokemon.name}</h1>
                <div style="width:239px;margin:auto">
                  <div style="width:96px;margin:auto">
                    <img id='${pokemon.name}' src="${pokemon.sprites.front}">
                  </div>
                </div>
                <p style="padding:10px;" class="center-text flip-image" data-pokename="${pokemon.name}" data-action="flip-image">flip card</p>
                </div>
              </div>`
          }//render all the info of all the pokemon after you search
      })

      let flips = document.getElementsByClassName('flip-image')
      for (var i = 0; i < flips.length; i++) {
        flips[i].addEventListener('click', event=>{
          let pokemonpic = document.getElementById(event.target.dataset.pokename)//find the node of clicked pokemon picture
          let poke = POKEMON.find(pokemon => pokemon.name === pokemonpic.id)//find the poke in object array
          pokemonpic.src =  pokemonpic.src === poke.sprites.front ? poke.sprites.back : poke.sprites.front// flip the pic
        })
      }
      })
