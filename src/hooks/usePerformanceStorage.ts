import { useEffect, useState } from 'react';
import { IPerformanceData, TPerformanceDataWithUid } from '../types';
import DataStorage from '../utils/DataStorage';

export const storage = new DataStorage<IPerformanceData>('PERFORMANCE_TEST');

export function usePerformanceStorage() {
  const [items, setItems] = useState<TPerformanceDataWithUid[]>([]);

  const updateItems = () => setItems(storage.getAll().reverse());

  useEffect(() => {
    updateItems();
  }, []);

  const deleteItem = (uid: string) => {
    storage.delete(uid);
    updateItems();
  };

  const pushItem = (data: IPerformanceData) => {
    storage.push(data);
    updateItems();
  };

  const getOne = (uid: string) => storage.getOne(uid);

  return {
    items,
    deleteItem,
    getOne,
    pushItem,
  };
}
