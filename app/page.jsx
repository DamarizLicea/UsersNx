import Users from "../components/Users";
import React from "react";
async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data; // solo te da los usuarios y eso
  console.log(data.data); // solo te da los usuarios y eso
}
// react server component

async function IndexPage() {
  const users = await fetchUsers();
  // acuerdate que todo lo que va de js en el return, va entre {}
  return (
    <div>
      <h1 style={{ marginBottom: "1.9rem" }}>Lista de Usuarios</h1>
      <Users users={users} />
    </div>
  );
}

export default IndexPage;
