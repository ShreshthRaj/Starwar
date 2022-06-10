let movies_div=document.getElementById('movies');

let id;

// searchMovies()
async function searchMovies(q){

try {
    

    const url= `https://swapi.dev/api/people/?search`;
    let res=await fetch(url);
    // console.log(res)
    let data=await res.json();
    // console.log(data)
    return data.results;

}
catch(error)
{
    console.log('error:',error)
}
}

function appendMovies(movies){
    movies_div.innerHTML=null;
    if(movies===undefined){
        return false;
    }
    
    movies.forEach(function(el){
        let p=document.createElement('p');
        p.innerText=el.name;
        // p.style.color="white"

        movies_div.append(p)
    })
}





    // let url=`https://www.omdbapi.com/?s=${q}&apikey=63871d6f`
    // let res=await fetch(url)
    // let data=await res.json()


    // console.log(data)
    







async function main(){
    let query=document.getElementById('query').value;
    // console.log('query',query)
    let response =searchMovies(query)
    let data=await response;
    console.log('data:',data);
    appendMovies(data)


    // searchMovies is returning a promise, async function no matter
    // console.log('x:',x)


}









function debounceFunction(func,delay){
    if(id){
        clearTimeout(id);
    }
     id=setTimeout(function(){
        func();

    },delay);

}