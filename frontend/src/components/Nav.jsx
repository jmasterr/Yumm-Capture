import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/recipes" style={{ marginLeft: 15 }}>
        <b>Recipes</b>
      </Link>
      <Link to="/saved-recipes" style={{ marginLeft: 15 }}>
        <b>Saved Recipes</b>
      </Link>
      <Link to="/custom-recipes" style={{ marginLeft: 15 }}>
        <b>Custom Recipes</b>
      </Link>
    </div>
  );
};

export default Nav;
