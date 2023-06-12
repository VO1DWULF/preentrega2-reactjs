import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ItemDetailContainer = ({ mangaList, cart, setCart }) => {
  const { id } = useParams();
  const selectedManga = mangaList.find((manga) => manga.id === parseInt(id));
  const [summary, setSummary] = useState('');

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${selectedManga.name}`)
      .then((response) => {
        const volumeInfo = response.data.items[0]?.volumeInfo;
        if (volumeInfo && volumeInfo.description) {
          setSummary(volumeInfo.description);
        }
      })
      .catch((error) => {
        console.error('Error fetching summary:', error);
      });
  }, [selectedManga.name]);

  const addToCart = () => {
    if (cart.find((item) => item.id === selectedManga.id)) {
      alert('This item is already in the cart.');
      return;
    }
    setCart([...cart, selectedManga]);
    alert('Item added to cart!');
  };

  if (!selectedManga) {
    return <div>Manga not found.</div>;
  }

  return (
    <div className='item-detail-container'>
      <h2>{selectedManga.name}</h2>
      <p>Price: ${selectedManga.price} USD</p>
      <p>Age: {selectedManga.age}</p>
      <p>Genre: {selectedManga.genre}</p>
      <div className="row">
        <div className="col-md-4">
          <img src={selectedManga.image} alt={selectedManga.name} className="img-fluid" style={{ maxWidth: '300px' }} />
        </div>
        <div className="col-md-8">
          <p>{summary}</p>
          <button onClick={addToCart} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;