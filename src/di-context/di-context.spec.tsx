import { render } from "@testing-library/react";
import React from "react";
import { DIContext } from "./di-context";
import { describe, expect, it } from "vitest";
import { DIContainer } from "@universal-di/core/dist/src/di-container/di-container.js";
import { useContext } from "react";

describe("DIContext", () => {
    it("can access null injector", () => {
        const UIComponent = () => {
            const { injector } = useContext(DIContext);

            expect(injector).toBeNull();

            return null;
        };

        render(
            <DIContext.Provider value={{ injector: null }}>
                <UIComponent />
            </DIContext.Provider>
        );
    });

    it("can access non-null injector", () => {
        const injectorStub = new DIContainer();

        const UIComponent = () => {
            const { injector } = useContext(DIContext);

            expect(injector).toBe(injectorStub);

            return null;
        };

        render(
            <DIContext.Provider value={{ injector: injectorStub }}>
                <UIComponent />
            </DIContext.Provider>
        );
    });
});
