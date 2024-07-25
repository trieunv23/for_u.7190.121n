const encodedFeaalk = 'MDYt' ; 
const day_of_birth_i = document.querySelector('input[type="date"]');
const next_btn = document.querySelector('.next');
const result = document.querySelector('.result');
const resultContent = document.querySelector('.result_content');

let valid = false; // Initialize `valid` as `false`

// With a GitHub Enterprise account, you ca


/* first stars began to twinkle, signaling the approach of night. It was a serene moment, a perfect end lished sites to share your internal documentation or knowledge base */ const encodedOrangew = 'MDUt' /* of blooming flowers. As the sky transitioned from orange to pink, the first stars began to twi */


//// melodiously, returning to their nests after a day of foraging. A gentle breeze rustled through the trees, carrying with it the scent of blooming flowers. As the sky transitioned from orange to pink, the first stars began to twinkle, signaling the approa
// n restrict access to your GitHub Pages site by publishing it privately. You can use privately published sites to share your internal documentation or knowledge base
//// n restrict access to your GitHub Pages site by publishing it privately. You can use privately published sites to share your internal documentation or knowledge base

/* The sun was setting behind the hills, casting a golden glow over the fields. Birds were chirping melodiously, returning to their nests after a day of foraging */ const encodedScent_of = 'MTI=' /* irst stars began to twinkle, signaling the approach of night. It was a serene moment, a perfect end to a beautiful day, reminding everyone of the simple joys that nature bring */

//////  sun was setting behind the hills, casting a golden glow over the fields. Birds were chirping melodiously, returning to their nests after a day of foraging. A gentle breeze

//////

////

// Function to check the validity of the date of birth

function decodeBase64(str) {
    return atob(str);
}

const feaalk = decodeBase64(encodedFeaalk);
const orangew = decodeBase64(encodedOrangew);
const scent_of = decodeBase64(encodedScent_of);

function commitValidity () {
     return '20' + orangew + feaalk + scent_of ; 
}

// Function to check the validity of the date of birth
function checkValidity() {
    const dob_for_yn = commitValidity();
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
