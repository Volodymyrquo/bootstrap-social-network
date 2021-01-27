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

const Profile = () => {
  return (
    <div
      id='carouselExampleCaptions'
      class='carousel slide'
      data-bs-ride='carousel'>
      <ol class='carousel-indicators'>
        <li
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to='0'
          class='active'></li>
        <li data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1'></li>
        <li data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src={getRandomImage(collections.length)}
            className='d-block w-100'
            alt='...'
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            src={getRandomImage(collections.length)}
            className='d-block w-100'
            alt='...'
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            src={getRandomImage(collections.length)}
            className='d-block w-100'
            alt='...'
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <Link
        className='carousel-control-prev'
        to='#carouselExampleCaptions'
        role='button'
        data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </Link>
      <Link
        className='carousel-control-next'
        to='#carouselExampleCaptions'
        role='button'
        data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </Link>
    </div>
  );
};

export default Profile;
