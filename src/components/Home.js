import { Link } from "react-router-dom";

export default function Home (){
    return(
        <div>
        <h1>Welcome to React-redux Boilerplate!</h1>
        <nav>
        <Link to="/list">Click here to go to the List page.</Link>
      </nav>
        </div>
        
    )
}