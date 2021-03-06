import React from 'react';
import Image from '../../Helpers/Image/Image';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={`${styles.photo} animeLeft`} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.preview}>{photo.views}</span>
    </li>
  );
};

export default FeedPhotosItem;
