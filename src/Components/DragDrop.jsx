import React from 'react';
import { Picture } from './Picture';
import { useState } from 'react';
import { useDrop } from 'react-dnd';

const PictureList = [
  {
    id: 1,
    url: 'https://cdn.custom-cursor.com/packs/5896/cute-unicorn-pack.png',
  },
  {
    id: 2,
    url: 'https://cdn.custom-cursor.com/packs/5896/cute-unicorn-pack.png',
  },
  {
    id: 3,
    url: 'https://cdn.custom-cursor.com/packs/5896/cute-unicorn-pack.png',
  },
  {
    id: 4,
    url: 'https://cdn.custom-cursor.com/packs/5896/cute-unicorn-pack.png',
  },
  {
    id: 5,
    url: 'https://cdn.custom-cursor.com/packs/5896/cute-unicorn-pack.png',
  },
];

export const DragDrop = () => {
  const [box, setBox] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBox = (id) => {
    console.log(id);
    const picturesList = PictureList.filter((pictures) => id === pictures.id);
    setBox((box) => [...box, picturesList[0]]);
  };
  return (
    <>
      <div className="pictures">
        {PictureList.map((pictures) => {
          return <Picture url={pictures.url} id={pictures.id} />;
        })}
      </div>
      <div className="box" ref={drop}>
        {box.map((pictures) => {
          return <Picture url={pictures.url} id={pictures.id} />;
        })}
      </div>
    </>
  );
};
