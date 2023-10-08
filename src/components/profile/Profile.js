import styles from './Profile.module.css';

export const Profile = props => {
  const { avatar, location, tag, username, stats } = props.data;
  return (
    <section className={styles.section}>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt="User avatar" className={styles.avatar} />
          <h3>{username}</h3>
          <p>{tag}</p>
          <p>{location}</p>
        </div>
        <ul className={styles.stats}>
          <li className={styles.statsItem}>
            <span className={styles.label}>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Views</span>
            <span>{stats.views}</span>
          </li>
          <li className={styles.statsItem}>
            <span className={styles.label}>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};