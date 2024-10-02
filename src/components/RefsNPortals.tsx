import { useRef, useState } from "react";
// import ModalDialog from "./modals/ModalDialog";
import ImperativeDialog from "./modals/ImperativeDIalog";

export default function RefsNPortals(){

  // const inputRef = useRef<HTMLInputElement | null>(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState<string | null>('Jamaica');

  const dialogRef = useRef<any>(null);

  // function showModal(){
  //   setIsModalOpen((prev)=> !prev);
  //   console.log('Modal State ', isModalOpen);
  //   inputRef.current?.value && setName(inputRef.current.value);
  // };

  return (
    <>
      {/* {isModalOpen ? 
        <ModalDialog showModal={showModal} name={name}/> : 
      <>
        <label htmlFor="name">Enter your name</label>
        <br />
        <input type="text" ref={inputRef} className="text-slate-900 mr-4" id="name"/>
        <button onClick={showModal}>Submit</button>

      
      </>}         */}
      <button onClick={()=> dialogRef.current?.open()}>Clek mi</button>
      <ImperativeDialog name={name} ref={dialogRef}/>
      <button onClick={()=> dialogRef.current?.sampleTry()}>Child Comp</button>
    </>
    
  )
}