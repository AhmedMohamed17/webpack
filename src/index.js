import generateJoke from "./generateJoke"
import "./style/main.scss"
import laugh from "./assets/laugh.svg"

console.log("777776")


const laughImg= document.getElementById("laughImg");
laughImg.src=laugh;

const jokeBtn=document.getElementById("jokeBtn");
jokeBtn.addEventListener("click",generateJoke)


console.log(generateJoke())
