import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {Injector} from '../injector';
import {InjectorStub} from '../injector/injector.stub';
import {InjectionToken} from '../models/injection-token.model';
import {DIContextProvider} from '../di-context/di-context-provider';
import {useInjection} from './useInjection';
import {describe, vi, beforeEach, afterEach, it, expect, MockInstance} from 'vitest';

describe('useInjection', () => {
    const tokenStub = new InjectionToken<string>('TOKEN_STUB');
    const valueStub = 'valueStub';
    const ComponentStub = () => {
        const injectedValue = useInjection(tokenStub);

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
        injector = new InjectorStub(valueStub);

        render(
            <DIContextProvider injector={injector}>
                <ComponentStub/>
            </DIContextProvider>,
        );

        // @ts-ignore
        expect(screen.getByText(valueStub)).toBeInTheDocument();
    });

    it('throws error for no context', () => {
        injector = new InjectorStub(valueStub);

        const renders = () => render(<ComponentStub/>);

        expect(renders).toThrowError('No di context provided');
    });
});
