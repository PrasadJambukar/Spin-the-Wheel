# Spin the Wheel

A simple web-based "Spin the Wheel" game where users can click on a button to spin the wheel and land on a random number.

## Features

- Click the **Spin** button to spin the wheel.
- The wheel rotates and randomly selects a number between 1 and 8.
- After the animation, a pop-up displays the number the wheel landed on.

## Project Structure

- **index.html**: This is the main file that structures the game interface.
- **style.css**: A CSS file to style the wheel and button.
- **script.js**: The JavaScript logic that handles the spinning animation and selects the correct wheel slice.

## How It Works

1. The user clicks on the **Spin** button.
2. The JavaScript function triggers a rotation on the wheel, where the degree of rotation is randomized.
3. Once the wheel stops, the number it landed on is calculated using the total rotation.
4. After the animation completes (5 seconds), a pop-up displays the number selected.

## Usage

1. Open the `index.html` file in any modern web browser.
2. Click on the **Spin** button to spin the wheel.
3. Wait for the wheel to stop, and see which number you land on in the pop-up alert.

## Code Breakdown

### HTML (`index.html`)

The basic structure contains:
- A container with a button (`.spin-button`) to initiate the spin.
- A wheel (`.wheel`) composed of 8 slices, each representing a number from 1 to 8.

### CSS (`style.css`)

This defines:
- The layout and appearance of the wheel and slices.
- The spinning effect is applied via JavaScript, but the visual properties like color are managed in CSS.

### JavaScript (`script.js`)

This handles the spinning logic:
- On clicking the spin button, the wheel rotates by a random degree.
- It calculates which slice the wheel stopped at by using the modulus of the rotation angle.
- After the spin animation (5 seconds), it displays the result in an alert box.

## Customization

- You can change the colors of the wheel slices by editing the `style.css` file.
- You can adjust the number of slices or change the numbers to something else by modifying the HTML inside the wheel.

## Requirements

- A modern web browser with JavaScript enabled.
