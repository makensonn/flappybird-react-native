# Flappy Bird - React Native

This is a simple clone of the popular game *Flappy Bird*, built with React Native. The project showcases how to implement basic game mechanics such as collision detection, gravity, scoring, and user input in React Native.

## Features
- **Smooth Gameplay**: Simple yet challenging mechanics for tapping to keep the bird in the air.
- **Collision Detection**: Bird collides with pipes and the ground to end the game.
- **Score Tracking**: Displays the current score and the highest score achieved during gameplay.
- **Responsive Design**: Adjusts for different screen sizes and orientations.
- **Simple Sound Effects**: Adds sound for actions like tapping, crashing, and scoring.

https://github.com/makensonn/float/assets/22712773/edcf93bf-a106-4ae7-9cda-a0c18d5cb28f

## Installation

To get started with this project, follow the instructions below.

### Prerequisites
Make sure you have the following installed on your machine:

- **Node.js** (>= 14.x)
- **React Native CLI**
- **Android Studio** or **Xcode** (for running the app on an emulator)

### Clone the Repository
First, clone the repository:

```bash
git clone https://github.com/makensonn/flappybird-react-native.git

cd flappybird-react-native
npm install

npx react-native run-ios

npx react-native run-android

Gameplay Instructions
Tap anywhere on the screen to make the bird flap and stay in the air.

Avoid colliding with pipes or the ground to continue playing.

The score increases as the bird successfully passes between pipes.

The game ends when the bird collides with a pipe or hits the ground.

Code Structure
App.js: Main entry point for the game logic.

components/FlappyBird.js: Contains the game components (bird, pipes, score display).

assets/: Folder containing sound effects and images used in the game.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
React Native for providing the framework for building mobile applications.

Inspired by the original Flappy Bird game.

Special thanks to open-source contributors for their work on game physics and animations.
