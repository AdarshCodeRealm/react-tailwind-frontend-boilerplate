// src\App.jsx
import Home from "./pages/Home"
import { useState, useEffect } from "react"

function App() {
  const [totalHeight, setTotalHeight] = useState(0)

  useEffect(() => {
    function updateHeight() {
      setTotalHeight(document.documentElement.scrollHeight)
    }
    updateHeight()
    window.addEventListener("resize", updateHeight)
    return () => window.removeEventListener("resize", updateHeight)
  }, [])

  return (
    <>
      <div
        id="verticalLine"
        className=" absolute w-1 ml-10 lg:ml-[19%]  border-r-2 border-r-[#5618D6] top-[130px] sm:top-[200px]"
        style={{ height: `${totalHeight - 250}px` }}
      >
        <div className="border-[#5618D6] border-2 h-2 justify-center flex  -ml-[1px] w-2 rounded-full -mt-2"></div>
        <div className="h-4 w-4 hover:h-5  hover:w-5 hover:-ml-2 -ml-1 mt-80">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 18 30"
          >
            <path
              fill="#988E9F"
              d="M9,30c-5,0-9-4.2-9-9.4V9.4C0,4.2,4,0,9,0s9,4.2,9,9.4v11.3C18,25.8,14,30,9,30z M16.2,9.4
	c0-4.2-3.2-7.5-7.2-7.5S1.8,5.3,1.8,9.4v11.3c0,4.1,3.2,7.5,7.2,7.5s7.2-3.4,7.2-7.5V9.4z M9.2,12.8c-0.5,0-0.9-0.4-0.9-0.9V7.1
	c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9v4.7C10.1,12.3,9.7,12.8,9.2,12.8z"
              className="st0"
            ></path>
          </svg>
        </div>
      </div>

      <Home />
    </>
  )
}

export default App
