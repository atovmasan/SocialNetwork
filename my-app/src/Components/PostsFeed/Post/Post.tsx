import {
  CommentOutlined,
  DislikeOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import "./Post.sass";
import React from "react";

type PropsType = {
  imgSRC: string;
  text: string;
  isLiked: boolean;
  isDisliked: boolean;
};

let data = [
  {
    imgSRC:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlcSusDg6_P3x0TrCTvacykYa5Su1dIiTXlj4bWzPmpGW16yaJ01d7cGDBtTm3D1NJ1s&usqp=CAU",
    text: "blablabebe",
    isLiked: true,
    isDisliked: false,
  },

  {
    imgSRC:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlcSusDg6_P3x0TrCTvacykYa5Su1dIiTXlj4bWzPmpGW16yaJ01d7cGDBtTm3D1NJ1s&usqp=CAU",
    text: "blablabebe",
    isLiked: true,
    isDisliked: false,
  },

  {
    imgSRC:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlcSusDg6_P3x0TrCTvacykYa5Su1dIiTXlj4bWzPmpGW16yaJ01d7cGDBtTm3D1NJ1s&usqp=CAU",
    text: "blablabebe",
    isLiked: true,
    isDisliked: false,
  },
];

const map1 = data.map((t) => {
  return (
    <div className="post">
      <img src={t.imgSRC} />
      <p>{t.text}</p>
      <Space className="Space">
        <LikeOutlined className="icons" />
        <DislikeOutlined className="icons" />
        <CommentOutlined className="icons" />
      </Space>
    </div>
  );
});

export const Post = () => {
  return <div>{map1}</div>;
};
