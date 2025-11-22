document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector(".newsletter input");
    const messageBox = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // prevent page reload

        const email = emailInput.value.trim();

        if (email === "") {
            messageBox.textContent = "Please enter a valid email address.";
            return;
        }

        messageBox.textContent = 
            `Thank you! Your email address <${email}> has been added to our mailing list!`;
    });
});
