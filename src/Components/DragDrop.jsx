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
    url: 'https://cdn.pixabay.com/photo/2019/03/03/08/25/kawaii-4031334_1280.png',
  },
  {
    id: 3,
    url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
  },
];

export const DragDrop = () => {
  const [box, setBox] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBox(item.id),
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
