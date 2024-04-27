let password = "";
const resultElement = document.querySelector('.result');
const inputElement = document.querySelector('.input');

const btnElement = document.getElementById('btn');

function generatePassword() {
    let length = parseFloat(document.getElementById("pass").value);

    btnElement.disabled = true;

    if (length >= 7 && length < 12) {
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const specialChar = "!@#$%^&*()_+";

        const randomUpperIndex = Math.floor(Math.random() * upperCase.length);
        password += upperCase[randomUpperIndex];

        for (let i = 0; i < 3; i++) {
            const randomLowerIndex = Math.floor(Math.random() * lowerCase.length);
            password += lowerCase[randomLowerIndex];
        }

        const randomSpecialIndex = Math.floor(Math.random() * specialChar.length);
        password += specialChar[randomSpecialIndex];

        for (let i = 0; i < length - 5; i++) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            password += numbers[randomIndex];
        }
        document.getElementById("result").innerText = password;
        password = "";

        resultElement.style.display = 'block';
        setTimeout(() => {
            btnElement.disabled = false;
        }, 2000);
    }
    else {
        resultElement.style.display = 'none';
        // Create a new div element
        const divElement = document.createElement("div");
        divElement.classList.add("yourClassName");

        const pElement = document.createElement("p");
        pElement.textContent = "Password can be of 7-12 characters";

        const messageElement = document.createElement("p");
        messageElement.textContent = "Error";
        messageElement.classList.add("error-message");

        // Fade out animation
        function fadeOutAndRemove(element, duration) {
            element.style.transition = `opacity ${duration / 1000}s`;
            element.style.opacity = 0;
            setTimeout(() => {
                element.remove();
            }, duration);
        }

        // Adding the elements
        const container = document.querySelector('.container');
        divElement.appendChild(messageElement);
        divElement.appendChild(pElement);
        container.appendChild(divElement);

        setTimeout(() => {
            fadeOutAndRemove(pElement, 1000);
            fadeOutAndRemove(messageElement, 1000);
            fadeOutAndRemove(divElement, 1000);
            btnElement.disabled = false;
        }, 2000);
    }
};
