import propTypes from 'prop-types';
import './style.css';


const Profile = ({user}) => {

    return (
<div className='profile'>
  <div className="description">
    <img
      src={user.avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{user.username}</p>
    <p className="tag">&#64;{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>

  <ul className="stats">
    <li className="item">
      <span className="label">Followers</span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li className="item">
      <span className="label">Views</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li className="item">
      <span className="label">Likes</span>
      <span className="quantity">{user.stats.likes}</span>
    </li>
  </ul>
</div>
    );
};

Profile.propTypes = {
        avatar: propTypes.string,
        username: propTypes.string,
        tag: propTypes.string,
        location: propTypes.string,
        stats: propTypes.shape({
          followers: propTypes.number,
          views: propTypes.number,
          likes: propTypes.number,
        })
    
}

export default Profile;