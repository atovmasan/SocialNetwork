import {CommentOutlined, DislikeOutlined, LikeOutlined} from "@ant-design/icons";
import {Space} from "antd";
import "./Post.sass";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../Redux/Store";
import {giveLike} from "../../../Redux/Reducers/PostSlice";
import {useEffect} from "react";

export const Post = () => {
    const dispatch: AppDispatch = useDispatch()
    const data = useSelector((state : RootState) => state.post);
    let DataArray = [data];
    const tsx = DataArray.map((n) => {
        return (
            <div>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlcSusDg6_P3x0TrCTvacykYa5Su1dIiTXlj4bWzPmpGW16yaJ01d7cGDBtTm3D1NJ1s&usqp=CAU"}/>
                <p>{
                    n.text
                }</p>
                <Space className="Space">
                    <LikeOutlined onClick={
                            dispatch(giveLike())
                        }
                        className="icons"/>
                    <DislikeOutlined className="icons"/>
                    <CommentOutlined className="icons"/>
                </Space>
            </div>
        );
    });
    return (
        <div className="post">
            <div>{tsx}</div>
        </div>
    );
};
