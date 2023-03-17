import React from 'react';
import Badge from '../Badge';
import List from '../List/List';

import closeSvg from '../../assets/img/close.svg';

import './AddList.scss';

const AddList = ({ colors }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(colors[0]);

  return (
    <div className='add-list'>
      <List
        onClick={() => setVisiblePopup(!visiblePopup)}
        items={[
          {
            className: 'list__add-button',
            icone: (
              <svg
                width='12'
                height='12'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 1V15'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1 8H15'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ),
            name: 'Add list',
          },
        ]}
      />
      {visiblePopup && (
        <div className='add-list__popup'>
          <img
            onClick={() => setVisiblePopup(false)}
            className='add-list__popup-close-btn'
            src={closeSvg}
            alt='close Button'
          ></img>
          <input className='field' type='text' placeholder='List title' />
          <div className='add-list__popup-colors'>
            {colors.map((color) => (
              <Badge
                onClick={() => setSelectedColor(color.id)}
                key={color.id}
                color={color.name}
                className={selectedColor === color.id && 'active'}
              />
            ))}
          </div>
          <button className='button'>Add List</button>
        </div>
      )}
    </div>
  );
};

export default AddList;
