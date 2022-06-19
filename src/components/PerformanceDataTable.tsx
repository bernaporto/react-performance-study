import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EEventType, ERouteType } from '../constants';
import { Table } from './Table';
import { TPerformanceDataWithUid } from '../types';
import { usePerformanceStorage } from '../hooks/usePerformanceStorage';

type TPerformanceDataKeys = (keyof TPerformanceDataWithUid)[];

export const PerformanceDataTable: FC = (props) => {
  const navigate = useNavigate();
  const { items, deleteItem } = usePerformanceStorage();
  const [dataKeys, updateDataKeys] = useState<TPerformanceDataKeys>(getKeys());

  useEffect(() => {
    const updateKeys = () => updateDataKeys(getKeys());

    window.addEventListener('resize', updateKeys);
    return () => window.removeEventListener('resize', updateKeys);
  }, []);

  const goToItem = ({ uid }: TPerformanceDataWithUid) =>
    navigate(`${ERouteType.PERFORMANCE}/${uid}`);

  const handleDelete = ({ uid }: TPerformanceDataWithUid) => deleteItem(uid);

  return (
    <Table
      items={items}
      keys={dataKeys}
      onClickView={goToItem}
      onClickDelete={handleDelete}
    />
  );
};

function getKeys(): TPerformanceDataKeys {
  const keys: TPerformanceDataKeys = ['reportTime'];

  if (window.innerWidth > 768) {
    keys.push(EEventType.FETCH, EEventType.RENDER);
  }

  return keys;
}
