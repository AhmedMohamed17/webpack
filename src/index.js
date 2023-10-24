import generateJoke from "./generateJoke"
import "./style/main.scss"
import laugh from "./assets/laugh.svg"

console.log("77777")


const laughImg= document.getElementById("laughImg");
laughImg.src=laugh;

const jokeBtn=document.getElementById("jokeBtn");
jokeBtn.addEventListener("click",generateJoke)


console.log(generateJoke())