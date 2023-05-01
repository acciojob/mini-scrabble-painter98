//your code here
let text = document.getElementById('evaluatedText');
let letters = document.getElementById('letterCount');

text.addEventListener('input',()=>{
	let str = text.value;
	letters.innerText = str.length;
});