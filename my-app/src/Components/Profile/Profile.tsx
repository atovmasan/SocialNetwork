import {UserOutlined} from "@ant-design/icons";
import {Avatar, Carousel, Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Footer, Header} from "antd/es/layout/layout";
import React from "react";
import {Post} from "../PostsFeed/Post/Post.tsx";
import "./Profile.sass";

const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
};

export let Profile = () => {
    return (
        <div>
            <Layout>
                <Header>header</Header>
                <Layout>
                    <Content>
                        <Carousel effect="fade" autoplay
                            autoplaySpeed={6500}
                            className="Carousel">
                            <div>
                                <img src="https://i.pinimg.com/originals/4b/6b/53/4b6b530bd05b82cde41a06ff0e591ea0.jpg"
                                    style={contentStyle}/>
                            </div>
                            <div>
                                <img src="https://img.badfon.ru/wallpaper/big/9/45/kanadskiy-bobr-castor.jpg"
                                    style={contentStyle}/>
                            </div>
                        </Carousel>
                        <div className="avatar">
                            <Avatar size={64}
                                icon={<UserOutlined/>}/>
                            <h2>Artem Tovmasyan</h2>
                        </div>
                        <div className="posts">
                            <Post/>
                        </div>
                    </Content>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        </div>
    );
};
