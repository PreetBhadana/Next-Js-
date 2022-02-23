import { useRouter } from 'next/router'

function Doc(props) {
  const router = useRouter()
  const { params } = router.query
  
  return (
    <div>
      <h1>Docs Home Page {params}</h1>
    </div>
  );
}

export default Doc;