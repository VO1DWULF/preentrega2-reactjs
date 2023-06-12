import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Brand = () => {
  return <h2>Welcome Reader!</h2>;
};

const ItemListContainer = ({ mangaList }) => {
  const location = useLocation();
  const genre = location.pathname.split('/category/')[1];

  const filteredMangaList =
    genre && genre !== '/'
      ? mangaList.filter((manga) => manga.genre === genre)
      : mangaList;

  return (
    <div className="container">
      <Brand />
      <div className="row">
        {filteredMangaList.map((manga) => (
          <div key={manga.id} className="col-md-3 mb-3">
            <div className="card">
              <img src={manga.image} className="card-img-top custom-image" alt={manga.name} />
              <div className="card-body">
                <h5 className="card-title">{manga.name}</h5>
                <Link to={`/item/${manga.id}`} className="btn btn-primary stretched-link">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
