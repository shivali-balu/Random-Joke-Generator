const btn = document.getElementById("btn") ; 
btn.addEventListener("click" , generateJoke) ; 
function generateJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((res)=>res.json())
    .then((joke)=>{
        document.getElementById("ques").innerHTML = joke.setup ; 
        document.getElementById("ans").innerHTML = joke.punchline ; 
    }) 
}
    