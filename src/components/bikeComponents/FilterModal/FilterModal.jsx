import { useState } from 'react';
import styles from './FilterModal.module.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState(100000); // State for price
  const [year, setYear] = useState(2020); // State for year
  const [activeCategory, setActiveCategory] = useState('Price Range'); // State for active category

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle applying filters
  const applyFilters = () => {
    console.log('Applied Filters:', { price, year });
    closeModal(); // Close modal after applying filters
  };

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.container}>
      <button onClick={openModal} className={styles.openButton}>Open Filter</button>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalBackground}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Filter</h2>
              <span className={styles.close} onClick={closeModal}>&times;</span>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.filterContainer}>
                {/* Left Section: Filter Categories */}
                <div className={styles.filterCategories}>
                  <p
                    className={activeCategory === 'Price Range' ? styles.activeCategory : ''}
                    onClick={() => handleCategoryClick('Price Range')}
                  >
                    Price Range
                  </p>
                  <p
                    className={activeCategory === 'Year' ? styles.activeCategory : ''}
                    onClick={() => handleCategoryClick('Year')}
                  >
                    Year
                  </p>
                  <p
                    className={activeCategory === 'Fuel Type' ? styles.activeCategory : ''}
                    onClick={() => handleCategoryClick('Fuel Type')}
                  >
                    Fuel Type
                  </p>
                  <p
                    className={activeCategory === 'Fuel Type' ? styles.activeCategory : ''}
                    onClick={() => handleCategoryClick('Fuel Type')}
                  >
                    Body Type
                  </p>
                  <p
                    className={activeCategory === 'Fuel Type' ? styles.activeCategory : ''}
                    onClick={() => handleCategoryClick('Fuel Type')}
                  >
                    Transmission
                  </p>
                  <p
                    className={activeCategory === 'Fuel Type' ? styles.activeCategory : ''}
                    onClick={() => handleCategoryClick('Fuel Type')}
                  >
                   Color
                  </p>
                  <p
                    className={activeCategory === 'Fuel Type' ? styles.activeCategory : ''}
                    onClick={() => handleCategoryClick('Fuel Type')}
                  >
                    Features
                  </p>
                  <p
                    className={activeCategory === 'Fuel Type' ? styles.activeCategory : ''}
                    onClick={() => handleCategoryClick('Fuel Type')}
                  >
                   Seats
                  </p>
                  {/* Add other categories as needed */}
                </div>

                {/* Right Section: Filter Options */}
                <div className={styles.filterOptions}>
                  {activeCategory === 'Price Range' && (
                    <div>
                      <h4>₹{parseInt(price).toLocaleString('en-IN')} lakh</h4>
                      <input
                        type="range"
                        min="50000"
                        max="200000"
                        step="10000"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className={styles.slider}
                      />
                    </div>
                  )}

                  {activeCategory === 'Year' && (
                    <div>
                      <h4>{year}</h4>
                      <input
                        type="number"
                        min="2000"
                        max={new Date().getFullYear()}
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className={styles.input}
                      />
                    </div>
                  )}

                  {/* Additional inputs for other categories can go here */}
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.applyButton} onClick={applyFilters}>Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
