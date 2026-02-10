import {Rover} from "./model/Rover";
import {getActionOf} from "./actions/getActionOf";
import {buildOutput} from "./OutputBuilder";

export const obstacles = new Set([
    '2:0',
    '0:2'
]);

export const execute = (commands: string, rover: Rover): string => {
    // const commandList =  [...commands];
    // const finalRover: Rover = commandList.reduce(
    //     (acc: Rover, curr: string) => getActionOf(curr)(acc),
    //     rover,
    // );

    let finalRover: Rover = rover;
    for (let i= 0; i < commands.length; i++) {
        const draftRover = getActionOf(commands[i])(finalRover);

        if (obstacles.has(`${draftRover.x}:${draftRover.y}`)) {
            console.log(`-- Obstacle hit at "${draftRover.x}:${draftRover.y} at ${commands.slice(0, i+1)} of ${commands}"`);
        }
        finalRover = getActionOf(commands[i])(finalRover);
    }

    return buildOutput(finalRover.x, finalRover.y, finalRover.orientation);
}