import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { InjectionToken, InjectorStub } from "@universal-di/core";
import { DIContainer } from "@universal-di/core/dist/src/di-container/di-container.js";
import {
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    MockInstance,
    vi,
} from "vitest";
import { DIContextProvider } from "../di-context/di-context-provider";
import { useInjection } from "./useInjection";
import React from "react";

describe("useInjection", () => {
    const tokenStub = new InjectionToken("TOKEN_STUB");
    const valueStub = "valueStub";
    const ComponentStub = () => {
        const injectedValue = useInjection(tokenStub);

        return <div>{injectedValue as string}</div>;
    };

    let injector: DIContainer;
    let consoleErrorSpy: MockInstance;

    beforeEach(() => {
        consoleErrorSpy = vi
            .spyOn(console, "error")
            .mockImplementation(() => {});
    });

    afterEach(() => {
        consoleErrorSpy.mockRestore();
    });

    it("renders children with provided injector value", () => {
        injector = new InjectorStub(valueStub);

        render(
            <DIContextProvider injector={injector}>
                <ComponentStub />
            </DIContextProvider>
        );

        expect(screen.getByText(valueStub)).toBeInTheDocument();
    });

    it("throws error for no context", () => {
        injector = new InjectorStub(valueStub);

        const renders = () => render(<ComponentStub />);

        expect(renders).toThrowError("No DI context provided");
    });
});
