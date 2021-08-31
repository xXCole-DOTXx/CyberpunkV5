/** @jsxImportSource @emotion/react */
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';
//import S3 from 'react-aws-s3';

type FormData = {
  handle: string;
  role: string;
  avatar: string;
};

// const config = {
//   bucketName: 'cyberpunkv2',
//   dirName: 'avatars',
//   region: 'us-east-1',
//   accessKeyId: 'key',
//   secretAccessKey: 'key',
// };

function PlayerCreatePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate('../Stats');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.body}>
          <div className={styles.title}>
            <h2>Create New Player</h2>
          </div>
          <div className={styles.fields}>
            <h3>Handle: </h3>
            <input
              {...register('handle', { required: true })}
              type="text"
              placeholder="Johnny Silverhand"
              className={styles.input}
            />
            {errors.handle && <p>Handle is required.</p>}
          </div>
          <div className={styles.fields}>
            <h3>Role: </h3>
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
