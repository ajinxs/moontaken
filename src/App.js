
import React from 'react';
import './App.css';
import EventName from './component/EventName';
import TotalSales from './component/TotalSales';
import ThreeSideBlocks from './component/ThreeSideBlocks';
import TicketSold from './component/TicketSold';
import Admission from './component/Admission';

function App() {

  return (

    <div className='app'>
      <EventName />
      <TotalSales />
      <ThreeSideBlocks />
      <TicketSold />
      <Admission />
    </div>

  );
}

export default App;
