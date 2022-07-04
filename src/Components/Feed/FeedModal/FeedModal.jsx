import React from 'react';
import { PHOTO_GET } from '../../../api';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../Helpers/Error/Error';
import Loading from '../../Helpers/Loading/Loading';
import styles from './FeedModal.module.css';
import PhotoContent from '../Photo/PhotoContent/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, isLoading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsidClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsidClick}>
      {error && <Error error={error} />}
      {isLoading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
