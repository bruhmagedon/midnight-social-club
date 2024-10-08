import { CounterSchema } from '_entities/Counter';
import { UserSchema } from '_entities/User';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
}
