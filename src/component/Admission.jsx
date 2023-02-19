import React from 'react';
import { Layout, Space, Card, Progress } from "antd";
import { BookOutlined } from "@ant-design/icons";
const { Content } = Layout;


const Admission = () => {

    const contentStyle = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#f2f3f6',
        margin: 10,
      };

    return (
        <div className='admissioncheckin'>
            <Space wrap>
                <Layout>
                    <Content style={contentStyle}>
                        <Card className='admissioncheckincard' style={{ width: 610, height: 270, marginTop: -5, textAlign: 'center' }}>
                            <div style={{ "marginTop": "-30px" }}>
                                <p style={{ "color": "#0a0a0a", "fontSize": "15px", "fontWeight": "800", "marginRight": "360px" }}><BookOutlined /><b>Admission Check-in / Sold</b></p>
                                <hr />

                                <span className='admissioncheckinprogress' style={{ "float": "left", "marginTop": "60px" }}>
                                    <Progress
                                        type="circle"
                                        percent={67}
                                        strokeColor={{
                                            '0%': '#ada6ff',
                                            '100%': '#a77eff',
                                        }}
                                    />
                                </span>

                                <span  className='admissioncheckinbarprogress' style={{ "float": "right", "fontSize":"7.5px"}}>
                                    <span style={{ "float": "left", "fontWeight": "800" }}><b>General Addmission</b></span>
                                    <span style={{ "float": "right", "color": "#a4a4a4" }}>480/600 | 80%</span>
                                    <Progress
                                        percent={80}
                                        showInfo={false}
                                        strokeColor={{ '100%': '#a66cff' }}
                                    />


                                    <span style={{ "float": "left", "fontWeight": "800" }}>VIP</span>
                                    <span style={{ "float": "right", "color": "#a4a4a4" }}>100/200 | 50%</span>
                                    <Progress
                                        percent={50}
                                        showInfo={false}
                                        strokeColor={{ '100%': '#9c9efe'}}
                                    />


                                    <span style={{ "float": "left", "fontWeight": "800" }}>VVIP</span>
                                    <span style={{ "float": "right", "color": "#a4a4a4" }}>20/100 | 20%</span>
                                    <Progress
                                        percent={20}
                                        showInfo={false}
                                        strokeColor={{ '100%': '#b1e1ff'}}
                                    />

                                    <span style={{ "float": "left", "fontWeight": "800" }}>VVIP2</span>
                                    <span style={{ "float": "right", "color": "#a4a4a4" }}>15/100 | 5%</span>
                                    <Progress
                                        percent={5}
                                        showInfo={false}
                                        strokeColor={{ '100%': '#afa6ff' }}
                                    />

                                    <span>
                                        <span style={{ "float": "left", "fontWeight": "800" }}>VVIP3</span>
                                        <span style={{ "float": "right", "color": "#a4a4a4" }}>10/100 | 10%</span>
                                        <Progress
                                            percent={10}
                                            showInfo={false}
                                            strokeColor={{ '100%': '#e0c9ff' }}
                                        />
                                    </span>
                                </span>
                            </div>
                        </Card>
                    </Content>
                </Layout>
            </Space>
        </div>
    )
}

export default Admission;