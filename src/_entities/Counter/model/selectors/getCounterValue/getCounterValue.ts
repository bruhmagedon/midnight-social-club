import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from '../../types/counterSchema';
import { getCounter } from '../getCounter/getCounter';

// Пример использования reselect
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
