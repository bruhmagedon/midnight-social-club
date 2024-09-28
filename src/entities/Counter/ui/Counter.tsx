/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import cls from './Counter.module.scss';
import { counterActions, counterSlice } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const inc = () => {
        dispatch(counterActions.increment());
    };
    const dec = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>{`Value = ${counterValue}`}</h1>
            <Button onClick={inc}>Inc</Button>
            <Button onClick={dec}>Dec</Button>
        </div>
    );
};
