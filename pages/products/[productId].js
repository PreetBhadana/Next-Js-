import { useRouter } from 'next/router'

export async function getStaticPaths() {
  
  return {
      paths: [
        {params: {productId: '1'}}
      ],
      fallback: true
  }
}

export async function getStaticProps(context){
  const {params} = context
  const resp = await fetch(`http://localhost:4000/products/${params.productId}`)
  const data = await resp.json()

  return{
    props:{
      product: data
    }
  }
}

function ProductDetail({product}) {
  const router = useRouter()
  if(router.isFallback){
    return(
      <div>Loading ...</div>
    )
  }
  return (
    <div>
      <div className="ssr-styles ssr-styles-inside">
        {/* <Link href={`/products/${prod.id}`} passHref> */}
          <h3>{product.id}</h3>
          <h2> {product.title} {product.price}</h2>
          <p>{product.description}</p>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default ProductDetail;