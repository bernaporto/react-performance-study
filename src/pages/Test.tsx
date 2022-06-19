import './Test.css';
import React, { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { ERouteType, TEST_DATA_QUERY_KEY, TEST_DATA_URL } from '../constants';
import { ITestData } from '../types';

const fetchData = (): Promise<ITestData[]> =>
  fetch(TEST_DATA_URL).then((response) => response.json());

export const TestPage: FC = () => {
  const [testData, setTestData] = useState<ITestData[] | null>(null);
  const { refetch, remove } = useQuery<ITestData[]>({
    queryKey: TEST_DATA_QUERY_KEY,
    queryFn: fetchData,
    enabled: false,
    onSuccess: (data) => setTestData(data),
  });

  const handleGetData = () => {
    refetch();
  };

  const handleClearData = () => {
    setTestData(null);
    remove();
  };

  return (
    <section data-testid="test-page-root">
      {!testData ? (
        <NoDataPage getData={handleGetData} />
      ) : (
        <DataPage clearData={handleClearData} data={testData} />
      )}
    </section>
  );
};

const NoDataPage: FC<{
  getData: VoidFunction;
}> = ({ getData }) => (
  <>
    <section>
      <p className="test-page-description">
        <i>Click on the button bellow to start dowloading data.</i>
      </p>
    </section>

    <section className="test-page-button-area">
      <button onClick={getData}>Get Data</button>
    </section>
  </>
);

const DataPage: FC<{
  data: ITestData[];
  clearData: VoidFunction;
}> = ({ clearData }) => (
  <>
    <section>
      <p className="test-page-description">
        <i>
          Go to the{' '}
          <Link to={ERouteType.PERFORMANCE}>
            <b>Performace Page</b>
          </Link>
          .
        </i>
      </p>
    </section>

    <section className="test-page-button-area">
      <button onClick={clearData}>Clear Data</button>
    </section>
  </>
);
