import styles from './FriendList.module.css';
export const FriendListItem = props => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{
          background: props.friend.isOnline ? 'green' : 'red',
        }}
      ></span>
      <img src={props.friend.avatar} alt="User avatar" width="70" />
      <h3>{props.friend.name}</h3>
    </li>
  );
};