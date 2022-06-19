import React from 'react';

interface ITableProps<T, K extends keyof T & string = keyof T & string> {
  keys: K[];
  items: T[];
  onClickView?: (data: T) => void;
  onClickDelete?: (data: T) => void;
}

export function Table<T>(props: ITableProps<T>) {
  const { keys, onClickView, onClickDelete, items = [] } = props;

  if (!items || items.length === 0) return null;

  const fields = keys || Object.keys(items[0]);

  return (
    <table>
      <thead>
        <tr>
          {fields.map((field, index) => (
            <th key={index}>{field}</th>
          ))}
          {onClickView && <th>{/* view button */}</th>}
          {onClickDelete && <th>{/* view button */}</th>}
        </tr>
      </thead>
      <tbody>
        {items.map((data, index) => (
          <Row
            key={`row_${index}`}
            data={data}
            keys={fields}
            onClickView={onClickView}
            onClickDelete={onClickDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

interface IRowProps<T, K extends keyof T & string = keyof T & string> {
  data: T;
  keys: K[];
  onClickView?: (data: T) => void;
  onClickDelete?: (data: T) => void;
}

function Row<T>(props: IRowProps<T>) {
  const { data, keys, onClickView, onClickDelete } = props;

  return (
    <tr>
      {keys.map((key, index) => (
        <td key={index}>{JSON.stringify(data[key]) || '-'}</td>
      ))}
      {onClickView && (
        <td>
          <button
            className="button-clear icon-button"
            onClick={() => onClickView(data)}
          >
            <span className="material-icons">visibility</span>
          </button>
        </td>
      )}
      {onClickDelete && (
        <td>
          <button
            className="button-clear icon-button"
            onClick={() => onClickDelete(data)}
          >
            <span className="material-icons">delete</span>
          </button>
        </td>
      )}
    </tr>
  );
}
