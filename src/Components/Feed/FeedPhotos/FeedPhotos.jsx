import React from 'react';
import useFetch from '../../../Hooks/useFetch';
import { PHOTOS_GET } from '../../../api';
import Error from '../../Helpers/Error/Error';
import Loading from '../../Helpers/Loading/Loading';
import styles from './FeedPhotos.module.css';
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, isLoading, error, request } = useFetch();
  const userId = user ? user.id : 0;
  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({
        page: page,
        total: total,
        user: userId,
      });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }

    fetchPhotos();
  }, [page, request, setInfinite, userId]);
  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  if (data)
    return (
      <ul className={styles.feed}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
