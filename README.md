# Flappy Bird - React Native

A simple clone of the popular **Flappy Bird** game, built using **React Native**. This project demonstrates how to implement core game mechanics such as collision detection, gravity, scoring, and user input on mobile devices. It's a fun way to learn mobile game development using React Native.

![Flappy Bird Demo](https://github.com/makensonn/float/assets/22712773/edcf93bf-a106-4ae7-9cda-a0c18d5cb28f)

## Features

- **Smooth Gameplay**: Simple yet challenging mechanics where the bird flaps to stay in the air.
- **Collision Detection**: The bird interacts with pipes and the ground, causing the game to end if a collision occurs.
- **Score Tracking**: Displays the current score and the highest score achieved.
- **Responsive Design**: Automatically adjusts to various screen sizes and orientations.
- **Sound Effects**: Includes sound for events like tapping, crashing, and scoring.

## Installation

To get started with this project, follow the steps below:

### Prerequisites

Make sure you have the following installed:

- **Node.js** (>= 14.x)
- **React Native CLI**
- **Android Studio** or **Xcode** (for running the app on an emulator)

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/makensonn/flappybird-react-native.git
```
Navigate to the project folder:

```bash
cd flappybird-react-native
```
Install dependencies:

```bash
npm install
```
### Running the App
Run the app on iOS:

```bash
npx react-native run-ios
```
Or run the app on Android:

```bash
npx react-native run-android
```

## Gameplay Instructions
- Tap anywhere on the screen to make the bird flap and stay in the air.
- Avoid colliding with the pipes or the ground to continue playing.
- The score increases each time the bird successfully passes between the pipes.
- The game ends when the bird collides with a pipe or hits the ground.

## Code Structure
- App.js: Main entry point that initializes the game logic.
- components/FlappyBird.js: Contains the game components, including the bird, pipes, and score display.
- assets/: Folder containing sound effects and images used in the game.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
React Native for providing the framework to build mobile applications.

## Inspired by the original Flappy Bird game.

## Special thanks to the open-source community for their contributions to game physics and animations.





