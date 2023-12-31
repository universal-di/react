import {useContext} from 'react';
import {NoDiContextProvidedError} from '../errors/no-di-context-provided.error';
import {DIContext} from '../di-context/di-context';
import {Token} from '@universal-di/core';

export function useInjection<T>(token: Token<T>): T {
    const {injector} = useContext(DIContext);

    if (!injector) {
        throw new NoDiContextProvidedError();
    }

    return injector.get(token);
}
