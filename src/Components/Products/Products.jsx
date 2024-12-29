import ProductLists from "../ProductLists/ProductList"

const Products = ({searchQuery}) => {
  return (
    <div>
      <ProductLists searchQuery={searchQuery}/>
    </div>
  )
}

export default Products