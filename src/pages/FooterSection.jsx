import { useEffect, useState } from "react"

function Footer() {
  const [githubRes, setGitHubRes] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/AdarshCodeRealm")
      .then((response) => response.json())
      .then((data) => {
        setGitHubRes(data)
      })
      .catch((error) => console.error("Fetch error:", error))
  }, [])
  return (
    <div id="footer" className="bg-[#0E0D10] flex flex-row ">
      <div className="w-1 border-r-[#5618D6] border-r-[1.5px] ml-4 sm:ml-12 md:ml-80" />

      <div  className="  fill-[#5918DF] text-[#5918DF]">
        <div className="mt-3 flex flex-col ">
          <div className="flex flex-row gap-5 -ml-[7px]  items-center">
            <div className="h-3 w-3 bg-[#5918DF] border-2 border-[#5918DF] rounded-full"></div>
            <h1 className=" text-lg -ml-4 font-light text-[#746C79]">Contact /&gt;
            </h1>
          </div>

          <div className=" flex flex-col mt-20 justify-between mx-10 ">
            <h2 className="text-white text-2xl">Find me on:</h2>
            <div className="flex  gap-4  md:flex-row flex-col mb-10  font-normal text-lg ">
              <a
                className="flex  items-center gap-2 mt-2 text-[#5918DF] "
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/adarsh-ramgirwar-18a77222a/"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  className="fill-[#5918DF]"
                >
                  <path d="M5 3c0 1.062-0.71 1.976-2.001 1.976-1.215 0-1.999-0.862-1.999-1.924 0-1.090 0.76-2.052 2-2.052s1.976 0.91 2 2zM1 19v-13h4v13h-4z"></path>
                  <path d="M7 10.444c0-1.545-0.051-2.836-0.102-3.951h3.594l0.178 1.723h0.076c0.506-0.811 1.746-2 3.822-2 2.532 0 4.432 1.695 4.432 5.342v7.442h-4v-6.861c0-1.594-0.607-2.81-2-2.81-1.062 0-1.594 0.86-1.873 1.569-0.102 0.254-0.127 0.608-0.127 0.963v7.139h-4v-8.556z"></path>
                </svg>
                <h1>{githubRes?.name}</h1>
              </a>
              <a
                className="flex items-center gap-2 mt-2 text-[#5918DF] "
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/YasiOnFire"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  className="fill-[#5918DF]"
                >
                  <path d="M17.316 6.246c0.008 0.162 0.011 0.326 0.011 0.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-0.625-5.787-1.697 0.296 0.035 0.596 0.053 0.9 0.053 1.77 0 3.397-0.604 4.688-1.615-1.651-0.031-3.046-1.121-3.526-2.621 0.23 0.043 0.467 0.066 0.71 0.066 0.345 0 0.679-0.045 0.995-0.131-1.727-0.348-3.028-1.873-3.028-3.703 0-0.016 0-0.031 0-0.047 0.509 0.283 1.092 0.453 1.71 0.473-1.013-0.678-1.68-1.832-1.68-3.143 0-0.691 0.186-1.34 0.512-1.898 1.861 2.285 4.644 3.787 7.781 3.945-0.064-0.277-0.097-0.564-0.097-0.861 0-2.084 1.689-3.773 3.774-3.773 1.086 0 2.067 0.457 2.756 1.191 0.859-0.17 1.667-0.484 2.397-0.916-0.282 0.881-0.881 1.621-1.66 2.088 0.764-0.092 1.49-0.293 2.168-0.594-0.506 0.758-1.146 1.422-1.884 1.953z"></path>
                </svg>
                <h1>
                  {githubRes?.twitter_username
                    ? githubRes?.twitter_username
                    : githubRes?.name}
                </h1>
              </a>
              <a
                className="flex gap-2 items-center mt-2 text-[#5918DF] "
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AdarshCodeRealm"
              >
                <svg
                  className="fill-[#5918DF]"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                >
                  <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
                </svg>
                <h1>{githubRes?.login}</h1>
              </a>
              <a
                className="flex gap-2 mt-2 items-center text-[#5918DF] "
                target="_blank"
                rel="noreferrer"
                href="https://codepen.io/Yasio"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                  className="fill-[#5918DF]"
                >
                  <path d="M29.555 11.501l-14-9.333c-0.336-0.224-0.774-0.224-1.109 0l-14 9.333c-0.278 0.185-0.445 0.498-0.445 0.832v9.333c0 0.334 0.167 0.647 0.445 0.832l14 9.333c0.168 0.112 0.361 0.168 0.555 0.168s0.387-0.056 0.555-0.168l14-9.333c0.278-0.185 0.445-0.498 0.445-0.832v-9.333c0-0.334-0.167-0.647-0.445-0.832zM15 20.465l-5.197-3.465 5.197-3.465 5.197 3.465-5.197 3.465zM16 11.798v-6.93l11.197 7.465-5.197 3.465-6-4zM14 11.798l-6 4-5.197-3.465 11.197-7.465v6.93zM6.197 17l-4.197 2.798v-5.596l4.197 2.798zM8 18.202l6 4v6.93l-11.197-7.465 5.197-3.465zM16 22.202l6-4 5.197 3.465-11.197 7.465v-6.93zM23.803 17l4.197-2.798v5.596l-4.197-2.798z"></path>
                </svg>
                adarshcode
              </a>
            </div>
          <button className="transition ease-in-out delay-150 w-1/2  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-00  text-xl font-semibold mt-2 px-4 py-2 mb-32 bg-[#5918DF] hover:bg-gradient-to-r from-orange-700 to-orange-400 text-white rounded-3xl">
            GET IN TOUCH<div className="btn2"></div>
          </button>
          <span className="flex items-center  text-[#7F7685] fill-[#7F7685]">
            © Made with &nbsp;
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              className="inline-block mr-2 fill-[#5918DF]"
            >
              <path
                fill="#988e9f"
                d="M5.719 14.75c-0.236 0-0.474-0.083-0.664-0.252l-5.060-4.498 5.341-4.748c0.412-0.365 1.044-0.33 1.411 0.083s0.33 1.045-0.083 1.412l-3.659 3.253 3.378 3.002c0.413 0.367 0.45 0.999 0.083 1.412-0.197 0.223-0.472 0.336-0.747 0.336zM14.664 14.748l5.341-4.748-5.060-4.498c-0.413-0.367-1.045-0.33-1.411 0.083s-0.33 1.045 0.083 1.412l3.378 3.003-3.659 3.252c-0.413 0.367-0.45 0.999-0.083 1.412 0.197 0.223 0.472 0.336 0.747 0.336 0.236 0 0.474-0.083 0.664-0.252zM9.986 16.165l2-12c0.091-0.545-0.277-1.060-0.822-1.151-0.547-0.092-1.061 0.277-1.15 0.822l-2 12c-0.091 0.545 0.277 1.060 0.822 1.151 0.056 0.009 0.11 0.013 0.165 0.013 0.48 0 0.904-0.347 0.985-0.835z"
              ></path>
            </svg>
            by {githubRes.login}. Circa 2024.
          </span>
          </div>

        </div>
      </div>
      {/* self intro-------------------------->>> */}
      <div className=" absolute right-0 flex flex-col my-20 mr-10 items-center mx-4  rounded-full text-center text-white  w-100">
        <div
          className="h-28 w-28 rounded-full bg-black"
          style={{
            backgroundImage: `url(${githubRes.avatar_url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          
        </div>
        <span>Adarsh Ramgirwar</span>
        <span>Full Stack Developer</span>
        <span className="inline-flex gap-3 items-center">
          
          <svg
            className="fill-white"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 32 32"
          >
            <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
          </svg>
          Followers : {githubRes.followers}
        </span>
        <span> {githubRes.company}</span>
        <span> Maharashtra</span>
      </div>
    </div>
  )
}

export default Footer
