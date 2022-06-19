import { useEffect, useState } from 'react';
import { IPerformanceData, TPerformanceDataWithUid } from '../types';
import DataStorage from '../utils/DataStorage';

export const storage = new DataStorage<IPerformanceData>('PERFORMANCE_TEST');

export function usePerformanceStorage() {
  const [items, setItems] = useState<TPerformanceDataWithUid[]>([]);

  const updateItems = () => setItems(storage.getAll());

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

  return {
    items,
    deleteItem,
    pushItem,
  };
}
