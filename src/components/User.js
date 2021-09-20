const User = ({ user }) => {

  return (
    <div className="user">
      <h5>{`Name : ${user.name}`}</h5>
      <h5>{`Username : ${user.username}`}</h5>
      <h5>{`Email : ${user.email}`}</h5>
      <div className="address">
        <h4>Address :</h4>
        <h5>{`Street : ${user.address.street}`}</h5>
        <h5>{`Suite : ${user.address.suite}`}</h5>
        <h5>{`City : ${user.address.city}`}</h5>
        <h5>{`ZipCode : ${user.address.zipcode}`}</h5>
      </div>
      <div className="geo">
        <h4>Geo :</h4>
        <h5>{`Lat : ${user.address.geo.lat}`}</h5>
        <h5>{`Lng : ${user.address.geo.lng}`}</h5>
      </div>
      <h5>{`Phone : ${user.phone}`}</h5>
      <h5>{`Website : ${user.website}`}</h5>
      <div className="company">
        <h4>Company :</h4>
        <h5>{`Name : ${user.company.name}`}</h5>
        <h5>{`CatchPhrase : ${user.company.catchPhrase}`}</h5>
        <h5>{`BS : ${user.company.bs}`}</h5>
      </div>
    </div>
  );
};
export default User;
