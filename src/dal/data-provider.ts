import { isNumber } from '../domain/math-provider';

export const parseData = (dataString: string | undefined | null): (string | number)[] | undefined => {
  if (dataString === undefined || dataString === null) return undefined;

  if(Array.isArray(dataString)) return dataString as (string | number)[];

  const result = dataString.trim();
  if (result === '') return undefined;

  const parts = dataString.split(',');
  const list: string[] = [];
  let allValuesAreNumbers = true;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (part === '') continue;

    list.push(part);

    if (!isNumber(part)) {
      allValuesAreNumbers = false;
    }
  }

  if (!allValuesAreNumbers) return list;

  return list.map((item) => Number(item));
};

export const findValueIndexInData = (val: string | number, data: (string | number)[] | undefined) => {
  return data ? data.findIndex((item) => item === val || item.toString().trim() === val.toString().trim()) : -1;
};