const pokemonList = POKEMON.map((p) => {
     return p["name"]
})

document.addEventListener("DOMContentLoaded", () => {
  const pokeId = document.querySelector('#pokemon-container')
  console.log(POKEMON)

  const InputValue = document.getElementById('pokemon-search-input')
  let value = InputValue.value
  let arr = ""
  InputValue.addEventListener('keydown', function (e) {
    let keyword = e.key
     if (keyword === "Backspace") {
       arr= arr.slice(0, arr.length-1)
       // if (arr === "") {
       //   while (pokeId.firstChild) {
       //     pokeId.firstChild.remove()
       //   }
       // }
       while (pokeId.firstChild) {
         pokeId.firstChild.remove()
       }
     } else {
       arr += keyword
    }
      console.log(arr)
  let filterPokemon = pokemonList.filter((p) => {
    arr_length = arr.length
    return p.slice(0,arr_length) === arr
  })
  console.log(filterPokemon)



  const frontFilterPokemon = []
  for (let p of POKEMON){
    if(filterPokemon.includes(p['name'])){
      frontFilterPokemon.push(p['sprites']['front'])
    }
  }
  const backFilterPokemon = []
  for (let p of POKEMON){
    if(filterPokemon.includes(p['name'])){
      backFilterPokemon.push(p['sprites']['back'])
    }
  }

 if (arr.length > 0) {

  for (let i = 0; i< frontFilterPokemon.length; i++) {
    let pokeDiv = document.createElement('div')
    let image = document.createElement('img')
    let name = document.createElement('h1')
    let flipCard = document.createElement('p')
    let divFrame = document.createElement('div')
    let divStyle1 = document.createElement('div')
    let divStyle2 =document.createElement('div')
    divFrame.className = 'pokemon-frame'
    divFrame.style= 'width:230px;margin:10px;background:#fecd2f;color:#2d72fx'
    flipCard.className = 'center-text flip-image'
    flipCard.innerHTML = 'Flip N dDudda'
    flipCard.id = filterPokemon[i]
    pokeDiv.className = 'pokemon-container'
    name.className = 'center-text'
    name.innerHTML = filterPokemon[i]
    divStyle1.style = 'width:239px;margin:auto'
    divStyle2.style = 'width:96px;margin:auto'
    // frontImage.style = 'width:239px;margin:auto'
    let frontUrl = frontFilterPokemon[i]
    let backUrl = backFilterPokemon[i]

    image.src = frontUrl

    pokeId.appendChild(pokeDiv)
    pokeDiv.appendChild(divFrame)
    divFrame.appendChild(name)
    divFrame.appendChild(divStyle1)
    divStyle1.appendChild(divStyle2)
    divStyle2.appendChild(image)

    divFrame.appendChild(flipCard)

   flipCard.addEventListener("click", (e)=>{
     if (image.src === frontUrl) {
       image.src = backUrl
     } else {
       image.src = frontUrl
     }
   })
    }
   }
  })




})
