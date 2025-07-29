// <Адрес строки, позиция скролла в px>
export type ScrollSchema = Record<string, number>

export interface UISchema {
    scroll: ScrollSchema;
}
