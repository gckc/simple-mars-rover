import {Rover} from "./model/Rover";
import {getActionOf} from "./actions/getActionOf";
import {buildOutput} from "./OutputBuilder";
import {buildGridFrame} from "./GridRenderer";

export const obstacles = new Set([
    '2:0',
    '0:2'
]);

type ExecuteOptions = {
    showGrid?: boolean;
};

export const execute = (commands: string, rover: Rover, options?: ExecuteOptions): string => {
    // const commandList =  [...commands];
    // const finalRover: Rover = commandList.reduce(
    //     (acc: Rover, curr: string) => getActionOf(curr)(acc),
    //     rover,
    // );

    const showGrid = options?.showGrid ?? false;

    let finalRover: Rover = rover;

    if (showGrid) {
        console.log("-- Initial grid state --");
        console.log(buildGridFrame(finalRover, obstacles));
    }

    for (let i= 0; i < commands.length; i++) {
        const draftRover = getActionOf(commands[i])(finalRover);

        if (obstacles.has(`${draftRover.x}:${draftRover.y}`)) {
            console.log(`-- Obstacle hit at "${draftRover.x}:${draftRover.y} at ${commands.slice(0, i+1)} of ${commands}"`);
        }
        finalRover = getActionOf(commands[i])(finalRover);

        if (showGrid) {
            console.log(`-- Grid after command ${i + 1} ('${commands[i]}') --`);
            console.log(buildGridFrame(finalRover, obstacles));
        }
    }

    return buildOutput(finalRover.x, finalRover.y, finalRover.orientation);
}