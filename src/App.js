import { React } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';

const App = () => (
  <Router>
    <header>
      <nav>
        <h1>Awesome Bookstore</h1>
        <div className="nav-links">
          <Link to="/">Book</Link>
          <div />
          <Link to="/categories">Categories</Link>
        </div>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  </Router>
);

export default App;
