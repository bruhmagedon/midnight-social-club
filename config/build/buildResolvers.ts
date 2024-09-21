import { type ResolveOptions } from 'webpack';
import { type BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // Расширения файлов, которые webpack пропустит при импорте модуля
        preferAbsolute: true, // Приоритет на абслютные пути при импорте модулей
        modules: [options.paths.src, 'node_modules'], // TODO???
        mainFiles: ['index'], // TODO???
        alias: {}, // TODO???
    };
}
