import {Rover} from "../model/Rover";
import {rotateRight} from "./rotateRight";
import {rotateLeft} from "./rotateLeft";
import {move} from "./move";

export type Action = (rover: Rover) => Rover;

export const getActionOf = (command: string): Action => {
    return commandToAction.get(command) as Action;
};

const commandToAction = new Map<string, Action>([
    ['R', rotateRight],
    ['L', rotateLeft],
    ['M', move]
]);