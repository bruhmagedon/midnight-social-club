export interface User {
    id: string;
    username: string;
}

// Шобы в редахе хранился авторизованный юзер
// если undefined - не авторизован никто
export interface UserSchema {
    authData?: User;
}
