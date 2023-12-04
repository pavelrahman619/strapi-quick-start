import React from 'react';

const RestaurantList = ({ restaurants }) => {
  return (
    <ul>
      {restaurants.map(({ id, attributes }) => (
        <li key={id}>
          {attributes.Name} - {attributes.Description[0].children[0].text}
        </li>
      ))}
    </ul>
  );
};

export default RestaurantList;
