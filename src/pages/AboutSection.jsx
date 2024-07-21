function AboutSection() {
  return (
    <>
      <div id="About" className="bg-[#14121C]  flex flex-row ">
        <div className="w-1 border-r-[#5618D6] border-r-[1.5px] ml-4 sm:ml-12 md:ml-80" />

        <div className="   mx-10  flex flex-col">
          <div className="flex flex-row pb-12 -ml-[46px] items-center gap-3 mt-4 ">
            <div className="bg-[#5618D6]  h-3 w-3 rounded-full" />
            <h6 className="text-[#988E8B]   font-font1   text-xl  ">
              About /&gt;
            </h6>
          </div>
          <div className="flex flex-col w-[80%]">
            <div className=" font-font7  text-white">
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
    </>
  )
}

export default AboutSection
