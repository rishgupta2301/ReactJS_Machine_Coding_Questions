import { useEffect, useState } from "react";
import "./pagestyles.css";

const PAGE_ITEMS = 10;

const ProductCard = ({ title, thumbnail }) => {
  return (
    <div className="prod-card">
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
    </div>
  );
};

const Page = () => {
  const [products, setProducts] = useState([]);
const [currentPage, setCurrentPage] = useState(0);

  const noOfProducts = products.length;
  const totalPages = Math.ceil(noOfProducts/PAGE_ITEMS);
  const start = currentPage * PAGE_ITEMS;
  const end = start + PAGE_ITEMS;

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageClick = (e, ind) => {
    setCurrentPage(ind);
  }

  return !products.length ? (
    <div> No Products found!!</div>
  ) : (
    <div className="full-container">
      <h3 className="heading">Pagination</h3>
      <div className="page-numbers">
        <button disabled={currentPage < 1} onClick={() => setCurrentPage((prev) => (prev-1))}>⬅️</button>
        {[...Array(totalPages).keys()].map((n) => (<button onClick={(e) => handlePageClick(e,n)} 
        className={`numbers ${currentPage===n ? 'active' :''}`}
        >
            {n+1}
            </button>))}
        <button disabled={currentPage > totalPages-2} onClick={() => setCurrentPage((prev) => (prev+1))}>➡️</button>
      </div>
      <div className="product-container">
        {products.slice(start,end).map((item) => {
          return (
            <ProductCard
              key={item.id}
              title={item.title}
              thumbnail={item.thumbnail}
            />
          );
        })}
      </div>
    </div>
  );
};

// export {Page as NewPage}; // we can rename also while exporting in this manner
export default Page;
