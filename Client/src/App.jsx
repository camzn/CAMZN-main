import { useState, useEffect } from 'react';

// Init icons
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

// CSS for LeftBar
import "./assets/css/App.css"

function App() {
  useEffect(() => {
    document.title = "CAMZN";
  }, []);
  let AccountName = "He he he";
  /*  
    CurrentAccount include:  "Online", "Offline"
  */
  let CurrentAccount = "Online";

  return (
    <div className='Container'>
      {/* Left Bar */}
      <div className="LeftBar">
        {/* Top */}
        <div className="LeftBar__Top">
          {/* Search */}
          <div className="LeftBar__Top__Search">
            <button>
              <FaMagnifyingGlass className='IconSearch'></FaMagnifyingGlass>
            </button>
            <input type="text" placeholder='Tìm kiếm'/>
          </div>
          {/* End Search */}
        </div>
        {/* End Top */}


        {/* Middle */}
        <div className="LeftBar__Mid">
          <button className='SelectedBtn'>
            <MdOutlineHome className='HomeIcon'></MdOutlineHome>
            <span>Trang chủ</span>
          </button>

          <button>
            <IoChatboxEllipsesOutline className='BoxIcon'></IoChatboxEllipsesOutline>
            <span>Hộp thoại</span>
          </button>

          <button>
            <BsThreeDots className='ThreeDotsIcon'></BsThreeDots>
            <span>Mở rộng</span>
          </button>
        </div>
        {/* End Middle */}


        {/* Bottom */}
        <div className="LeftBar__Bottom">
          {/* Account */}
          <div className="LeftBar__Bottom__Account">
            {/* Avatar */}
            <div className="LeftBar__Bottom__Account__Avatar">
              <img src="src/assets/img/Avatar.jpg" alt="Your Avatar"/>
            </div>
            {/* End Avatar */}

            {/* Account Text */}
            <div className="LeftBar__Bottom__Account__Text">
              <span className='Name'>{AccountName}</span>
              <span className={"CurrentAccount " + CurrentAccount}>{CurrentAccount === "Online" ? "Trực tuyến" : "Ngoại tuyến"}</span>
            </div>
            {/* End Account Text */}
          </div>
          {/* End Account */}
        </div>
        {/* End Bottom */}
        
      </div>
      {/* End __LeftBar__ */}


      {/* __RightBar__ */}
      <div className="RightBar">
        
      </div>
      {/* End __RightBar__ */}
    </div>
  );
}

export default App;