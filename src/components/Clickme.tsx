export default function Clickme({tabName, onClick, tabNum, className }: any) {
  

  return (
    <div>
      <button onClick={() => onClick(tabNum)} className={className}>{tabName}</button>
      <p>You clicked {tabName}</p>
    </div>
  )
};