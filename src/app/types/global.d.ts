declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

// Преобразовывает svg в реакт компоненты
declare module '*.svg' {
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module '*.png';
declare module '*.jgp';
declare module '*.jpeg';

// Глобальная константа
declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T
}
