const Profile = ({ user }) => {
  return (
    <div className='profile'>
      <img
        src="https://png.pngtree.com/png-vector/20190225/ourlarge/pngtree-vector-avatar-icon-png-image_702436.jpg"
        alt="avatar"
        height='200px'
        width='200px'
      />
      <h4>{user.name}</h4>
    </div>
  );
};

export default Profile;
