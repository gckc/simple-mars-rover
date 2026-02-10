import {Rover} from "../model/Rover";

export const detectCollision = (obstacleCoords: number[][] , rover: Rover): boolean => {
    return obstacleCoords.some(
        obstacle =>
            obstacle[0] === rover.x
            && obstacle[1] === rover.y
    )
};