type Mods = Record<string, boolean | string>; //обозначение ключ:флаг (удобный объект но ограничеснный по типам)
// const obj: Mods = { hovered: true, scrollable: true};

// ДинамическиеКлассы(главныый класс, моды - ключ:флаг, доп.классы) - комбинированние классов по условиям (аналог npm - classnames)
export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods) //итоговый массив развернуть
      .filter(([classNames, value]) => Boolean(value)) //оставить элементы с true
      .map(([classNames, value]) => classNames), //вернуть только ключ
  ].join(" ");
}
