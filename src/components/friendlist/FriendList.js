import { FriendListItem } from './FriendListItem';
import styles from './FriendList.module.css';

export const FriendList = props => {
  return (
    <ul className={styles['friend-list']}>
      {props.data.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};