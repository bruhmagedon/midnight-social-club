import { Country } from '_entities/Country';
import { Currency } from '_entities/Currency';

export interface Profile {
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile // данные, что приходят с сервера
    form?: Profile // данные в форме изменения профиля
    isLoading: boolean
    error?: string
    readonly: boolean
}
