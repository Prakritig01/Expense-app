import React from "react";

export const TitleInput = ({ title, onChange }) => {
  return (
    <div>
      <label htmlFor="title">
        Title:
        <input
          type="text"
          placeholder="eg. Chai"
          id="title"
          onChange={(e) => onChange(e.target.value)}
          value={title}
        />
      </label>
    </div>
  );
};

export const CategoryInput = ({ category, onChange }) => {
  return (
    <div>
      <label htmlFor="expense-category">
        Category:
        <select
          name="expense-category"
          id="expense-category"
          value={category}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Subscription">Subscription</option>
          <option value="Movies">Movies</option>
          <option value="Clothes">Clothes</option>
          <option value="Others">Others</option>
        </select>
      </label>
    </div>
  );
};

export const CostInput = ({ cost, onChange }) => {
  return (
    <div>
      <label htmlFor="cost">
        Cost:
        <input
          type="number"
          name="cost"
          id="cost"
          placeholder="eg. 30"
          onChange={(e) => onChange(e.target.value)}
          value={cost}
        />
      </label>
    </div>
  );
};

export const DateInput = ({ date, onChange }) => {
  return (
    <div>
      <label htmlFor="date">
        Date:
        <input
          type="date"
          name="date"
          id="date"
          onChange={(e) => onChange(e.target.value)}
          value={date}
        />
      </label>
    </div>
  );
};
