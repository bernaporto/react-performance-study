import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ERouteType } from '../constants';
import { ITestData } from '../types';
import { Table } from './Table';

type TTestDataKeys = (keyof ITestData)[];
interface ITestDataTable {
  items: ITestData[];
}

export const TestDataTable: FC<ITestDataTable> = (props) => {
  const navigate = useNavigate();
  const [dataKeys, updateDataKeys] = useState<TTestDataKeys>(getKeys());

  useEffect(() => {
    const updateKeys = () => updateDataKeys(getKeys());

    window.addEventListener('resize', updateKeys);
    return () => window.removeEventListener('resize', updateKeys);
  }, []);

  const { items } = props;
  const showViewButton =
    items && items[0] && Object.keys(items[0]).length !== dataKeys.length;
  const goToItem = showViewButton
    ? (item: ITestData) => {
        navigate(ERouteType.TEST_ITEM, {
          state: item,
        });
      }
    : undefined;

  return <Table items={items} keys={dataKeys} onClickView={goToItem} />;
};

function getKeys(): TTestDataKeys {
  const keys: TTestDataKeys = ['id'];

  if (window.innerWidth > 320) keys.push('postId');
  if (window.innerWidth > 425) keys.push('name');
  if (window.innerWidth > 768) keys.push('email');

  keys.push('body');

  return keys;
}
