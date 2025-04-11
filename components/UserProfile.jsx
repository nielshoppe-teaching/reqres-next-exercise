export default function UserProfile({ user }) {
    return (
        <div>
            <h2>User Profile</h2>
            <p>This is the user profile component.</p>
            <p>Name: {user.first_name} {user.last_name}</p>
            <p>Email: {user.email}</p>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        </div>
    );
}