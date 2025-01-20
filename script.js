const form = document.getElementById('feedbackForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');

const inputs = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    category: document.getElementById('category'),
    feedback: document.getElementById('feedback'),
    rating: document.getElementById('rating'),
};

const errors = {
    name: document.getElementById('nameError'),
    email: document.getElementById('emailError'),
    category: document.getElementById('categoryError'),
    feedback: document.getElementById('feedbackError'),
    rating: document.getElementById('ratingError'),
};
submitBtn.addEventListener('click', () => {
    let isValid = true;

    Object.values(errors).forEach(error => error.textContent = '');

    if (inputs.name.value.trim() === '') {
        errors.name.textContent = 'Name is required.';
        inputs.name.classList.add('shake');
        isValid = false;
    } else {
        inputs.name.classList.remove('shake');
    }

    if (inputs.email.value.trim() === '') {
        errors.email.textContent = 'Email is required.';
        inputs.email.classList.add('shake');
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(inputs.email.value)) {
        errors.email.textContent = 'Invalid email format.';
        inputs.email.classList.add('shake');
        isValid = false;
    } else {
        inputs.email.classList.remove('shake');
    }

    if (inputs.category.value === '') {
        errors.category.textContent = 'Please select a category.';
        inputs.category.classList.add('shake');
        isValid = false;
    } else {
        inputs.category.classList.remove('shake');
    }

    // Validate feedback
    if (inputs.feedback.value.trim() === '') {
        errors.feedback.textContent = 'Feedback is required.';
        inputs.feedback.classList.add('shake');
        isValid = false;
    } else {
        inputs.feedback.classList.remove('shake');
    }

    // Validate rating
    if (inputs.rating.value === '') {
        errors.rating.textContent = 'Please select a rating.';
        inputs.rating.classList.add('shake');
        isValid = false;
    } else {
        inputs.rating.classList.remove('shake');
    }

    // If valid, show success message
    if (isValid) {
        successMessage.style.display = 'block';
        successMessage.style.animation = 'typing 2s steps(30, end), blink-caret .5s step-end infinite';
        form.reset();
    }
});