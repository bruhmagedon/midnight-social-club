export type Mods = Record<string, boolean | string | undefined>; // обозначение ключ:флаг (удобный объект но ограничеснный по типам)
// const obj: Mods = { hovered: true, scrollable: true};

// ДинамическиеКлассы(главный класс, моды - ключ:флаг, доп.классы) - комбинированние классов по условиям (аналог npm - classnames)
export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean), // фильтр по избавлению undefined
        ...Object.entries(mods) // итоговый массив развернуть
            .filter(([classNames, value]) => Boolean(value)) // оставить элементы с true
            .map(([classNames, value]) => classNames), // вернуть только ключ
    ].join(' ');
}
