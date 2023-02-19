import React from 'react';
import wow from "../img/wow.png";
import { Layout, Card } from "antd";
import { CalendarOutlined, ExclamationCircleOutlined } from "@ant-design/icons";


const { Content } = Layout;

const EventName = () => {

  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#f2f3f6',
  };

  return (
    <div className='eventname'>
      <Layout>
          <Content style={contentStyle}>
            <Card style={{ width: 400, height: 340, margin: 10, textAlign: 'center'}}>
              <div>
                <img src={wow} alt="banner" style={{ "width": "90px", "height": "90px", "borderRadius": "10px" }} />
                <p style={{ color: "#7d5298", "fontSize": "17px", "textAlign": "center" }}><b>Event Name</b></p>
                <hr />

                <p style={{ "color": "#9e9e9e", "textAlign": "left" }}><CalendarOutlined />Wed 12 JAN 2022 - Fri 14 JAN 2022</p>
                <p style={{ "color": "#9e9e9e", "textAlign": "left", "textDecorationLine": "underline", }}><ExclamationCircleOutlined />Impact Exhibition Hall 5 Muang Thong Thani</p>

                <hr />

                <span style={{ "color": "#9e9e9e" }}>
                  <b>Selling Start</b>
                  <b style={{ "marginLeft": "180px" }}>Selling End</b>
                </span>

                <p style={{ "color": "#1f1f1f", "fontSize": "13px" }}>
                  <b>1 MAY 2020</b>
                  <b style={{ "marginLeft": "180px", "fontSize": "13px" }}>15 APR 2023</b>
                </p>
              </div>
            </Card>
          </Content>
        </Layout>
    </div>
  )
}

export default EventName;