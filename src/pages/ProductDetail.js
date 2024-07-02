import { useParams, Link } from "react-router-dom"

function ProductDetail(){
    const params = useParams()
   

    return (
    <>
    <h1>Product Details</h1>
    <p>{params.productId}
    </p>
    {/* ".." goes back to root level because ProductDetails is a child of our main path */}
    {/* UNLESS we set the relative property to 'path' */}
    <p><Link to=".." relative="path">Back</Link></p>
    </>)
}

export default ProductDetail