import { useTheme } from "../../Context/ToggleContext/ToggleContext"


const Fragment = () => {
   const {isOpen} = useTheme()
  return (
    <>
    {!isOpen &&

    <section className="w-[650px] h-[85px] mt-[3.5rem] ml-[6rem] mb-[11rem]">
    <p className="font-mono text-[18px] ">“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p>
    <h5 className="font-bold  text-[18px]">Ada Lovelace</h5>
    </section> }
   </>
 )
}

export default Fragment