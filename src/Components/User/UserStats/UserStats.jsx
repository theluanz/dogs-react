import React from 'react';
import Head from '../../Helpers/Head/Head';
import useFetch from '../../../Hooks/useFetch';
import { STATS_GET } from '../../../api';
import Loading from '../../Helpers/Loading/Loading';
import Error from '../../Helpers/Error/Error';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs/UserStatsGraphs'));

const UserStats = () => {
  const { data, error, isLoading, request } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem('token');
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    fetchData();
  }, [request]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    <Error error={error} />;
  }
  if (data) {
    return (
      <div>
        <Head title="Estátisticas" />
        <React.Suspense fallback={<Loading />}>
          <UserStatsGraphs data={data} />
        </React.Suspense>
      </div>
    );
  }

  return null;
};

export default UserStats;
