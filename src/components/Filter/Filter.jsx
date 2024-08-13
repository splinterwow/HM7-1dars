import React, { useState, useEffect } from "react";
import styles from "./Filter.module.css";

function Filter() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (


    
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.info}>
          <div className={styles.formGroup}>
            <label htmlFor="search">Search Product</label>
            <input
              className={styles.input}
              type="text"
              id="search"
              placeholder="Search Product"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="category">Select Category</label>
            <select className={styles.select} id="category">
              <option value="all">all</option>
              <option value="tables">Tables</option>
              <option value="chairs">Chairs</option>
              <option value="kids">Kids</option>
              <option value="sofas">Sofas</option>
            </select>
          </div>




          <div className={styles.formGroup}>
            <label htmlFor="company">Select Company</label>
            <select className={styles.select} id="company">
              <option value="all">all</option>
              <option value="company1">Company 1</option>
              <option value="company2">Company 2</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="sort">Sort By</label>
            <select className={styles.select} id="sort">
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
            </select>
          </div>
        </div>

        <div className={styles.excam}>
          <div className={styles.sliderContainer}>
            <label>Select Price</label>
            <div className={styles.priceDisplay}>
              <span>$0</span>
              <input
                type="range"
                className={styles.slider}
                min="10"
                max="1000"
                step="10"
              />
              <span>$1,000.00</span>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} />
              Free Shipping
            </label>
          </div>




          <div className={styles.buttons}>
            <button type="submit" className={styles.searchButton}>
              SEARCH
            </button>
            <button type="reset" className={styles.resetButton}>
              RESET
            </button>
          </div>
        </div>
      </form>
      <div>




        <ul>
          {data.map(item => (
            <li key={item.id}>
              {item.name} - {item.category} - {item.company} - ${item.price}
            </li>
          ))}
        </ul>



      </div>
    </div>
  );
}

export default Filter;
