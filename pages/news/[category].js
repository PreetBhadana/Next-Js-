import React from 'react';

function ArticleListByCatagory({ article, category}) {
  return (
    <>
      <h1>Show news for category <i>{category}</i></h1>
      {
        article.map((art) => {
          return (
            <div key = {art.id}>
              <h1>{art.title}</h1>
              <h2>{art.category}</h2>
              <p>{art.description}</p>
              <hr/>
            </div>
          )
        })
      }
    </>
  );
}

export default ArticleListByCatagory;

export async function getServerSideProps(context){
  const { params } = context
  const { category } = params
  
  const res = await fetch(`http://localhost:4000/news?category=${category}`)
  const data = await res.json()
  console.log(`Pre-rendering News Article for category ${category}`)

  return{
    props: {
      article: data,
      category
    }
  }
}