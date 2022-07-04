import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, src, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);
  function handleLoad({ target }) {
    target.style.opacity = 1;
  }
  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} src={src} alt={alt} {...props} />
    </div>
  );
};

export default Image;
