import {Rover} from "./model/Rover";
import {Direction} from "./model/Direction";
import {execute} from "./execute";

describe('mars rover', () => {
    it.each([
        ["0:0:W", "L"],
        ["0:0:S", "LL"],
        ["0:0:E", "LLL"],
        ["0:0:N", "LLLL"],
        ["0:0:E", "R"],
        ["0:0:S", "RR"],
        ["0:0:W", "RRR"],
        ["0:0:N", "RRRR"],
        ["0:1:N", "M"],
        ["0:2:N", "MM"],
        ["0:3:N", "MMM"],
        ["0:0:N", "MMMMMMMMMM"],
        ["1:0:E", "RM"],
        ["1:0:E", "RMMMMMMMMMMM"],
        ["9:0:W", "LM"],
        ["8:0:W", "LMM"],
        ["0:0:W", "LMMMMMMMMMM"],
        ["9:0:W", "LMMMMMMMMMMM"],
        ["0:9:S", "LLM"],
        ["0:9:S", "LLMMMMMMMMMMM"],
    ]) (
        'return %p when sent command %p', (expectedResponse, commands) => {
            const rover: Rover = {
                x: 0,
                y: 0,
                orientation: Direction.North,
            };
            const response: string = execute(commands, rover);

            expect(response).toBe(expectedResponse);
        }
    )

    it('prints grid frames when showGrid is true without changing final output', () => {
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

        const rover: Rover = {
            x: 0,
            y: 0,
            orientation: Direction.North,
        };

        const commands = "MR";
        const response: string = execute(commands, rover, { showGrid: true });

        // Final output should be unchanged for this sequence (same as calling without showGrid)
        expect(response).toBe("0:1:E");

        // Initial grid + one per command (2 commands) and labels => multiple logs
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy.mock.calls.length).toBeGreaterThan(1);

        // At least one logged entry should include the legend from the grid renderer
        const loggedMessages = logSpy.mock.calls.map(args => String(args[0]));
        const hasLegend = loggedMessages.some(msg =>
            msg.includes("Legend: . = empty, X = obstacle, ^ > v < = rover (N E S W)")
        );
        expect(hasLegend).toBe(true);

        logSpy.mockRestore();
    });
});