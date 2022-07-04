import React from 'react';
import PhotoComments from '../PhotoComments/PhotoComments';
import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css';
import { UserContext } from '../../../../Context/UserContext';
import PhotoDelete from '../PhotoDelete/PhotoDelete';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  const { user } = React.useContext(UserContext);

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.username && user.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.preview}>{photo.views}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.weight}Kg</li>
            <li>{photo.age} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
