import React, {ReactNode, useMemo} from 'react';
import {Injector} from '@universal-di/core/dist/src/injector';
import {DIContext} from './di-context';

type Props = {
    injector: Injector;
    children: ReactNode;
};

export const DIContextProvider = ({injector, children}: Props) => {
    const memoizedInjector = useMemo(() => ({injector}), [injector]);

    return <DIContext.Provider value={memoizedInjector}>{children}</DIContext.Provider>;
};
