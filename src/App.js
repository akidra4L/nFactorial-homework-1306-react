import './App.css';

import firstPic from './img/1.jpeg';
import secondPic from './img/2.jpeg';
import thirdPic from './img/3.jpeg';
import fourthPic from './img/4.jpeg';
import fivethPic from './img/5.jpeg';

import Header from './header/header';

function App() {
  return (
    <>
      <Header />
      <div className="header">
        <i class="fa-brands fa-apple"></i>
      </div>

      <div className="container-fluid">
        <div className="row m-0 p-0">
          <div className="image-card col-sm-12">
            <img src={firstPic} />
            <div className='text-center'>HEY</div>
          </div>
          <div className="image-card col-sm-12">
            <img src={secondPic} />
            <div className='text-center'>LET'S</div>
          </div>
          <div className="image-card col-sm-12">
            <img src={thirdPic} />
            <div className='text-center'>GIVE</div>
          </div>
          <div className="image-card col-sm-12">
            <img src={fourthPic} />
            <div className='text-center'>ALL</div>
          </div>
          <div className="image-card col-sm-12">
            <img src={fivethPic} />
            <div className='text-center'>YOU CAN</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;