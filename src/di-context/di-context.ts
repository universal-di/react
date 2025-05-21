import { createContext } from "react";
import { Optional } from "../types.js";
import { DIContainer } from "@universal-di/core/dist/src/di-container/di-container.js";

export const DIContext = createContext<{ injector: Optional<DIContainer> }>({
    injector: null,
});
