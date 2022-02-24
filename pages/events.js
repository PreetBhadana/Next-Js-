import { useState } from "react"
import { useRouter } from "next/router"


export async function getServerSideProps(context){
  const { query } = context
  const { category } = query
  const queryString = category ? 'category=Sports' : ''
  const res = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await res.json()

  return {
    props: {
      eventsList: data,
    },
  }
}


function EventsList({eventsList}) {
  const [ events, setEvents ] = useState(eventsList)
  const router = useRouter()
  
  const fetchSportsEvents = async () => {
    const res = await fetch('http://localhost:4000/events?category=Sports')
    const data = await res.json()
    setEvents(data)
    router.push('/events?category=Sports', undefined, { shallow: true })
  } 

  return (
    <div>
      <button onClick={() => fetchSportsEvents()}> Get Sports Event</button>
      <h1>Event List</h1>
      
      {events.map((event) => {
          return(
            <div key = {event.id}>
              <h2>Id - {event.id}</h2>
              <h2>Title - {event.title}</h2>
              <h2>Description - {event.discription}</h2>
              <h2>Category - {event.category}</h2>
              <h2>Date - {event.date}</h2>
              <hr/>
            </div>
          )
        })
      }
    </div>
  );
}

export default EventsList;