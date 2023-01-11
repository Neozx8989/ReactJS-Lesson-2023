import './App.css';
import ProductFunc from './Product';
import products from './Seed';
// import Product from './Product';

function App() {
  const productList = products.map((product) => {
    function handleProductUpVote(productID){
      console.log('upvote', productID )
    }

    return <ProductFunc 
      title={product.title} 
      id={product.id}
      description={product.description}
      url={product.url}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      stars={product.stars} 
      onVote={handleProductUpVote}
    />
  })

  // const productList2 = products.map((product)=> {
  //   return <Product
  //   title={product.title} 
  //   id={product.id}
  //   description={product.description}
  //   url={product.url}
  //   votes={product.votes}
  //   submitterAvatarUrl={product.submitterAvatarUrl}
  //   productImageUrl={product.productImageUrl} 
  // />
  // })


  return (
    <div className='App'>
      <header className="app-header">
        <h1>Popular Products</h1>
        <hr/>
        {productList}
        {/* {productList2} */}
      </header>
    </div>
  )
}
export default App;

