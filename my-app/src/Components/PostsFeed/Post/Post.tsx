import { CommentOutlined, DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import { Space } from "antd";
import './Post.sass';
import React from "react";

type PropsType = {
  imgSRC: string
  text: string
  isLiked: boolean
  isDisliked: boolean
}

export const Post = () => {
  return (
   <div className="post">
        <img src="https://sun1-97.userapi.com/impg/OgO57w97F5OK5eucqwPMoX2rynNWWZe2bM5CNQ/8AdygHlQdUI.jpg?size=720x720&quality=95&sign=73168b6ec318d8682d0b8069a5706f85&c_uniq_tag=sIJieFD18B-g1tGC9FmIOWqqGjgi_7Bomno3GUGPVZ4&type=album" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim magnam in quo porro accusamus? Dolor reiciendis, similique ad minima unde neque, sapiente consequuntur tenetur deleniti magni enim quos cupiditate excepturi.</p>
        <Space className="Space">
            <LikeOutlined className="icons"/>
            <DislikeOutlined className="icons"/>    
            <CommentOutlined className="icons" />
        </Space>
   </div>
 );
};