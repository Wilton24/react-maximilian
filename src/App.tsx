import Homepage from "./components/Homepage"
import Clickme from "./components/Clickme"
import { useEffect, useState } from "react";
import TabFiller from "./components/TabFiller";
import axios from "axios";

export default function App() {

  const apiURL = `https://66ef5ced3ed5bb4d0bf3538e.mockapi.io/tabContents`;
  const [tabName, setTabName] = useState(0);
  const [tabData, setTabData] = useState([]);

useEffect(()=>{
  const fetchData = async () => {
    const response = await axios.get(apiURL);
    setTabData(response.data);
  };
  fetchData();
  console.log(tabData);
  
}, []) 


  function handleClick(tabIndex: number){
    setTabName(tabIndex);
    console.log(tabData);    
  };


  return (
    <div className="App">
      <h1>Hello Vite + React!</h1>

      <Homepage >
        <p>This is a children component</p>
      </Homepage>

      <section className="tab-section">
        <Clickme tabName="Tab 1" onClick={handleClick} tabNum={1} className={tabName === 1 ? "activeBtn" : ""}/>
        <Clickme tabName="Tab 2" onClick={handleClick} tabNum={2} className={tabName === 2 ? "activeBtn" : ""}/>
        <Clickme tabName="Tab 3" onClick={handleClick} tabNum={3} className={tabName === 3 ? "activeBtn" : ""}/>
      </section>

      <section className="filler-section">
        {/* <TabFiller tabData = {tabData[0]}/> */}
      </section>

    
    </div>
  )
}