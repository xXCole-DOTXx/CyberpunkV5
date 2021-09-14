/** @jsxImportSource @emotion/react */
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';
import S3 from 'react-aws-s3-typescript';
import { config } from '../../config';

type FormData = {
  handle: string;
  role: string;
  avatar: string;
};

const ReactS3Client = new S3(config);

function PlayerCreatePage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // ReactS3Client.uploadFile(data.avatar, data.handle + Date.now())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));
    // fetch('https://localhost:44326/api/Players/post', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     handle: data.handle,
    //     role: data.role,
    //     avatar: data.avatar,
    //   }),
    // }).then(() => navigate('../Stats'));
    navigate('../Stats');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.body}>
          <div className={styles.title}>
            <h2 className={styles.labels}>Create New Player</h2>
          </div>
          <div className={styles.fields}>
            <h3 className={styles.labels}>Handle: </h3>
            <input
              {...register('handle', { required: true })}
              type="text"
              placeholder="Johnny Silverhand"
              className={styles.input}
            />
            {errors.handle && <p>Handle is required.</p>}
          </div>
          <div className={styles.fields}>
            <h3 className={styles.labels}>Role: </h3>
            <select
              {...register('role', { required: true })}
              className={styles.input}
            >
              <option defaultValue="Rockerboy">Rockerboy</option>
              <option value="Solo">Solo</option>
              <option value="Netrunner">Netrunner</option>
              <option value="Techie">Techie</option>
              <option value="Media">Media</option>
              <option value="Cop">Corporate</option>
              <option value="Fixer">Fixer</option>
              <option value="Nomad">Nomad</option>
            </select>
          </div>
          <div className={styles.avatar}>
            <input type="file" {...register('avatar')} />
          </div>
          <div className={styles.avatar}>
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlayerCreatePage;
