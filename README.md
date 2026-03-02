# Simple Mars Rover

A simple TypeScript implementation of the Mars Rover exercise.

## Features

- **10x10 Grid**: The rover operates on a 10x10 grid (coordinates 0-9).
- **Wrapping**: The grid wraps around when the rover moves off the edges.
- **Commands**:
  - `M`: Move forward in the current direction.
  - `L`: Rotate the rover 90 degrees to the left.
  - `R`: Rotate the rover 90 degrees to the right.
- **Obstacle Detection**: The system can detect obstacles at predefined coordinates.
 - **Optional Text Grid**: When enabled, prints a text-based grid showing the rover and obstacles after each command.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Running Tests

The project uses [Jest](https://jestjs.io/) for testing.

```bash
npm test
```

## Usage

The core logic is located in `src/execute.ts`. You can use the `execute` function to process a series of commands.

```typescript
import { Rover } from "./model/Rover";
import { Direction } from "./model/Direction";
import { execute } from "./execute";

const initialRover: Rover = {
    x: 0,
    y: 0,
    orientation: Direction.North,
};

const commands = "MMRMM";
const result = execute(commands, initialRover);

console.log(result); // Output: "2:2:E"
```

### Enabling the text-based grid

You can optionally display a text-based grid that updates after each command. This is controlled by a boolean flag (default `false`):

```typescript
import { Rover } from "./model/Rover";
import { Direction } from "./model/Direction";
import { execute } from "./execute";

const initialRover: Rover = {
    x: 0,
    y: 0,
    orientation: Direction.North,
};

const commands = "MMR";

execute(commands, initialRover, { showGrid: true });
```

Example grid output:

```text
Legend: . = empty, X = obstacle, ^ > v < = rover (N E S W)
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
. . . . . . . . . .
X . . . . . . . . .
^ X . . . . . . . .
```

When `showGrid` is `false` or the options object is omitted, the grid is not printed and only the final rover state string is returned.

## Project Structure

- `src/actions/`: Contains the logic for rover movements and rotations.
- `src/model/`: Defines the `Rover` interface and `Direction` enum.
- `src/validation/`: Contains logic for obstacle detection.
- `src/execute.ts`: The main entry point for processing commands.
- `src/OutputBuilder.ts`: Formats the final state of the rover into a string.
