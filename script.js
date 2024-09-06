let wheel = document.querySelector('.wheel');
let spinButton = document.querySelector('.spin-button');
let value = Math.ceil(Math.random() * 3600);
let slices = document.querySelectorAll('.wheel-slice');

spinButton.onclick = () => {
    wheel.style.transition = `transform 5s ease-in-out`;
    wheel.style.transform = `rotate(${value}deg)`;

    // Total rotation (value) mod 360 gives the effective rotation
    let totalRotation = value % 360;

    // Calculate the selected slice index (0 to 7, for 8 slices of 45 degrees each)
    let selectedSliceIndex = Math.floor((360 - totalRotation + 22.5) / 45) % 8; 
    // Adding 22.5 to align with slice center, adjusting for offset since the slices are at 45-degree angles.

    // Set a timeout to trigger the alert after the animation completes (5s)
    setTimeout(() => {
        let selectedSliceText = slices[selectedSliceIndex].innerText;  // Get the text from the selected slice
        alert(`You landed on: ${selectedSliceText}`);
    }, 5000);  // Wait for the spin animation to complete

    // Prepare value for the next spin (adding random value)
    value += Math.ceil(Math.random() * 3600);
};
