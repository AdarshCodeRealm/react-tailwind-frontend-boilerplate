import { useEffect, useState } from "react"
import "../index.css"
function ShowcaseSection() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.github.com/users/AdarshCodeRealm/repos"
      )
      const jsonData = await response.json()
      setData(jsonData?.[3])
    }
    fetchData()
  }, [])
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-[#1A1527] to-[#171232] w-screen ">
        <div className="flex flex-row">
          <div className=" w-1  border-r-[#5618D6] border-r-[1.5px] ml-4 sm:ml-12 md:ml-80" />
          <div className="absolute right-0 text-right text-[#221D35] sm:text-[180px] md:text-[200px] text-[100px] font-bold">
            WEB
          </div>
          <div className="flex flex-col relative  pt-10 ">
            <div className="flex flex-row gap-3 items-center -ml-[6.5px]">
              <div className="bg-[#5618D6] h-3 w-3 rounded-full" />
              <h6 className="text-[#988E8B]   font-font1   text-xl  ">
                Work/&gt;
              </h6>
            </div>
            <h5 className="text-[#988E9F] text-xl font-semibold mt-6 ml-10">
              Selected web projects...
            </h5>
            <div className="flex flex-wrap gap-3 p-10">
              {/* card 1  */}
              <div className="card ">
                <div className="card-inner">
                  <div
                    className="card-front bg-black "
                    style={{
                      backgroundImage: `url("https://img-c.udemycdn.com/course/750x422/4527016_a992_5.jpg")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <h1 className="font-font8  text-3xl text-black  ">
                      {data.name}
                    </h1>
                  </div>
                  <div className="card-back bg-white flex flex-col  gap-3 text-black ">
                    {/* <img className="absolute -z-10 top-0 right-0 rounded-xl" src="https://plus.unsplash.com/premium_photo-1710324884987-7c67e9986713?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZW1lJTIwdmlkZW8lMjBhcHAlMjBwbGFpbmUlMjBiZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" /> */}
                    <div className="flex flex-row justify-center z-20 items-center gap-3">
                      <img
                        className="h-8 shadow-lg shadow-black w-8 rounded-full"
                        src={data?.owner?.avatar_url}
                        alt=""
                      />
                      <span className="text-lg">{data?.owner?.login}</span>
                    </div>
                    <p className="text-sm px-3 font-font14 brightness-200">
                      {data?.description}
                    </p>
                    <button className="flex flex-row justify-center bg-black hover:bg-gradient-to-t from-[#5618D6] to-[#5918DF]  text-white px-3 py-2 rounded-lg z-20 items-center gap-3">
                      <a className="flex flex-row gap-3" target="_blank" href="https://github.com/AdarshCodeRealm/streamMedia"><svg
                        className="fill-white"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 32 32"
                      >
                        <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
                      </svg>
                      <span className="text-sm font-font5">
                        VISIT REPOSITORY
                      </span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              {/* card 2 */}
             
              {/* card 3 */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowcaseSection
