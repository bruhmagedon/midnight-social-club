import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

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
            <h1 data-testid="value-title">{`Value = ${counterValue}`}</h1>
            <Button data-testid="increment-btn" onClick={inc}>
                Inc
            </Button>
            <Button data-testid="decrement-btn" onClick={dec}>
                Dec
            </Button>
        </div>
    );
};
