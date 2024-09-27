import { useRef, useState } from "react";
import ModalDialog from "./modals/ModalDialog";
import Dialog from "./modals/Dialog";

export default function RefsNPortals(){

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [name, setName] = useState<string | null>('');

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  function showModal(){
    setIsModalOpen((prev)=> !prev);
    console.log('Modal State ', isModalOpen);
    inputRef.current?.value && setName(inputRef.current.value)
  };

  return (
    <>
      {isModalOpen ? 
        <ModalDialog showModal={showModal} name={name}/> : 
      <>
        <label htmlFor="name">Enter your name</label>
        <br />
        <input type="text" ref={inputRef} className="text-slate-900 mr-4" id="name"/>
        <button onClick={showModal}>Submit</button>

        
        <button onClick={()=> dialogRef.current?.showModal()}>open Dialog</button>
        <Dialog ref={dialogRef}/>
      </>}        
    </>
    
  )
}