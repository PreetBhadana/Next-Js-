
export async function getServerSideProps(){
  const res = await fetch('http://localhost:4000/news')
  const data = await res.json()

  return {
    props: {
      articles: data
    }
  }
}


function News({articles}) {
  
  return (
    <div>
      {
        articles.map((article) => {
          return(
            <div key={article.id}>
              <h1>{article.title}</h1>
              <h2>{article.category}</h2>
              <hr/>
            </div>
          )
        })
      }
    </div>
  );
}

export default News;
