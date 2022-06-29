import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const handleSearchChange = (event) => {
      setSearch(event.target.value);
  }

  const handleShowOnlyInStockChange = (event) => {
      setShowOnlyInStock(event.target.checked);
  }

  return (
      <div className='ProductsPage'>
          <SearchBar products={products} handleSearchChange={handleSearchChange} handleShowOnlyInStockChange={handleShowOnlyInStockChange}/>
          <ProductTable products={products} search={search} showOnlyInStock={showOnlyInStock}/>
      </div>
  )
}
export default ProductsPage; 