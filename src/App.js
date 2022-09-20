import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App px-8">
      <nav className="flex sm:justify-center space-x-4 pt-4">
        {[
          ["Home", "/dashboard"],
          ["Team", "/team"],
          ["Projects", "/projects"],
          ["Reports", "/reports"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </nav>
      <div className="flex flex-col md:flex-row">
        <div className="leftSide md:mt-60">
          <h1 className=" text-3xl font-bold pt-8 pb-6 md:text-5xl">
            Learn to code by watching others
          </h1>
          <p className=" pb-8">
            See how experienced developers solve problems in real-time. Watching
            <br />
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="RightSide flex flex-col">
            <article className="shadowed flex items-center justify-center h-20 my-8">
              <p className=" w-8/12">
                <strong>Try it free 7 days </strong> then $20/mo. thereafter
              </p>
            </article>
          <form action="#" className="shadowed bg-white flex justify-center flex-col rounded-xl">
            <div className=" mx-4">
            <input className=" my-3 mt-6 flex py-3 font-semibold rounded-md px-3" type="text" placeholder="First Name" />
            <input className=" my-3 flex py-3 font-semibold rounded-md px-3" type="text" placeholder="Last Name" />
            <input className=" my-3 flex py-3 font-semibold rounded-md px-3" type="text" placeholder="Email Address" />
            <input className=" my-3 flex py-3 font-semibold rounded-md px-3" type="password" placeholder="Password" />

            <button className="claimButton rounded-lg h-16 font-semibold">CLAIM YOUR FREE TRIAL</button>

            <p className="terms-services text-center mx-6 leading-5 bg-slt font-medium">
              By clicking the button, you are agreeing to our Terms and Services
            </p>
            </div>
          </form>
        </div>
      </div>

      <footer className="mt-8 mb-2">
        <p className="attribution">
          Challenge by 
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          > Frontend Mentor
          </a>
          . Coded by <a href="#">pcarette</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
