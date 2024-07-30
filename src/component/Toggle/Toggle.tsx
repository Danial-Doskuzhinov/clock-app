import { useTheme } from '../../Context/ToggleContext/ToggleContext';

const ToggleComponent = () => {
  const {isOpen , toggleOpen} = useTheme();

  return (
    <div className="mr-[20rem] mt-[18rem]">
      <button 
        onClick={toggleOpen} 
        className="flex items-center justify-between bg-white  text-black rounded-[20px] w-[156px] h-[56px] "
      >
        <span className='pl-8 text-[20px] font-bold '>{isOpen ? <>Less</>:<>More</>}</span>
        <span className="border bg-[#303030] text-white rounded-[40px] w-[40px] h-[40px] mr-[1.5rem] pt-2 transform transition-transform duration-300">
          {isOpen ?<>👆🏻</>:<>👇🏻</>}
        </span>
      </button>
      
    </div>
  );
};

export default ToggleComponent;
