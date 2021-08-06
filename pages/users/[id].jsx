import {useRouter} from 'next/router'
import fetch from 'isomorphic-fetch'
import Container from '../../components/container'

const userProfile = ({user}) => {
  const router = useRouter()
  const {id} = router.query
  return (
    <Container>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
    </Container>
  )
}

userProfile.getInitialProps = async (ctx) => {
  // console.log(ctx.query.id) En este caso lo imprime, pero no en el navegador
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${ctx.query.id}`)
  const data = await res.json()
  console.log(data)
  return {user:data}
}

export default userProfile