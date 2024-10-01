import { forwardRef, Ref, useImperativeHandle, useRef } from "react";

// type DialogRefType = {
//   open: () => void;
//   close:() => void;
// };



const ImperativeDialog = ({name}: any, ref: Ref<any| null>)=>{
  const dialog = useRef<any>(null);

  useImperativeHandle(ref, ()=>{
    return {
      open: ()=>{
        dialog.current?.showModal();
        
      },
      close: ()=>{
        console.log('Close modal')
      }
    }
  });

  return (
    <dialog ref={dialog}>
      <div className="flex flex-col items-center justify-center gap-3">
        <h1>This is an Imperative Dialog</h1>
        <h2>We used useImperativeHandle hook for this </h2>
        <p>Your name is {name}</p>
        <form method="dialog">
          <button>X</button>
        </form>
      </div>

      
    </dialog>

  )
};


export default forwardRef(ImperativeDialog);