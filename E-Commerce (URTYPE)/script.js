document.addEventListener("DOMContentLoaded", () => {
    // Accordion functionality for FAQs
    const accordionItems = document.querySelectorAll(".accordion li label");

    accordionItems.forEach(label => {
        label.addEventListener("click", () => {
            const radioButton = label.previousElementSibling;
            const allRadios = document.querySelectorAll('input[type="radio"]');

            // Close other accordion sections
            allRadios.forEach(radio => {
                if (radio !== radioButton) {
                    radio.checked = false;
                }
            });

            // Toggle the current section
            radioButton.checked = !radioButton.checked;
        });
    });

    // Email Signup Validation
    const emailForm = document.querySelector(".email-signup");
    emailForm.addEventListener("submit", event => {
        event.preventDefault(); // Prevent form submission

        const emailInput = emailForm.querySelector("input[type='email']");
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailPattern.test(emailValue)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
        } else {
            alert(`Welcome! ${emailValue} has been successfully subscribed.`);
            emailInput.value = ""; // Clear the input field
        }
    });

    // Logo Click Redirect (Example Behavior)
    const logo = document.querySelector("input[type='image']");
    logo.addEventListener("click", () => {
        window.location.href = "#"; // Replace "#" with the homepage URL or desired action
    });

    // Add hover effect to FAQ labels (optional)
    const faqLabels = document.querySelectorAll(".accordion label");
    faqLabels.forEach(label => {
        label.addEventListener("mouseover", () => {
            label.style.color = "#9bf904"; // Change color on hover
        });
        label.addEventListener("mouseout", () => {
            label.style.color = ""; // Reset color
        });
    });

    // Placeholder for additional functionality (e.g., navbar toggling for mobile)
});
