import useSWR from "swr";

const fetcher = async () => {

  const res = await fetch('http://localhost:4000/dashboard')
  const data = await res.json()

  return data
}

function DashboardSwr(props) {
  const { data, error } = useSWR('dashboard', fetcher)
  if(error) return 'Error Occur while fetching data'
  if(!data) return 'Loading ... '

  return (
    <div>
      <h1>
        Dashboard
      </h1>
      <hr/>
      <h2>posts: {data.posts} </h2>
      <h2> Likes: {data.likes}</h2>
      <h2>folowers: {data.folowers}</h2>
      <h2>folowing: {data.folowing}</h2>
    </div>
  );
}

export default DashboardSwr;