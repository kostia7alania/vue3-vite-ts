import { APP_TITLE } from '@/runtimeEnv';

export const setTitle = (title: string) => document.title = (title ? title + ' | ' : title) + APP_TITLE;

export default setTitle