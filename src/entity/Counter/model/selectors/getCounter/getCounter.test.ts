import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    // Возвращает тот участок стейта, который мы ожидаем
    test('should return counter values', () => {
        // Не надо объявлять весь стейт, можно объявить кусочек
        const state: DeepPartial<StateSchema> = {
            // DeepPartial игнорирует поля и объявляет только те, котоорые нам необходимы
            counter: { value: 10 },
        };
        // Приводим (as) к StateSchema чтобы не было конфликтов с DeepPartial
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
