export default function UserCard({data}) {
  return (
    <div className="user-card">
      <div>
        <img src={data.avatar_url} alt="avatar" />
      </div>
      <div>
        <h5> Name:{data.name}</h5>

        <p> Username:{data.login} </p>
      </div>
    </div>
  );
}
