export const getOutputForCommand = (command: string, verbose: boolean): string => {
    switch (command) {
        case "mode":
            return "Verbose is now " + verbose + ".";
        default:
            return "Default output for unrecognized command";
    }
};