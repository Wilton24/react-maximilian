import Homepage from "./components/Homepage"
import Clickme from "./components/Clickme"
import { useEffect, useState } from "react";
import TabFiller from "./components/TabFiller";
import axios from "axios";
import { messages } from "./assets/MockData";
import Tabs from "./components/Tabs";

export default function App() {

  const apiURL = `https://66ef5ced3ed5bb4d0bf3538e.mockapi.io/tabContents`;
  const [tabName, setTabName] = useState(0);
  const [tabData, setTabData] = useState([]);
  const [apiData, setApiData] = useState([] as any);

  const [saveEdit, setSaveEdit] = useState({
    isEditing: false,
    textValue: 'Edit'
  });
  const [playerName, setplayerName] = useState('Player X')

  function changeName(){
    setSaveEdit((prevState) => ({
      ...prevState,
      isEditing: !prevState.isEditing,
      textValue: prevState.isEditing ? 'Edit' : 'Save'
    }));

    
  }

  
  const fetchData = async () => {
    const response = await axios.get(apiURL);
    const data = response.data;
    setTabData(data);
  };

  const putData = ()=>{
    setApiData(messages)
  }

useEffect(()=>{
  fetchData();
  putData();
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
        <Tabs buttons={
          <>
            <Clickme tabName="Tab 1" onClick={handleClick} tabNum={1} className={tabName === 1 ? "activeBtn" : ""}/>
            <Clickme tabName="Tab 2" onClick={handleClick} tabNum={2} className={tabName === 2 ? "activeBtn" : ""}/>
            <Clickme tabName="Tab 3" onClick={handleClick} tabNum={3} className={tabName === 3 ? "activeBtn" : ""}/>
          </>

        }> 
          <p>After button content, this means children :D  </p>
        
        </Tabs>
      </section>

      {/* <section className="filler-section">
        {messages.map((value, index)=>{
          return < TabFiller {...value} key={index}/>
        })}
      </section> */}


      <section className="mt-10 p-3 text-center">
        {!saveEdit.isEditing? 
          <span className="m-4">{playerName}</span> : 
          <input type="text" className="m-4 text-slate-900" value={playerName} onChange={(e)=> setplayerName(e.target.value)}/> }
        
        <button className="text-slate-800" onClick={changeName}> {saveEdit.textValue}</button>

      </section>

    
    </div>
  )
}