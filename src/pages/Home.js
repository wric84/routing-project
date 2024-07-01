import { Link } from "react-router-dom"

function HomePage(){
    return (
    <>
    <h1>Home page</h1>
    {/* Linking is used so users know how to navigate */}
    {/* The below example redirects to the server, so everything is reloaded by the server. Which goes against React
    <p>Go to <a href='/products'>the list of products</a></p> */}
    <p>Go to <Link to="/products"/> the list of products</p>
    </>
    )
}

export default HomePage