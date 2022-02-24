import { useState, useEffect } from 'react'


function dashboard(props) {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ dashboardData, setDashboardData ] = useState(null)

  useEffect(() => {
    async function fetchDashboardData () {
      const res = await fetch('http://localhost:4000/dashboard')
      const data = await res.json()
      setDashboardData(data)
      setIsLoading(false)
    }
    fetchDashboardData ()
  }, [])

  if(isLoading){
    return(
      <h1>
        Loading ...
      </h1>
    )
  }

  return (
    <div>
      <h1>
        Dashboard
      </h1>
      <hr/>
      <h2>posts: {dashboardData.posts} </h2>
      <h2> Likes: {dashboardData.likes}</h2>
      <h2>folowers: {dashboardData.folowers}</h2>
      <h2>folowing: {dashboardData.folowing}</h2>
    </div>
  );
}

export default dashboard;