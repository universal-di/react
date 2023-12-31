import {useContext} from 'react';
import {NoDiContextProvidedError} from '../errors/no-di-context-provided.error';
import {Token} from '../models/token.model';
import {DIContext} from '../di-context/di-context';

export function useInjection<T>(token: Token<T>): T | T[] {
    const { injector } = useContext(DIContext);

    if (!injector) {
        throw new NoDiContextProvidedError();
    }

    return injector.get(token);
}
