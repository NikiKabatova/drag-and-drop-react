import React from 'react';
import { useDrag } from 'react-dnd';

export const Picture = ({ id, url }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      src={url}
      width="150px"
      style={{ border: isDragging ? '5px solid green' : '0px' }}
    />
  );
};
