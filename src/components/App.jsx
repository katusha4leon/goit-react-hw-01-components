import { FriendList } from './friendlist/FriendList';
import { Statistics } from './statistics/Statistics';
import { Profile } from './profile/Profile';
import { TransactionHistory } from './transactions/TransactionHistory';

export const App = props => {
  return (
    <>
      <Profile data={props.datauser}  />
      <Statistics stats={props.data} title="Upload stats"/>
      <FriendList data={props.friends} />
      <TransactionHistory items={props.items} />
    </>
  );
};