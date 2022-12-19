import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem";
import './style.css';

const FriendList = ({friends}) => {
    return  <ul className="friends-list">
            {friends.map(friend =>
                <li className="friend-item" key={friend.id}>
                <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
            </li>)}
  </ul>
}
FriendList.propTypes = {
    id: PropTypes.number,
}
export default FriendList;