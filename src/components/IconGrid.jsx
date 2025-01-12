import React from 'react';
import './IconGrid.css';

function IconGrid() {
  return (
    <div class="container px-4 py-5" id="icon-grid">
        <div class="d-flex justify-content-center align-items-center">
          <div class="d-flex flex-column align-items-center">
            <svg 
              class="bi text-success" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 576 512" 
              fill="green"
              width="40" 
              height="40">
              <path d="M568.3 192c-29 .125-135 6.124-213.9 82.1C321.2 304.7 301 338.3 288 369.9c-13-31.63-33.25-65.25-66.38-94.87C142.8 198.2 36.75 192.2 7.75 192C3.375 192 0 195.4 0 199.9c.25 27.88 7.125 126.2 88.75 199.3C172.8 481 256 479.1 288 479.1s115.2 1.025 199.3-80.85C568.9 326 575.8 227.7 576 199.9C576 195.4 572.6 192 568.3 192zM288 302.6c12.75-18.87 27.62-35.75 44.13-50.5c19-18.62 39.5-33.37 60.25-45.25c-16.5-70.5-51.75-133-96.75-172.3c-4.125-3.5-11-3.5-15.12 0c-45 39.25-80.25 101.6-96.75 172.1c20.37 11.75 40.5 26.12 59.25 44.37C260 266.4 275.1 283.7 288 302.6z"></path>
            </svg>
            <h3 class="fw-bold mb-0 fs-5 text-body-emphasis mt-2">Plants Collection</h3>
            <p class="text-center">Any plants for your space</p>
          </div>
      
          <div class="d-flex flex-column align-items-center">
            <svg 
              class="text-success" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512" 
              fill="green"
              width="40" 
              height="40">
              <path d="M50.73 58.53C58.86 42.27 75.48 32 93.67 32H208V160H0L50.73 58.53zM240 160V32H354.3C372.5 32 389.1 42.27 397.3 58.53L448 160H240zM448 416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V192H448V416z"></path>
            </svg>
            <h3 class="fw-bold mb-0 fs-5 text-body-emphasis mt-2">Free Shipping</h3>
            <p class="text-center">Free shipping on order</p>
          </div>
      
          <div class="d-flex flex-column align-items-center">
            <svg 
              class="text-success" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512" 
              fill="green"
              width="40" 
              height="40">
              <path d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"></path>
            </svg>
            <h3 class="fw-bold mb-0 fs-5 text-body-emphasis mt-2">100% Money Back</h3>
            <p class="text-center">if the item didn't suit you</p>
          </div>
        </div>
      </div>
  );
}

export default IconGrid;
