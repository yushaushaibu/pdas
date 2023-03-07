function ProfileCard({ title, handle, image }) {
  return (
    <div>
      <img alt="image" src={image} />
      <div>The title is {title}</div>
      <div>The handle is {handle}</div>
      <br />
    </div>
  );
}

export default ProfileCard;
