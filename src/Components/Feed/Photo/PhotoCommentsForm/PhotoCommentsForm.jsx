import { React, useState } from 'react';
import useFetch from '../../../../Hooks/useFetch';
import { ReactComponent as EnviarIcon } from '../../../../assets/enviar.svg';
import { COMMENT_POST } from '../../../../api';
import Error from '../../../Helpers/Error/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Deixe seu comentário"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <EnviarIcon />
      </button>
      <Error error={error} />
    </form>
  );
};
export default PhotoCommentsForm;
