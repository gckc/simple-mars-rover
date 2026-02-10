import {getLeftOf} from "../model/Direction";
import {Rover} from "../model/Rover";

export const rotateLeft = (rover: Rover): Rover => {
    return {
        ...rover,
        orientation: getLeftOf(rover.orientation),
    };
};