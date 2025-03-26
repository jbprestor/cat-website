// Function to handle the "Yes" button click
function nextPage() {
    // You can replace this with any action you want (e.g., going to another page)
    alert("Yay! You said yes! You should love yourself more :VVV Drink yo water bish! ❤️");
}

// Function to make the "No" button move when hovered
function moveButton() {
    // Get the "No" button
    const noButton = document.getElementById('noButton');

    // Randomize its position
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

    // Move the button to a random position
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';

    // Optionally, prevent clicking on the "No" button once it's moved
    noButton.disabled = true;

    // Add a small delay before re-enabling it
    setTimeout(() => {
        noButton.disabled = false;
    }, 1000);
}
