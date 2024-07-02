import { Link, useNavigate } from "react-router-dom"

function HomePage(){
    const navigate = useNavigate()
    //should use a link instead of a button, but this programatic approach is possible. *Line 18
    // function navigateHandler(){
    //     navigate('/products')
    // }

    return (
    <>
    <h1>Home page</h1>
    {/* Linking is used so users know how to navigate */}
    {/* The below example redirects to the server, so everything is reloaded by the server. Which goes against React
    <p>Go to <a href='/products'>the list of products</a></p> */}
    <p>Go to <Link to="products"/> the list of products</p>
    {/* <p>
        <button onClick={navigateHandler}/>
    </p> */}
    </>
    )
}

export default HomePage