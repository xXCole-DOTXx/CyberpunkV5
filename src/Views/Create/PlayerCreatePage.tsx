/** @jsxImportSource @emotion/react */
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';
import S3 from 'react-aws-s3-typescript';
import { config } from '../../config';

type FormData = {
  handle: string;
  role: string;
  avatar: FileList;
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
    var avatarName = null;
    var postedName = null;
    if (data.avatar[0]?.name == null) {
      avatarName = null;
      postedName = null;
    } else {
      avatarName = data.avatar[0]?.name;
      postedName = data.avatar[0]?.name;
    }
    var imgType = data.avatar[0]?.name.substr(data.avatar[0]?.name.length - 3);
    if (imgType === 'jpg') {
      postedName = avatarName?.substring(0, avatarName.length - 4);
      avatarName = avatarName?.replace('jpg', 'jpeg');
    } else {
      postedName = postedName?.substring(0, postedName.length - 4);
    }
    var linkToAvatar = null;
    if (avatarName == null) {
      linkToAvatar = null;
    } else {
      linkToAvatar =
        'https://cyberpunkv2.s3.us-east-2.amazonaws.com/avatars/' + avatarName;
    }
    if (postedName != null) {
      ReactS3Client.uploadFile(data.avatar[0], postedName)
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }
    fetch('https://localhost:44326/api/Players/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        handle: data.handle,
        role: data.role,
        avatar: linkToAvatar,
      }),
    }).then((response) =>
      console.log(
        response.json().then((data) =>
          // eslint-disable-next-line no-template-curly-in-string
          navigate(`../Stats/${data.id}`),
        ),
      ),
    );
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
            <input
              type="file"
              {...register('avatar')}
              accept="image/png, image/gif, image/jpeg"
            />
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
