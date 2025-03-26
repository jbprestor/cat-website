
// Function to make the "No" button move when hovered
function moveButton() {
    // Get all the images in the gif container by their IDs
    const imgCat1 = document.getElementById('imgCat1');
    const imgCat2 = document.getElementById('imgCat2');
    const imgCat3 = document.getElementById('imgCat3');

    // Change the images to sad cat gifs when hovering over the "No" button
    imgCat1.src = 'https://media1.tenor.com/m/Pby_Ll5QcngAAAAd/cat-playing.gif';
    imgCat2.src = 'https://media1.tenor.com/m/nBR_oOC_J0YAAAAC/cat-angry.gif';
    imgCat3.src = 'https://media1.tenor.com/m/X9pghVUlMvEAAAAC/sad-cat.gif';

    // Randomize the "No" button position to make it harder to click
    const noButton = document.getElementById('noButton');
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

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

// Function to reset images when hovering over the "Yes" button
function resetImages() {
    // Get all the images in the gif container by their IDs
    const imgCat1 = document.getElementById('imgCat1');
    const imgCat2 = document.getElementById('imgCat2');
    const imgCat3 = document.getElementById('imgCat3');

    // Original GIFs (set back to these when hovering over "Yes" button)
    imgCat1.src = 'https://media1.tenor.com/m/MNVZ4YfkAAcAAAAC/cat-baby.gif';
    imgCat2.src = 'https://media.tenor.com/efbi1EpFlVUAAAAi/bugcat-capoo.gif';
    imgCat3.src = 'https://media1.tenor.com/m/MKkJWYigjycAAAAC/cute-cat-cat-cute.gif';
}

// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID");

// Function to handle the "Yes" button click
function nextPage() {
    // You can replace this with any action you want (e.g., going to another page)
    alert("Yay! You said yes! You should love yourself more :VVV Drink yo water bish! ❤️");

    // Prepare the email data
    const emailData = {
        to_name: "SMGB",  // Add the recipient name here (could be your name or her name)
        from_name: "Yudz",  // This can be your name (or the website name)
        message: "Yes button clicked! 🥳",  // You can customize this message
        reply_to: "",  // Add a reply-to email if you want
    };

    // Send the email using EmailJS
    emailjs.send("service_9pl7o1f", "template_wuwtnko", emailData)
        .then(function(response) {
            console.log("Email sent successfully:", response);
        }, function(error) {
            console.log("Failed to send email:", error);
        });
}
