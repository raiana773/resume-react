import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <h1>Профиль</h1>
      <br />
      <div>
        <h2>Мударисбекова Айдана</h2>
        <br />
        <h3>
          {" "}
          Мне 20 лет, в данное время учусь на IT Программиста JavaSript. Имею
          опыт и знания в различных сферах.
        </h3>
        <br />
        <img
          className="image"
          src="https://kamala-soft.com/upload/iblock/6e3/6e3bf8d2bf3b6ad71c256b02ade527fb.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Profile;
