export type TStep = ((value: number | string, percent: number) => number) | number | undefined | string | null;
export type TData = (string | number)[] | undefined;