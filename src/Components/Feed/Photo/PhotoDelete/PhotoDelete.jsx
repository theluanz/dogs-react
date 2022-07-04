import React from 'react';
import { PHOTO_DELETE } from '../../../../api';
import styles from './PhotoDelete.module.css';
import useFetch from '../../../../Hooks/useFetch';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleDeletePhoto() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok) {
        window.location.reload();
      }
    }
  }
  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Carregando
        </button>
      ) : (
        <button className={styles.delete} onClick={handleDeletePhoto}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
