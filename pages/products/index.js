import Link from "next/link";

export async function getStaticProps(){

  const res = await fetch('http://localhost:4000/products')
  const data = await res.json();

  return{
    props: {
      data
    }
  }
}

function index({data}) { 
  return (
    <>
      {data.map((prod) => {
        return (
          <div key = {prod.id} className="ssr-styles">
            
              <h3>{prod.id}</h3>
              <h2>{prod.name}</h2>
            <Link href={`/products/${prod.id}`} passHref>
              <h2> {prod.title}</h2>
            </Link>
          </div>
        )
        })
      }
    </>
  );
}

export default index;