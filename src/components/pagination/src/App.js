import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Table from "./components/table/Table";
import {
  COLUMN_CONFIG,
  PAGINATION_ENUMS,
  getPaginatedData,
  getTotalPagesCount,
} from "./components/utils";
import Pagination from "./components/pagination/Pagination";

function App() {
  const INIT_PAGE_NO = 1;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState("");
  const [currentPageNo, setCurrentPageNo] = useState(INIT_PAGE_NO);

  const handlePageChange = (type, newPageNo) => {
    switch (type) {
      case PAGINATION_ENUMS.FIRST:
        setCurrentPageNo(INIT_PAGE_NO);
        break;
      case PAGINATION_ENUMS.LAST:
        setCurrentPageNo(getTotalPagesCount(product));
        break;
      case PAGINATION_ENUMS.CHANGE:
        if (newPageNo === 0) {
          setCurrentPageNo(getTotalPagesCount(product));
        } else if (newPageNo === getTotalPagesCount(product) + 1) {
          setCurrentPageNo(INIT_PAGE_NO);
        } else {
          setCurrentPageNo(newPageNo);
        }
      default:
        return;
    }
  };
  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      let productList = await await fetch(
        "https://dummyjson.com/products"
      ).then((res) => res.json());
      setProduct(productList.products || []);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Pagination</h1>
      <Table
        tableData={getPaginatedData(product, currentPageNo)}
        columns={COLUMN_CONFIG}
      />
      <Pagination
        totalPages={getTotalPagesCount(product)}
        handlePageChange={handlePageChange}
        currentPageNo={currentPageNo}
      />
    </div>
  );
}

export default App;
