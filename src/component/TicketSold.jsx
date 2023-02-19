import React from 'react';
import { Layout, Space, Card, Progress } from "antd";
import { RightSquareOutlined } from "@ant-design/icons";
const { Content } = Layout;


const TicketSold = () => {

    const contentStyle = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#f2f3f6',
        margin: 10,
      };

    return (
        <div className='ticketsoldtotal'>
            <Space wrap>
                <Layout>
                    <Content style={contentStyle}>
                        <Card className='ticketsoldtotalcard' style={{ width: 610, height: 270, marginTop:-5, textAlign: 'center' }}>
                            <div style={{ "marginTop": "-30px" }}>
                                <p style={{ "color": "#0a0a0a", "fontSize": "15px", "fontWeight": "800", "marginRight": "340px" }}><RightSquareOutlined /><b>Ticket Sold / Total Available</b></p>
                                <hr />

                                <span className='ticketsoldtotalprogress' style={{ "float": "left", "marginTop": "60px" }}>
                                    <Progress
                                        type="circle"
                                        percent={67}
                                        strokeColor={{
                                            '0%': '#69c1e3',
                                            '100%': '#3676d4',
                                        }}
                                    />
                                </span>

                                <span className='ticketsoldtotalbarprogress' style={{ "float": "right", "fontSize":"7.5px"}}>
                                    <span style={{ "float": "left", "fontWeight": "800" }}><b>General Addmission</b></span>
                                    <span style={{ "float": "right", "color": "#a4a4a4" }}>480/600 | 80%</span>
                                    <Progress
                                        percent={80}
                                        showInfo={false}
                                        strokeColor={{ '100%': '#2155cd' }}
                                    />
                                
                                    <span style={{ "float": "left", "fontWeight": "800" }}>VIP</span>
                                    <span style={{ "float": "right", "color": "#a4a4a4" }}>100/200 | 50%</span>
                                    <Progress
                                        percent={50}
                                        showInfo={false}
                                        strokeColor={{ '100%': '#0ca1dd' }}
                                    />
                              
                              
                                    <span style={{ "float": "left", "fontWeight": "800" }}>VVIP</span>
                                    <span style={{ "float": "right", "color": "#a4a4a4" }}>20/100 | 20%</span>
                                    <Progress
                                        percent={20}
                                        showInfo={false}
                                        strokeColor={{ '100%': '#79dae8' }}
                                    />
                               
                                    <span style={{ "float": "left", "fontWeight": "800" }}>VVIP2</span>
                                    <span style={{ "float": "right", "color": "#a4a4a4" }}>15/100 | 5%</span>
                                    <Progress
                                        percent={5}
                                        showInfo={false}
                                        strokeColor={{ '100%': '#69c1e3' }}
                                    />
                               
                                        <span style={{ "float": "left", "fontWeight": "800" }}>VVIP3</span>
                                        <span style={{ "float": "right", "color": "#a4a4a4" }}>10/100 | 10%</span>
                                        <Progress
                                            percent={10}
                                            showInfo={false}
                                            strokeColor={{ '100%': '#828bc5' }}
                                        />
                                </span>
                            </div>
                        </Card>
                    </Content>
                </Layout>
            </Space>
        </div>
    )
}

export default TicketSold;