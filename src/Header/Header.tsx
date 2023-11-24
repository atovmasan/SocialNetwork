import React from "react";
import "./HeaderStyles.css";

type PropsType = {
  LoginOrSign: Function;
  name: string;
  avatar: any;
};

export let Header = (props: PropsType) => {
  return (
    <div>
      <h1>Good music</h1>
      <button
        onClick={() => {
          props.LoginOrSign();
        }}
      >
        Login/Sign
      </button>
      <h3>{props.name}</h3>
      <p>{props.avatar}</p>
      <ul>
        <li>Hits</li>
        <li>Favorites</li>
        <li>For you</li>
      </ul>
    </div>
  );
};
