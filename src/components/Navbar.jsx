import "./style.css"
import {  useState } from "react"
import { Link } from "react-scroll"

function Navbar() {
  const [menu, setMenu] = useState(false)
  
  return (
    <>
      <div className="flex justify-between items-center py-2 px-1 font-font5 md:px-12">
        <a className="text-purple-custom text-4xl flex  items-center font-semibold">
          &lt;
          <span className="text-white px-1  text-4xl font-semibold">
            ADARSH
          </span>
          /&gt;
        </a>

        {menu ? (
          <div onClick={() => setMenu(!menu)} className="mr-3 sm:hidden mt-2">
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 50 50"
            >
              <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z"></path>
            </svg>
          </div>
        ) : (
          <div onClick={() => setMenu(!menu)} className="sm:hidden mr-3 mt-2">
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 50 50"
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          </div>
        )}
        <ul className=" gap-4 text-2xl font-bold   hidden sm:flex text-[#988E9F]">
          <li>
            <Link to="start" spy={true} smooth={true} >
            <span className="hover:text-white">Start</span>
            <span className="text-[#BFBEC1]">/&gt;</span>
            </Link >
          </li>
          <li>
          <Link to="work" spy={true} smooth={true} >
            <span className="hover:text-white">Work</span>
            <span className="text-[#BFBEC1]">/&gt;</span>
            </Link>
          </li>
          <li>
            <Link to="About" spy={true} smooth={true}>
            <span className="hover:text-white">About</span>
            <span className="text-[#BFBEC1]">/&gt;</span>
            </Link>
          </li>
        
          <li>
            <Link to="footer" spy={true} smooth={true} >
            <span className="hover:text-white">Contact</span>
            <span className="text-[#BFBEC1]">/&gt;</span>
            </Link>
          </li>
        </ul>
      </div>
      {menu ? (
        <ul className=" gap-4 text-xl font-bold  sm:hidden items-center flex flex-col  text-[#BFBEC1]">
          <div className="border-b-2">
          <Link to="start" spy={true} smooth={true} >
            <span className="hover:text-white">Start</span>{" "}
            <span className="text-[#BFBEC1]">/&gt;</span>
            </Link>
          </div>
          <li>
          <Link to="work" spy={true} smooth={true} >
            <span className="hover:text-white">work</span>{" "}
            <span className="text-[#BFBEC1]">/&gt;</span>
            </Link>
          </li>
         
          <li>
          <Link to="About" spy={true} smooth={true}>
            <span className="hover:text-white">About</span>{" "}
            <span className="text-[#BFBEC1]">/&gt;</span>
          </Link> 
          </li>
          <li>
            <Link to="footer" spy={true} smooth={true}>
            <span className="hover:text-white">Contact</span>{" "}
            <span className="text-[#BFBEC1]">/&gt;</span>
            </Link>
          </li>
        </ul>
      ) : null}
    </>
  )
}

export default Navbar
