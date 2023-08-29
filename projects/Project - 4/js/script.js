const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

/* daca vrem sa obtine un numar intre 1 si 10 trebuie doar sa multiplicam cu 10*/
/*iar pt a obtine nr intregi folosim math.ceil*/

const question = document.getElementById("questionID");
question.innerText= `What is ${num1} multiply by ${num2}? `;


const formElem = document.getElementById("form");
const inputElem = document.getElementById("inputValue");
const scoreElem = document.getElementById("score");


let score = JSON.parse(localStorage.getItem("score")); // 0 - let pt a defini o variabila
if (!score) {
	score=0;
}
scoreElem.innerText=`Score : ${score}`;

const correctAnswer = num1 * num2;
formElem.addEventListener("submit",()=>{
	const userAnswer = + inputElem.value;
	/*am folosit semnul plus pt a converti valoare intrun numar si nu string cum era initial*/
	if (userAnswer===correctAnswer) {
		score++;
	}else{
		score--
	}
	updateLocalStorage();
	//de fiecare data cand trimite un numar pagina va fi refres-uit si se va pierde scorul
	// iar scorul va fi resetat din nou la 0 
	scoreElem.innerText=`Score : ${score}`;
})


function updateLocalStorage() {
	// body...
	//trebuie mai intai ca valoare ce o salvam, sa o convertim in string 
	localStorage.setItem("score",JSON.stringify(score));
}

console.log(num1); 
