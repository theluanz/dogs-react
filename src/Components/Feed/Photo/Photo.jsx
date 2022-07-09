import React from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GET } from '../../../api';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../Helpers/Error/Error';
import Loading from '../../Helpers/Loading/Loading';
import PhotoContent from './PhotoContent/PhotoContent';
import Head from '../../Helpers/Head/Head';

const Photo = () => {
  const { id } = useParams();
  const { data, isLoading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;

  if (isLoading) return <Loading />;

  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} description={`Foto de ${data.photo.title}`} />
        <PhotoContent data={data} isSingle={true} />
      </section>
    );
  else return null;
};

export default Photo;
