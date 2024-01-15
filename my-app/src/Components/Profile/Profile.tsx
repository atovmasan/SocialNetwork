import {UserOutlined} from "@ant-design/icons";
import {Avatar, Carousel, Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Footer, Header} from "antd/es/layout/layout";
import React from "react";


const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
};

export let Profile = () => {
    return (
        <div>
            <Layout>
                <Header>header</Header>
                <Layout>
                    <Content>
                        <Carousel effect="fade" autoplay
                            autoplaySpeed={6500}>
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                        </Carousel>
                        <div>
                            <Avatar size={64}
                                icon={<UserOutlined/>}/>
                            <h2>Artem Tovmasyan</h2>
                        </div>
                    </Content>
                </Layout>
                <Footer>footer</Footer>
            </Layout>
        </div>
    )
}
