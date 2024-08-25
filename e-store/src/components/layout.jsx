import { Outlet, Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import { HomeIcon, CartIcon } from "./icons";
import Search from "./search";

const Layout = ({ categories }) => {
  const renderCategories = () => {
    return categories.data.map((c) => (
      <li key={c.id}>
        <Link to={`/categories/${c.id}`}>{c.title}</Link>
      </li>
    ));
  };

  return (
    <>
      <header>
        <div id="headerHomeIcon" aria-label="Home">
          <Link to="/">
            <HomeIcon width={40} />
          </Link>
        </div>
        <Search />

        <div id="headerTitle">Our Store</div>
        <div id="headerCartIcon" aria-label="Cart">
          <Link to="/basket">
            <CartIcon width={40} />
          </Link>
        </div>
      </header>
      <section>
        <nav>
          {categories.errorMessage && (
            <div role="alert">Error: {categories.errorMessage}</div>
          )}

          <ul>
            {categories.data && categories.data.length > 0 ? (
              renderCategories()
            ) : (
              <li>No categories available</li>
            )}
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </section>

      <footer>
        <Link to="/">Home</Link> | <Link to="/basket">Basket</Link>
      </footer>
    </>
  );
};

// Define prop types
Layout.propTypes = {
  categories: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
    errorMessage: PropTypes.string,
  }).isRequired,
};

export default Layout;
