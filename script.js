const list = document.querySelectorAll('.list-block')
const inputedText = document.getElementById('myInput')
const submitButton = document.querySelector('.submit-button')
const ul = document.querySelector('ul')
const delButton2 = document.querySelectorAll('.delButton')
// const num = document.querySelectorAll('span')
// const index = num[num.length - 1].innerText;


const getText = () => {
	const text = inputedText.value
	if (text.length > 0) {
		const div = document.createElement('div');
		// const span = document.createElement('span'); 
		const li = document.createElement('li');
		const button = document.createElement('button')
		const img = document.createElement('img')
		div.setAttribute("class", "sub-container");;
		button.setAttribute("class", "delButton");
		li.setAttribute('class', "list-block");
		img.setAttribute("src", "delete.png");
		img.setAttribute("width", "20px");
		img.setAttribute("height", "20px");
		// span.appendChild(document.createTextNode(Number(index)+1))
		li.appendChild(document.createTextNode(text))
		ul.appendChild(div)
		// div.appendChild(span)
		div.appendChild(li)
		div.appendChild(button)
		button.appendChild(img)
		inputedText.value = ''
	} else if (text.length < 1) {
		alert('enter valid text!')
	}
}

// const deleteIt = () => {
// 	console.log(delButton)
// 	delButton.parentElement.querySelector('span')
// 	// delButton[0].parentElement.remove();
// } 

function deleteIt(element) {
	if (element.target.className === "delButton2"){
		element.target.parentElement.remove();
	}
}

function handleUlClick(element) {
	deleteIt(element);
}

submitButton.addEventListener("click", getText);

ul.addEventListener('click', (e) => {
	if (e.target.className !== 'delButton') return;
	e.target.parentElement.remove(); 
})

// ul.addEventListener("click", handleUlClick)
// delButton.addEventListener("click", deleteIt);