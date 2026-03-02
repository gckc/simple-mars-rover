import {Rover} from "./model/Rover";
import {Direction} from "./model/Direction";
import {GRID_HEIGHT, GRID_WIDTH} from "./config";

const EMPTY_CELL = ".";
const OBSTACLE_CELL = "X";

const roverSymbolByDirection = new Map<Direction, string>([
    [Direction.North, "^"],
    [Direction.East, ">"],
    [Direction.South, "v"],
    [Direction.West, "<"],
]);

const parseObstacleCoordinates = (obstacles: Set<string>): Array<{ x: number; y: number }> => {
    const coords: Array<{ x: number; y: number }> = [];

    obstacles.forEach((value) => {
        const [xString, yString] = value.split(":");
        const x = Number(xString);
        const y = Number(yString);

        if (!Number.isNaN(x) && !Number.isNaN(y)) {
            coords.push({x, y});
        }
    });

    return coords;
};

export const buildGridFrame = (rover: Rover, obstacles: Set<string>): string => {
    // Initialize empty grid
    const grid: string[][] = [];
    for (let y = GRID_HEIGHT - 1; y >= 0; y--) {
        const row: string[] = [];
        for (let x = 0; x < GRID_WIDTH; x++) {
            row.push(EMPTY_CELL);
        }
        grid.push(row);
    }

    // Place obstacles
    const obstacleCoords = parseObstacleCoordinates(obstacles);
    obstacleCoords.forEach(({x, y}) => {
        if (x >= 0 && x < GRID_WIDTH && y >= 0 && y < GRID_HEIGHT) {
            const rowIndex = (GRID_HEIGHT - 1) - y;
            grid[rowIndex][x] = OBSTACLE_CELL;
        }
    });

    // Place rover (takes precedence over obstacles if overlapping)
    const roverRowIndex = (GRID_HEIGHT - 1) - rover.y;
    const roverColIndex = rover.x;

    if (
        roverColIndex >= 0 &&
        roverColIndex < GRID_WIDTH &&
        roverRowIndex >= 0 &&
        roverRowIndex < GRID_HEIGHT
    ) {
        const roverSymbol = roverSymbolByDirection.get(rover.orientation) ?? "?";
        grid[roverRowIndex][roverColIndex] = roverSymbol;
    }

    const legend = "Legend: . = empty, X = obstacle, ^ > v < = rover (N E S W)";

    const lines = grid.map((row) => row.join(" "));

    return [legend, ...lines].join("\n");
};

