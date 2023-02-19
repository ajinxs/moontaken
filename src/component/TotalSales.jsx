import React from 'react';
import { Layout, Card } from "antd";
import { StarOutlined, StockOutlined } from "@ant-design/icons";

const { Content } = Layout;

const TotalSales = () => {

  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#f2f3f6',
  };


  return (
    <div className='totalsales'>
      <Layout>
        <Content style={contentStyle}>
          <Card style={{ width: 400, height: 340, margin:10, textAlign: 'center' }}>
            <div>
              <p style={{ "color": "#9e9e9e", "fontSize": "16px" }}><StarOutlined/><b>Total Sales (THB)</b></p>
              <p style={{ "color": "#000000", "fontSize": "22px", "fontWeight": "800" }}>1,000,000,000</p>
              <p style={{ "width": "200px", "backgroundColor": "#e5fef3", "borderRadius": "10px", "color": "#319f93", "fontSize": "17px", "display": "list-item", "marginLeft": "80px" }}><StockOutlined/>+11% from last week</p>

              <hr />

              <span style={{ "color": "#9e9e9e", "fontSize": "13px" }}>
                <b>Platform fee (VAT Incl.)</b>
                <b style={{ "marginLeft": "150px" }}>500,000</b>
              </span>

              <p style={{ "color": "#9e9e9e", "fontSize": "13px" }}>
                <b>Payment fee (VAT Incl.)</b>
                <b style={{ "marginLeft": "150px" }}>300,000</b>
              </p>

              <hr />

              <span style={{ "color": "#9e9e9e", "fontSize": "14px" }}>
                <b>Net Sales</b>
                <b style={{ "marginLeft": "200px" }}>998,400,000</b>
              </span>
            </div>
          </Card>
        </Content>
      </Layout>
    </div>
  )
}

export default TotalSales;