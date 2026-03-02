# Simple Mars Rover Project

## Project Overview
This project implements a simple Mars Rover that can be controlled with commands: `L` (rotate left), `R` (rotate right), and `M` (move forward). The rover moves on a 10x10 grid (0-9). The grid wraps around if the rover goes off the edges.

## Tech Stack
- **Language:** TypeScript
- **Testing Framework:** Jest with `ts-jest`
- **Runtime:** Node.js

## Key Components
- `src/execute.ts`: Main logic for executing a sequence of commands on a rover.
- `src/model/Rover.ts`: Definition of the `Rover` interface (x, y, orientation).
- `src/model/Direction.ts`: `Direction` enum (North, East, South, West) and rotation helpers.
- `src/actions/`: Functions for specific movements (move, rotateLeft, rotateRight).
- `src/validation/hitDetector.ts`: Logic for detecting collisions with obstacles.

## Development Workflows
- **Running Tests:** `npm test` (Note: `package.json` needs to have its `test` script set up).
- **Building:** `npm run build`

## Project Specific Rules
- Always verify changes by running tests.
- When adding new features, add corresponding tests in `src/execute.test.ts` or a new test file.
- Obstacles are currently hardcoded in `src/execute.ts`.
