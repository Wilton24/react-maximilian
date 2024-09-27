import "./modalDialog.css";



function ModalDialog({name, showModal}: any){
  return (    
    <div className="modal-dialog modal ">
      <div className="modal-content flex flex-col items-center justify-center">
        <h1 className="text-slate-800">This is A modal</h1>  
        <h3 className="text-slate-800">Modal Title</h3>  
        <p className="text-slate-800">You're name is {name}</p>
          <button onClick={showModal}>close</button>
      </div>
    </div>
  )
};


export default ModalDialog;