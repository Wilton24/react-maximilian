export default function Login(){
  return (
    <div className="login-container flex items-center justify-center px-10 w-screen gap-20">

      <div className="left-side flex flex-col w-[396px] h-[496px]">
        <div className="img-container w-[321px] h-[106px]">
          <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" />
        </div>
        <h2 className="w-[386px] h-[56px] text-xl">Connect with friends and the world around you on Facebook.</h2>
      </div>

      <div className="right-side">
        <div className="login-form-container w-[396px] h-[496px] rounded-lg">
          <form className="h-[315px] bg-slate-200 flex flex-col items-center p-3 rounded-lg">
            <input type="text" className="w-[362px] px-[16px] h-[50px] py-[14px] rounded-xl my-[6px] text-slate-900" placeholder="Email or Phone number" />
            <input type="password" className="w-[362px] px-[16px] h-[50px] py-[14px] rounded-xl my-[6px] text-slate-900" placeholder="Password" />
            <button className="w-[362px] px-[16px] h-[50px] py-[14px] rounded-xl my-[6px] text-slate-50 bg-[rgb(8,102,255)] font-bold text-xl flex justify-center items-center">Log In</button>

            <p className="text-[rgb(8,102,255)]">Forgot Password?</p>
            <div className="dash-div w-full border-b border-gray-500 py-3"></div>
            <button className="w-[190px] px-[16px] h-[48px] py-[14px] rounded-xl my-[6px] text-slate-50 bg-[rgb(66,183,42)] flex justify-center items-center">
              Create new Account
            </button>
          
          </form>
        </div>

      </div>

    </div>
  )
}