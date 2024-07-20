import { Toggle } from "./component"

const App = () => {
  return (
    <>
    <section className="w-[650px] h-[85px] mt-[3.5rem] ml-[6rem] mb-[15rem]">
    <p className="font-mono text-[18px] ">“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p>
    <h5 className="font-bold  text-[18px]">Ada Lovelace</h5>
    </section>
    <main className="flex justify-between">
    <section className="ml-[6rem]">
    <h2 className="font-serif mb-[-3.5rem] text-[22px]">GOOD MORNING, IT’S CURRENTLY</h2>
    <h1 className="font-bold  text-[192px]">11:37 <span className="text-[30px]">BST</span></h1>
    <h3 className="font-bold mt-[-2.5rem] text-[32px]">IN LONDON, UK</h3>
    </section>
    <Toggle/>
    </main>
    </>
  )
}

export default App