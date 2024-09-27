import { forwardRef } from "react"


const Dialog = forwardRef<HTMLDialogElement>((props, ref)=>{
  return (
    <dialog ref={ref}>
      <h1>This is a dialog modal</h1>
          <form method="dialog" className="text-center">
            <button>X</button>
          </form>
      </dialog>
  )
})


export default Dialog;