import {Rover} from "../model/Rover";
import {getRightOf} from "../model/Direction";

export const rotateRight = (rover: Rover): Rover => {
    return {
        ...rover,
        orientation: getRightOf(rover.orientation),
    };
};