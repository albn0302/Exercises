const subjectDiv = document.querySelector("#subject");

subjectDiv.addEventListener("mouseenter", () => {
    // Adds a small delay to the alert
    // (I added it because I wanted to have the hover effect visible for longer and it just looked dumb before)
    setTimeout(() => {
        alert("I Love School! 💖💖💖");
    }, 150) // Adds a delay of 150ms (0.15s)
})