import {createContext} from 'react';
import {Injector} from '@universal-di/core/dist/src/injector';
import {Optional} from "../types";

export const DIContext = createContext<{ injector: Optional<Injector> }>({injector: undefined});
