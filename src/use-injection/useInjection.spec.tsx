import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {DIContextProvider} from '../di-context/di-context-provider';
import {useInjection} from './useInjection';
import {afterEach, beforeEach, describe, expect, it, MockInstance, vi} from 'vitest';
import {InjectionToken} from '@universal-di/core/dist/src/models';
import {Injector} from "@universal-di/core/dist/src/injector";

class TestInjector {
    private readonly value: any;

    constructor(value: any) {
        this.value = value;
    }

    get() {
        return this.value;
    }
}

export const InjectorStub = TestInjector;


describe('useInjection', () => {
    const tokenStub = new InjectionToken<string>('TOKEN_STUB');
    const valueStub = 'valueStub';
    const ComponentStub = () => {
        const injectedValue: string = useInjection(tokenStub);

        return <div>{injectedValue}</div>;
    };

    let injector: Injector;
    let consoleErrorSpy: MockInstance;

    beforeEach(() => {
        consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {
        });
    });

    afterEach(() => {
        consoleErrorSpy.mockRestore();
    });

    it('renders children with provided injector value', () => {
        injector = new InjectorStub(valueStub) as any;

        render(
            <DIContextProvider injector={injector}>
                <ComponentStub/>
            </DIContextProvider>,
        );

        // @ts-ignore
        expect(screen.getByText(valueStub)).toBeInTheDocument();
    });

    it('throws error for no context', () => {
        injector = new InjectorStub(valueStub) as any;

        const renders = () => render(<ComponentStub/>);

        expect(renders).toThrowError('No di context provided');
    });
});
