import propTypes from 'prop-types';

const Profile = ({user}) => {

    return (
        <div className='Profile'>
  <div className="description">
    <img
      src={user.avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{user.name}</p>
    <p className="tag">{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{user.stats.likes}</span>
    </li>
  </ul>
</div>
    );
};

Profile.propTypes = {
    user: propTypes.shape({
        avatar: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        tag: propTypes.string.isRequired,
        location: propTypes.string.isRequired,
        stats: propTypes.number.isRequired,
    })
}

export default Profile;