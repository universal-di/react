import {render} from '@testing-library/react';
import React from 'react';
import {Injector} from '../injector';
import {DIContext} from './di-context';
import {describe, it, expect} from 'vitest';

describe('DIContext', () => {
    it('can access null injector', () => {
        const UIComponent = () => {
            const { injector } = React.useContext(DIContext);

            expect(injector).toBe(undefined);

            return null;
        };

        render(
            <DIContext.Provider value={{ injector: undefined }}>
                <UIComponent />
            </DIContext.Provider>,
        );
    });

    it('can access non-null injector', () => {
        const injectorStub = new Injector();

        const UIComponent = () => {
            const { injector } = React.useContext(DIContext);

            expect(injector).toBe(injectorStub);

            return null;
        };

        render(
            <DIContext.Provider value={{ injector: injectorStub }}>
                <UIComponent />
            </DIContext.Provider>,
        );
    });
});
