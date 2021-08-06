import Router from "next/router"

const Users = (props) => {
  return (
    <ul>
      {
        props.users.map(user => (
          <li onClick={() => Router.push('/users/[id]', `/users/${user.id}`)}>
            <h5>{user.name}</h5>
            <p>{user.email}</p>
          </li>
        ))
      }
    </ul>
  )
}

export default Users