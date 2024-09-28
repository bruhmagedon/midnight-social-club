import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import type { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState? : DeepPartial<StateSchema>;
}

export const StoreProvider = ({
    children,
    initialState,
}: StoreProviderProps) => {
    const store = createReduxStore(initialState as StateSchema);

    return <Provider store={store}>{children}</Provider>;
};
