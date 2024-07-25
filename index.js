const day_of_birth_i = document.querySelector('input[type="date"]');
const next_btn = document.querySelector('.next');
const result = document.querySelector('.result');
const resultContent = document.querySelector('.result_content');

let valid = false; // Initialize `valid` as `false`

// Function to check the validity of the date of birth
function checkValidity() {
    const dob_for_yn = '2005-07-18';
    const day_of_birth_value = day_of_birth_i.value;

    if (day_of_birth_value === dob_for_yn) {
        valid = true;
        next_btn.removeAttribute('disabled'); // Enable the button when valid
        result.classList.add('invalid'); // Hide the result
        resultContent.classList.add('valid');
        resultContent.textContent = "这是正确的 :3" ; 
        localStorage.setItem('accessToken', 'true');
    } else {
        localStorage.setItem('accessToken', 'false');
        valid = false;
        next_btn.setAttribute('disabled', 'true'); // Disable the button when invalid
        result.classList.add('invalid'); // Show the result
        resultContent.textContent = 'Try again';
        resultContent.classList.remove('valid');
    }
}

// Set up event listener for date input change
day_of_birth_i.addEventListener('change', checkValidity);

// Set up event listener for the .next button
next_btn.addEventListener('click', function() {
    if (valid) {
        console.log('Ok');
        window.location.href = 'page2.html';
    } else {
        console.log('Not ok');
    }
});

// Disable the button when the page loads
next_btn.setAttribute('disabled', 'true');
