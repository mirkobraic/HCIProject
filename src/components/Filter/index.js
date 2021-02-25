import React from 'react'

import styles from "./style.module.css"

import { categories } from '../../constants/const'

const Filter = ({ categoryName, handleChange }) => {

    return (
      <div className={styles.shopFilter}>
        <h2 className={styles.filterTitle}>Filter</h2>
          <fieldset className={styles.filterCard}>
            <label htmlFor="category" className={styles.selectRowLabel}>
              Category
            </label>
            <select
              name="category"
              className={styles.selectRowInput}
              onChange={handleChange}
            >
              <option value={''}>-</option>
              {
                categories.map(category => (
                  <option key={category.name} value={category.name}>{category.name}</option>
                ))
              }
            </select>
          </fieldset>

          {
            Boolean(categoryName) && (
              <fieldset className={styles.filterCard}>
                <label htmlFor="product_type" className={styles.selectRowLabel}>
                  Product Type
                </label>
                <select
                  name="product_type"
                  className={styles.selectRowInput}
                  onChange={handleChange}
                >
                  <option value={''}>-</option>
                  {
                    categoryName.productTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))
                  }
                </select>
              </fieldset>
            )
          }

          {
            Boolean(categoryName) && (
              <fieldset className={styles.filterCard}>
                <label htmlFor="brand" className={styles.selectRowLabel}>
                  Brand
                </label>
                <select
                  name="brand"
                  className={styles.selectRowInput}
                  onChange={handleChange}
                >
                  <option value={''}>-</option>
                  {
                    categoryName.brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))
                  }
                </select>
              </fieldset>
            )
          }

          <fieldset className={styles.filterCard}>
            <label htmlFor="price_range" className={styles.selectRowLabel}>
              Price Range
            </label>
            <div className={styles.filterRange}>
              <span>0</span>
              <input type="range" defaultValue={2000} name="price_range" min={0} max={2000} onChange={handleChange}  />
              <span>2000</span>
            </div>
          </fieldset>
      </div>
    )
}

export default Filter
