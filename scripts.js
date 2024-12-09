document.addEventListener('DOMContentLoaded', function () {
    const typingText = "Hi there! 👋 Welcome to my portfolio! Here, you’ll get to know me better — explore my skills, projects, work experience, education, and passions. Feel free to check out my journey, discover my work, and reach out if you’d like to connect.🚀"
    const typingElement = document.getElementById('typing-text');
    let index = 0;

    function typeEffect() {
        if (index < typingText.length) {
            typingElement.textContent += typingText.charAt(index);
            index++;
            setTimeout(typeEffect, 50); // Adjust speed here
        }
    }

    typeEffect(); // Start the typing effect
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");

    // Check if dark mode is already saved in localStorage, else set default to dark mode
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode"); // Default to dark mode
    }

    // Add event listener to the toggle button
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save the current theme choice to localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});

document.addEventListener('DOMContentLoaded', typeText);

function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

