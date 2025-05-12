

import { useState } from 'react';
import './style.css';
 const Card = ({ children, className }) => <div className={`card ${className}`}>{children}</div>;
const Button = ({ children, onClick, type }) => <button type={type} onClick={onClick}>{children}</button>;

function App() {
  const initialBooks = ['Harry Potter és a Főnix Rendje', 'Dűne', 'Hunyadi'];
  const [orderedBooks, setOrderedBooks] = useState([]);

  const handleOrderBook = (bookTitle) => {
    setOrderedBooks([...orderedBooks, bookTitle]);
  };
   const handleRemoveBook = (bookToRemove) => {
    const updatedOrders = orderedBooks.filter(book => book !== bookToRemove);
    setOrderedBooks(updatedOrders);
  };
  return (
          <div className="app-container">
      <header className="header">
        <h1 className="title">Könyvtár Alkalmazás</h1>
        <p className="subtitle">Fedezd fel könyveinket és lépj kapcsolatba velünk!</p>
      </header>
 <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#services">Könyvek</a></li>
          <li><a href="#orders">Kosár</a></li>
          <li><a href="#contact">Rendelés</a></li>
        </ul>
      </nav>
  <section className="services">
        <h2 className="section-title">Szolgáltatások / Könyvek</h2>
        <div className="books-grid">
          {initialBooks.map((book, index) => (
            <Card key={index} className="book-card">
              <h3 className="book-title">{book}</h3>
              <p className="book-description">Rövid leírás a könyvről.</p>
              <Button onClick={() => handleOrderBook(book)}>Kosárba helyezés</Button>
            </Card>
          ))}
        </div>
  </section>

 <section className="orders">
  <h2 className="section-title">Kosár</h2>
  {orderedBooks.length === 0 ? (
    <p>Nincsenek még rendelt könyvek.</p>
  ) : (
    <ul>
      {orderedBooks.map((book, index) => (
        <li key={index}>
          {book}
          <Button onClick={() => handleRemoveBook(book)}>Törlés</Button>
        </li>
      ))}
    </ul>
  )}
</section>
      <section className="contact">
        <h2 className="section-title">Rendelés</h2>
        <form className="contact-form">
          <div className="form-group">
            <label className="form-label">Név:</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input type="email" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Üzenet:</label>
            <textarea className="form-input" rows="4"></textarea>
          </div>
          <Button type="submit">Küldés</Button>
        </form>
      </section>

     
    </div>
  );
}

  ;

;
export default App;
