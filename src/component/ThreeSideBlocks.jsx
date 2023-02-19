import React from 'react';
import { Card } from "antd";
import { BookOutlined } from "@ant-design/icons";
import { Layout, Space } from 'antd';
import { RightSquareOutlined, StockOutlined } from "@ant-design/icons";
const { Content } = Layout;


const ThreeSideBlocks = () => {

  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#f2f3f6',
    margin: 10,
  };

  return (
    <div className='threesideblocks'>
      <Space direction="horizontal" style={{ width: '100%'}} size={[0, 48]} wrap align='baseline'>
        <Layout>
          <Content className='threesideblockscontent' style={contentStyle}>
            <Card className='threesideblocksone' style={{   width: 390, height: 115, marginBottom: 290, margin: 4, textAlign: 'center' }}>
              <div  style={{ "marginTop": "-35px" }}>
                <p style={{ "color": "#9e9e9e", "fontSize": "16px" }}><RightSquareOutlined /><b>Total Ticket Sold</b></p>
                <p style={{ "color": "#000000", "fontSize": "20px", "fontWeight": "800", "marginTop": "-10px" }}>3,459,780</p>
                <p style={{ "width": "185px", "backgroundColor": "#e5fef3", "borderRadius": "10px", "color": "#319f93", "fontSize": "15px", "display": "list-item", "marginLeft": "85px", "marginTop": "-10px" }}><StockOutlined />+25% from last week</p>
              </div>
            </Card>

            <Card className='threesideblockstwo' style={{ width: 390, height: 100, marginLeft: -305, margin: 3, textAlign: 'center' }}>
              <div  style={{ "marginTop": "-25px" }}>
                <p style={{ color: "#9e9e9e", "fontSize": "16px" }}><BookOutlined /><b>Total Orders</b></p>
                <p style={{ "color": "#000000", "fontSize": "20px", "fontWeight": "800", "marginTop": "-5px" }}>1,459,780</p>
              </div>
            </Card>

            <Card className='threesideblocksthree' style={{ width: 390, height: 110, marginLeft: -305, margin: 5, textAlign: 'center' }}>
              <div  style={{ "marginTop": "-20px" }}>
                <p style={{ color: "#9e9e9e", "fontSize": "16px" }}><BookOutlined /><b>Total Check-In</b></p>
                <p style={{ "color": "#000000", "fontSize": "20px", "fontWeight": "800", "marginTop": "-5px" }}>5,053,980/6,000,000</p>
              </div>
            </Card>
          </Content>
        </Layout>
      </Space>
    </div >
  )
}

export default ThreeSideBlocks;