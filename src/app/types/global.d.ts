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
