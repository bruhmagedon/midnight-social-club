// Стейт для формы авторизации
export interface LoginSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}
