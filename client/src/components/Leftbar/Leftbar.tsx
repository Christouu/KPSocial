import "./Leftbar.scss";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={process.env.PUBLIC_URL + "/images/defaultAvatar.jpg"}
              alt="default Avatar picture"
            />
            <span>Kristiyan Petkov</span>
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/1.png"} alt="item" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/2.png"} alt="item" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/3.png"} alt="item" />
            <span>Marketlace</span>
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/4.png"} alt="item" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/5.png"} alt="item" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Shortcuts</span>

          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/6.png"} alt="item" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/7.png"} alt="item" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/8.png"} alt="item" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/9.png"} alt="item" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/10.png"} alt="item" />
            <span>Messages</span>
          </div>
        </div>

        <hr />

        <div className="menu">
          <span>Others</span>

          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/11.png"} alt="item" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/12.png"} alt="item" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={process.env.PUBLIC_URL + "/images/13.png"} alt="item" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
