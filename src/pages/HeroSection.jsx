import Navbar from "../components/Navbar"
import bgImage from "../assets/bg.webp"

function heroSection() {
  return (
    <div
      className=" w-screen  sm:h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />\
      <div className="flex flex-row mt-20">
        <div className="h-screen w-1 border-r-[#5618D6] border-r-[1.5px] ml-4 sm:ml-12 md:ml-80" />

        <div
          id="work"
          className="flex flex-col text-4xl md:text-5xl font-font13 px-6 "
        >
          <div>
            <div className="flex flex-row pb-12 items-center gap-3 -mt-4 -ml-[30.5px]">
              <div className="bg-[#5618D6]  h-3 w-3 rounded-full" />
              <h6 className="text-[#988E8B]   font-font1   text-xl  ">
                Start/&gt;
              </h6>
            </div>
            <h2 className="font-semibold  text-white">
              Hi, my name is
              <span className="text-[#5918DF]"> Adarsh Ramgirwar</span>
            </h2>
            <h2 className="font-semibold  mt-6 text-white">i <span className="font-custom17 font-medium">build</span> and develop webApps</h2>
            <h6 className="text-[#988E8B]  font-semibold pt-16 text-xl ">
              Let me show You...
            </h6>
          </div>
          <div className="flex flex-wrap sm:absolute sm:bottom-10   items-center overflow-auto w-full  ">
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/plasticine/100/react.png"
              alt="react"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/96/mongo-db.png"
              alt="mongo-db"
            />
            <img
              width="60"
              height="60"
              className="bg-white rounded-full p-2 overflow-visible"
              src="https://img.icons8.com/ios/500/express-js.png"
              alt="express-js"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/fluency/100/node-js.png"
              alt="node-js"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/fluency/100/c-plus-plus-logo.png"
              alt="c-plus-plus-logo"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/100/javascript--v1.png"
              alt="javascript--v1"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/96/python--v1.png"
              alt="python--v1"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/100/google-firebase-console.png"
              alt="google-firebase-console"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/100/tailwind_css.png"
              alt="tailwind_css"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/fluency/100/css3.png"
              alt="css3"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/100/html-5--v1.png"
              alt="html-5--v1"
            />
            <img
              width="60"
              height="60"
              src="https://img.icons8.com/color/100/git.png"
              alt="git"
            />
            <img
              width="60"
              height="60"
              className="bg-white rounded-full"
              src="https://img.icons8.com/glyph-neue/100/000000/github.png"
              alt="github"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default heroSection
