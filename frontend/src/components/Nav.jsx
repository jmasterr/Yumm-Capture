import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="nav">
      <Link to="/recipes" style={{ marginLeft: 750, fontSize: 20 }}>
        <b>Recipes</b>
      </Link>
      <Link to="/saved-recipes" style={{ marginLeft: 15, fontSize: 20 }}>
        <b>Saved Recipes</b>
      </Link>
      <Link to="/custom-recipes" style={{ marginLeft: 15, fontSize: 20 }}>
        <b>Custom Recipes</b>
      </Link>
    </div>
  );
};

export default Nav;
