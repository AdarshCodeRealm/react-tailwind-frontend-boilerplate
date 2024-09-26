import { Button } from "@/components/ui/button"
import { useState } from "react"
function App() {
  const [num, setNum] = useState(9999)
  return (
    <>
      <div className=" gap-4 h-screen flex-row w-screen justify-center items-center flex">
        <div className="font-bold text-2xl">count</div>

        <div
          onClick={() => {
            setNum(num + 1)
          }}
        >
          <Button>-</Button>
        </div>
        <p className="font-bold text-xl">{num}</p>
        <div
          onClick={() => {
            setNum(num + 1)
          }}
        >
          <Button>+</Button>
        </div>
      </div>
    </>
  )
}

export default App
