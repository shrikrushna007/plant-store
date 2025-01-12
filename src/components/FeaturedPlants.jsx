import React from 'react';
import './FeaturedPlants.css';

const plants = [
  { type: 'plant',img: 'src/assets/plant3-free-img-300x300.jpg', name: 'Boncellensis Succulent', price: '$25' },
  { type: 'cactus',img: 'src/assets/cactus2-free-img.jpg', name: 'Cleistocactus', price: '$34' },
  { type: 'plant',img: 'src/assets/plant4-free-img.jpg', name: 'Green Soil Lotus', price: '$20' },
  { type: 'plant',img: 'src/assets/plant1-free-img-300x300.jpg', name: 'Money Plant', price: '$34' },
  { type: 'cactus',img: 'src/assets/cactus4.jpg', name: 'Old Lady Cactus', price: '$12' },
  { type: 'plant',img: 'src/assets/plant4-free-img.jpg', name: 'Piorro Quisquam', price: '$45' },
  { type: 'plant',img: 'src/assets/plant6-free-img.jpg', name: 'Rattle Snake Tail', price: '$32' },
  { type: 'cactus',img: 'src/assets/cactus6-free-img-300x300.jpg', name: 'Star Cactus', price: '$30' },
];

function FeaturedPlants() {
  return (
    <div className="album pt-2 bg-body-tertiary">
      <div className="container">
        <h1 className="display-5 fw-bold text-body-emphasis text-center">Featured Plants</h1>
        <p className="lead mb-4 text-center">Explore our amazing variety of plants.</p>
        <div className="row row-cols-1 pt-5 row-cols-sm-2 row-cols-md-4 g-4">
          {plants.map((plant, index) => (
            <div className="col" key={index}>
              <div className="card shadow-sm">
                <button 
                  className="btn btn-secondary rounded-pill"
                  style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1, backgroundColor: 'white', color: 'black' }}
                >
                  Sale!
                </button>
                <img src={plant.img} className="card-img-top" alt={plant.name} />
                <div className="card-body">
                  <p>{plant.type}</p>
                  <h5 className="card-title">{plant.name}</h5>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                  </svg>

                </div>
                  <p className="card-text">{plant.price}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-sm btn-outline-primary">Buy Now</button>
                    <small className="text-muted">In Stock</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPlants;
