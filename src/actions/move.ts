import {Rover} from "../model/Rover";
import {Direction} from "../model/Direction";

export const move = (rover: Rover): Rover => {
    switch(rover.orientation) {
        case Direction.North:
            return {
                ...rover,
                y: rover.y + 1 > 9 ? 0 : rover.y + 1,
            };
        case Direction.East:
            return {
                ...rover,
                x: rover.x + 1 > 9 ? 0 : rover.x + 1,
            }
        case Direction.South:
            return {
                ...rover,
                y: rover.y - 1 < 0 ? 9 : rover.y - 1,
            };
        case Direction.West:
            return {
                ...rover,
                x: rover.x - 1 < 0 ? 9 : rover.x - 1,
            };
    }
};