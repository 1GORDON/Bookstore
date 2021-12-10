import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import demoList from './components/navbar';
import BooksPage from './components/BooksPage';
import CategoriesPage from './components/CategoriesPage';

// eslint-disable-next-line
const App = function () {
  return (
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
        <Route path="/" element={<BooksPage bookList={demoList} />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
