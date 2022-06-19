import React from 'react';

type TKeys<T> = keyof T & string;
interface IItemDetailsProps<T, K extends TKeys<T> = TKeys<T>> {
  data: T;
  keys?: K[];
}

export function ItemDetails<T>(props: IItemDetailsProps<T>) {
  const { keys, data } = props;

  const fields = keys ?? (Object.keys(data) as TKeys<T>[]);

  return (
    <table>
      <tbody>
        {fields.map((field) => (
          <tr key={field}>
            <td>
              <b>{field}</b>
            </td>
            <td>{sanitizeData(data[field])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function sanitizeData(data: unknown): string | null {
  if (!data) return null;
  if (typeof data === 'string') return data;

  return JSON.stringify(data);
}
