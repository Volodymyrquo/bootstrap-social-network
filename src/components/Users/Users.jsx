import React from 'react';
import { Link } from 'react-router-dom';

const collections = [
  2539557,
  4724290,
  9247594,
  8865824,
  173683,
  11159250,
  560794,
  656296,
  1065831,
  1122236,
  1126752,
  1244652,
  927255,
  1043201,
  10460602,
  3741386,
  4256940,
  4378436,
  2253576,
];

const getRandomImage = (max) => {
  let arrIndex = Math.floor(Math.random() * Math.floor(max));
  return `https://source.unsplash.com/collection/${collections[arrIndex]}/1600x900`;
};

let arr = [];

for (let i = 0; i < 20; i++) {
  arr = [...arr, i];
}

const Users = () => {
  return (
    <div className='container'>
      <div className='row mt-4'>
        {arr.map((item) => (
          <div key={item} className='col-xs-12 col-md-3 mb-4'>
            <div className='card'>
              <img
                src={getRandomImage(collections.length)}
                className='card-img-top'
                alt='user'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to='/profile' className='btn btn-warning'>
                  follow
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
