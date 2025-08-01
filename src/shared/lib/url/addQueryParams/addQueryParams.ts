/**
 * getQueryParams
 * Базовая функция, которая формирует новую строку параметров запроса.
 * Она берет текущие параметры из URL и объединяет их с новыми, переданными вами.
 *
 * @param params - Объект с новыми параметрами, которые нужно добавить или изменить.
 * Например: { search: 'typescript', page: '1' }
 * Тип `OptionalRecord<string, string>` означает, что ключи и значения - строки,
 * а каждое свойство может быть необязательным (но тут `undefined` обрабатывается).
 */
export function getQueryParams(params: OptionalRecord<string, string>) {
    // Создаем объект URLSearchParams из текущей строки запроса в браузере (window.location.search).
    // Например, если URL = 'http://site.com/page?name=John&age=30',
    // то searchParams изначально будет содержать 'name=John' и 'age=30'.
    const searchParams = new URLSearchParams(window.location.search);

    // Перебираем все пары ключ-значение из объекта `params`, который мы передали в функцию.
    // `Object.entries(params)` преобразует объект в массив массивов: [['search', 'typescript'], ['page', '1']]
    Object.entries(params).forEach(([name, value]) => {
        // Проверяем, что значение параметра не равно `undefined`.
        // Это позволяет нам игнорировать параметры, которые мы хотим "удалить" или не добавлять,
        // передав их как `undefined` (хотя для явного удаления лучше использовать `delete`).
        if (value !== undefined) {
            // Устанавливаем или обновляем значение параметра.
            // Если параметр `name` уже существует, его значение будет перезаписано `value`.
            // Если параметра `name` нет, он будет добавлен с `value`.
            searchParams.set(name, value);
        }
    });

    // Преобразуем объект URLSearchParams обратно в строку запроса.
    // Например, если searchParams содержит 'name=John', 'age=30', 'newParam=hello',
    // то searchParams.toString() вернет "name=John&age=30&newParam=hello".
    // Добавляем "?" в начало, чтобы строка была корректным форматом для URL.
    return `?${searchParams.toString()}`;
}

/**
 * addQueryParams
 * Функция для фактического изменения URL в адресной строке браузера
 * без перезагрузки страницы.
 * Она использует `getQueryParams` для формирования новой строки запроса.
 *
 * @param params - Объект с параметрами, которые нужно добавить или изменить в URL.
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
    // window.history.pushState() изменяет URL в адресной строке.
    // Это часть History API браузера.
    //
    // - `null`: Это параметр `state` (состояние). Мы можем передать туда объект,
    //           который будет ассоциирован с новым состоянием истории.
    //           В данном случае нам не нужно специфическое состояние, поэтому `null`.
    // - `''`:   Это параметр `title` (заголовок страницы). Исторически использовался,
    //           но сейчас большинство браузеров игнорируют его. Передаем пустую строку.
    // - `getQueryParams(params)`: Это новый URL, который будет отображаться в адресной строке.
    //           Мы используем нашу вспомогательную функцию, чтобы получить его.
    window.history.pushState(null, '', getQueryParams(params));
}
