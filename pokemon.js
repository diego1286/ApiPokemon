
async function getPokemon(){
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
       /* console.log(data);
        data.results.forEach((pokemon) => {
            console.log(pokemon.name);
        })*/

       const names =data.results.map(pokemon =>pokemon.name);
       console.log(names);

       const filterId= data.results.filter(pokemon=>pokemon.name === 'bulbasaur');
       console.log(filterId);
   
    }catch(error){
        console.log(error);
    }
}

getPokemon()