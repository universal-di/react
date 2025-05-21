import React, { ReactNode, useMemo } from "react";
import { DIContext } from "./di-context";
import { DIContainer } from "@universal-di/core/dist/src/di-container/di-container";

type Props = {
    injector: DIContainer;
    children: ReactNode;
};

export const DIContextProvider = ({ injector, children }: Props) => {
    const memoizedInjector = useMemo(() => ({ injector }), [injector]);

    return (
        <DIContext.Provider value={memoizedInjector}>
            {children}
        </DIContext.Provider>
    );
};
