import bgImage from "../assets/bg.webp"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect, useState, useRef } from "react"
import Spline from "@splinetool/react-spline"
function Home() {
  const [githubRes, setGitHubRes] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/AdarshCodeRealm")
      .then((response) => response.json())
      .then((data) => {
        setGitHubRes(data)
      })
      .catch((error) => console.error("Fetch error:", error))
  }, [])
  const skillsRef = useRef(null)

  return (
    <>
      <div
        className=" w-screen h-screen flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div id="start">
          <Navbar />
        </div>
        <div className="flex flex-row items-center">
        <div
          id="work"
          className="text-4xl md:text-5xl font-font13  sm:mt-[200px] px-16 sm:px-6 lg:mx-[300px]  "
        >
          <h6 className="text-[#988E8B] pb-28 font-font1 mt-12 sm:-mt-20 text-xl  ">
            Start/&gt;
          </h6>
          <h2 className="font-bold  text-white">
            Hi, my name is{" "}
            <span className="text-[#5918DF]">Adarsh Ramgirwar</span>{" "}
          </h2>
          <h2 className="font-bold  mt-6 text-white"> i design and develop </h2>
          <h6 className="text-[#988E8B]  font-semibold pt-16 text-xl ">
            Let me show You...
          </h6>
        </div>
        <div className="flex flex-col justify-center items-center  mr-32 mt-32 h-[400px] w-[400px]">

          <button className="text-white bg-[#5918DF] px-4 py-2 mt-10">Download CV </button>
          <Spline scene="https://prod.spline.design/OnQCfsCn7MMRCbLi/scene.splinecode" className="overflow-visible p-10"  />
        </div>
        
       </div>
      </div>

      {/* section second start ----------------> */}
      <div className="bg-gradient-to-b from-[#1A1527] to-[#171232] w-screen h-[700px]">
        <div className="float-right text-right w-[60%] md:w-[50%]  text-[#221D35] sm:text-[180px] md:text-[200px] text-[100px] font-bold">
          WEB
        </div>
        <div className="h-[100px] px-6  mx-10 lg:mx-[300px]  ">
          <h5 className="text-[#988E8B] text-xl mb-6 pt-4">work/&gt;</h5>
          <h5 className="text-[#988E9F] text-xl font-semibold mb-8 ">
            Selected web,IOT projects...
          </h5>
        </div>
      </div>

      {/* section second start ----------------> */}

      <div
        id="About"
        ref={skillsRef}
        className="bg-[#14121C] pl-4 flex flex-row "
      >
        <div className="   mx-10 lg:mx-[300px]  flex flex-col">
          <div className="mb-10 text-[#847B8B]">About /&gt;</div>
          <div className="flex flex-col">
            <div className=" w-[80%] font-font7  text-white">
              <span className="text-[#5719DF]">class</span>{" "}
              <span className="text-[#EEFF31]">Adarsh_Ramgirwar</span> &#10100;
              <br />
              <span className="text-[#5A5870]">
                // I can, because I did.
                <br />
                // My skills are skyrocketing, expanding exponentially, reaching
                new heights daily.
                <br />
              </span>
              <span className="text-[#5719DF]"> constructor</span>() &#10100;
              <br />
              <span className="text-[#E3244C] ">this</span>.
              <span className="text-[#24C175] brightness-110 ">name</span> ={" "}
              <span className="text-[#24C434] brightness-125 font-font7">
                'Adarsh Ramgirwar'
              </span>
              <br />
              <span className="text-[#E3244C] ">this</span>.
              <span className="text-[#24C175] brightness-110 ">
                dayOfBirthTimestamp
              </span>{" "}
              ={" "}
              <span className="text-[#E39D24] brightness-125 font-font7">
                28/11/2003 06:58 AM
              </span>
              <br />
              <span className="text-[#E3244C] ">this</span>.
              <span className="text-[#24C175] brightness-110 ">email</span> ={" "}
              <span className="text-[#24C434] brightness-125 font-font7">
                'adarshramgirwar1@gmail.com'
              </span>
              <br />
              &#10101;
              <br />
              <span className="text-[#EEFF31]">workExperience</span>() &#10100;
              <br />
              <span className="text-[#2A1BD4] brightness-200">return</span> [
              <br />
              &#10100;{" "}
              <span className="text-[#24C434] brightness-110 ">
                {" "}
                '2020-now' : 'Full-stack Developer/Owner at Pixel Lab'
              </span>
              &#10101;
              <br />
              &#10100;{" "}
              <span className="text-[#24C434] brightness-110 ">
                '2023-now' : 'Solutions Architect at Digitree Group S.A.'
              </span>
              &#10101;
              <br />
              &#10100;{" "}
              <span className="text-[#24C434] brightness-110 ">
                '2017-2023' : 'Full-stack Developer at Digitree Group S.A.'{" "}
              </span>
              &#10101;
              <br />
              &#10100;
              <span className="text-[#24C434] brightness-110 ">
                {" "}
                '2013-2017': 'Full-Stack Designer at Digitree Group S.A.'
              </span>
              &#10101;
              <br />
              &#10100;
              <span className="text-[#24C434] brightness-110 ">
                {" "}
                '2006-now' : 'Full-Stack Designer/developer at Yasio.dev'
              </span>
              &#10101;
              <br />
              ]<br />
              &#10101;
              <br />
              <span className="text-[#EEFF31]">education</span>() &#10100;
              <br />
              <span className="text-[#2A1BD4] brightness-200">return</span> [
              <br />
              &#10100;{" "}
              <span className="text-[#24C434] brightness-110 ">
                '2020-2022': 'Yashwant Junior college,Nanded - HSC
                (mathematics)'
              </span>{" "}
              &#10101;,
              <br />
              &#10100;
              <span className="text-[#24C434] brightness-110 ">
                {" "}
                '2022-NOW': ' Shri Guru Gobind Singhji Institute of Engineering
                and Technology College in Nanded, Maharashtra (B.Tech),
                Electronics and teleCommunication (EXTC)'
              </span>{" "}
              &#10101;
              <br />
              ]<br />
              &#10101;
              <br />
              <span className="text-[#EEFF31]">skills</span>() &#10100;
              <br />
              <span className="text-[#2A1BD4] brightness-200">
                return
              </span> [{" "}
              <span className="text-[#24C434] brightness-110 ">
                'HTML/CSS/JS', 'React', 'Node.js', 'Express.js',
                'MySQL/MongoDB','Git/GitHub', 'Bootstrap/Tailwind', 'JQuery',
                'Python', 'Firebase', 'C++', 'Cordova'
              </span>
              ]<br />
              &#10101;
              <br />
              &#10101;
              <br />
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  )
}

export default Home
