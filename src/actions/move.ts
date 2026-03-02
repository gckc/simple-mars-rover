import {Rover} from "../model/Rover";
import {Direction} from "../model/Direction";
import {GRID_HEIGHT, GRID_WIDTH} from "../config";

export const move = (rover: Rover): Rover => {
    switch(rover.orientation) {
        case Direction.North:
            return {
                ...rover,
                y: rover.y + 1 >= GRID_HEIGHT ? 0 : rover.y + 1,
            };
        case Direction.East:
            return {
                ...rover,
                x: rover.x + 1 >= GRID_WIDTH ? 0 : rover.x + 1,
            }
        case Direction.South:
            return {
                ...rover,
                y: rover.y - 1 < 0 ? GRID_HEIGHT - 1 : rover.y - 1,
            };
        case Direction.West:
            return {
                ...rover,
                x: rover.x - 1 < 0 ? GRID_WIDTH - 1 : rover.x - 1,
            };
    }
};