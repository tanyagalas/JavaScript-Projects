const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (!isValid()) {
		return;
	}
	// Send form data to server
});

function isValid() {
	let valid = true;

	if (nameInput.value.trim() === '') {
		setErrorFor(nameInput, 'Name cannot be blank');
		valid = false;
	} else {
		setSuccessFor(nameInput);
	}

	if (emailInput.value.trim() === '') {
		setErrorFor(emailInput, 'Email cannot be blank');
		valid = false;
	} else if (!isEmailValid(emailInput.value.trim())) {
		setErrorFor(emailInput, 'Email is not valid');
		valid = false;
	} else {
		setSuccessFor(emailInput);
	}

	if (messageInput.value.trim() === '') {
		setErrorFor(messageInput, 'Message cannot be blank');
		valid = false;
	} else {
		setSuccessFor(messageInput);
	}

	return valid;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const errorMessage = formControl.querySelector('.error-message');
	formControl.className = 'form-control error';
	errorMessage.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
}
