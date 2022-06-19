import React, { FC, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetails } from '../components';
import { usePerformanceStorage } from '../hooks/usePerformanceStorage';
import { TPerformanceDataWithUid } from '../types';

export const PerformanceItemPage: FC = () => {
  const { uid } = useParams();
  const [data, setData] = useState<TPerformanceDataWithUid>();
  const { getOne } = usePerformanceStorage();

  useLayoutEffect(() => {
    if (!uid) return;

    const maybeData = getOne(uid);
    if (maybeData) setData(maybeData);
  }, []);

  if (!data) return null;

  return (
    <section
      data-testid="performance-item-page-root"
      className="page-container"
    >
      <ItemDetails data={data} />
    </section>
  );
};
