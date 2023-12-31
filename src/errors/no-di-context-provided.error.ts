export class NoDiContextProvidedError extends Error {
    constructor() {
        super(`No DI context provided`);
    }
}
