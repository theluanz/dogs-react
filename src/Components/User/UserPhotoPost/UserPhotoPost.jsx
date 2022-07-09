import React from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../../Forms/Input/Input';
import Button from '../../Forms/Button/Button';
import useForm from '../../../Hooks/useForm';
import useFetch from '../../../Hooks/useFetch';
import { PHOTO_POST } from '../../../api';
import Error from '../../Helpers/Error/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../../Helpers/Head/Head';

const UserPhotoPost = () => {
  const name = useForm('');
  const weight = useForm('number');
  const age = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, isLoading, request } = useFetch();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (data) {
      navigate('/conta');
    }
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append('age', age.value);
    formData.append('weight', weight.value);
    formData.append('name', name.value);
    formData.append('img', img.raw);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    if (name.validate() && weight.validate() && age.validate() && img.raw) {
      request(url, options);
    }
  }
  function handleChangeImg({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" description="Poste a foto do seu pet no Dogs!" />

      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="name" {...name} />
        <Input label="Peso" type="number" name="weight" {...weight} />
        <Input label="Idade" type="number" name="age" {...age} />
        <input
          className={styles.fileInput}
          type="file"
          name="img"
          id="img"
          accept="image/*"
          onChange={handleChangeImg}
        />
        {isLoading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;
