// Get references to the relevant form elements
const form = document.querySelector('.feedback-form');
const anonymousCheckbox = document.getElementById('anonymous');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const sourceField = document.getElementById('source');
const checkboxField = document.getElementById('checkbox');

// Function to update the required attribute of the contact fields
function updateRequiredAttributes() {
    if (anonymousCheckbox.checked) {
        nameField.removeAttribute('required');
        emailField.removeAttribute('required');
        sourceField.removeAttribute('required');
    } else {
        nameField.setAttribute('required', true);
        emailField.setAttribute('required', true);
        sourceField.setAttribute('required', true);
    }
}

// Function to validate form before submission
function validateForm(event) {
    // Check if the checkbox for privacy policy and terms is checked
    if (!checkboxField.checked) {
        alert("Please read and check the Privacy Policy and Terms and Conditions.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Update the required attribute based on anonymous checkbox
    updateRequiredAttributes();

    // Use reportValidity() to trigger browser validation
    if (!form.reportValidity()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
}

// Attach event listener to form submit event
form.addEventListener('submit', validateForm);

// Attach event listener to anonymous checkbox change event
anonymousCheckbox.addEventListener('change', updateRequiredAttributes);
