import PropTypes from 'prop-types';
import { Fragment } from 'react';
import './style.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
 
    return <Fragment>
        {isOnline? <span className="green"></span>:<span className="red"></span>}
         <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
  </Fragment>
   
    
}
FriendListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool
}
export default FriendListItem;