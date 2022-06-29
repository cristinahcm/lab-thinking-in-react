import logo from './logo.svg';
import './App.css';
import ProductsPage from './components/ProductsPage';
import SearchBar from './components/SearchBar';

function App() {
  return (<div className="App">
    <SearchBar />
    <ProductsPage />
  </div>)
}
export default App; 