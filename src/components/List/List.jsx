import React from 'react';
import classNames from 'classnames';

import './List.scss';
import Badge from '../Badge';
import removeSvg from '../../assets/img/remove.svg';

const List = ({ items, isRemovable, onClick, onRemove }) => {
  const removeList = (item) => {
    if (window.confirm('Are you sure you want to delete the list?')) {
      onRemove(item);
    }
  };
  return (
    <ul onClick={onClick} className='list'>
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, { active: item.active })}
        >
          <i>{item.icone ? item.icone : <Badge color={item.color} />}</i>

          <span>{item.name}</span>

          {isRemovable && (
            <img
              className='list__remove-icon'
              src={removeSvg}
              alt='Remove icone'
              onClick={() => removeList(item)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
