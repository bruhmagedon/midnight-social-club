import { User } from '_entities/User';

export interface Comment {
     id: string;
     user: User;
     text: string;
}
