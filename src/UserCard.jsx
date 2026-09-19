const UserCard = ({u}) => {
    return (
        <div className="card">
            <h2 className="card-title">Name:{u.name}</h2>
            <p className="card-body">Username: {u.username} - city: {u.address.city}</p>
        </div>
    )
}
export default UserCard;