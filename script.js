//your code here
let text = document.getElementById('evaluatedText');
let letters = document.getElementById('letterCount');
let count=0;

text.addEventListener('input',()=>{
	count++;
	letters.innerText = count;
});