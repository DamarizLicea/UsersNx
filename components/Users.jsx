"use client";
// cuando necesites interactividad, cuando ocupes un hook, hay que usar use client
import { useRouter } from "next/navigation";
function Users({ users }) {
  const router = useRouter();
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          key={user.id}
          className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
          onClick={() => {
            // para que te mande a users/ id del usuario
            router.push(`/users/${user.id}`);
          }}
        >
          <div>
            <h5>
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img
            src={user.avatar}
            alt={user.first_name}
            style={{ borderRadius: "50%" }}
          />
        </li>
      ))}
    </ul>
  );
}

export default Users;
