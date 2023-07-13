async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`); // te da el usuario con ese id
  const data = await res.json();
  return data.data;
}
// que no se te olvide meter parametros entre {}
async function UsersPage({ params }) {
  const user = await getUser(params.id); // se lo pasas a la de arriba
  // si no hay use client, es un server component}
  // ¿Que es un server component?
  // Es un componente que se renderiza en el servidor, no en el cliente
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card" style={{ marginTop: "3rem" }}>
          <div className="card-header text-center">
            <img
              src={user.avatar}
              alt={user.first_name}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="card-body text-center">
            <h3>
              {user.id} {user.first_name} {user.last_name}
            </h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UsersPage;
