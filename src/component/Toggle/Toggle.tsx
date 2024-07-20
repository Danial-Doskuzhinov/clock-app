import  { useState } from 'react';

const ToggleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4">
      <button 
        onClick={toggleOpen} 
        className="flex items-center justify-between bg-white  text-black rounded-[20px] w-[156px] h-[56px] "
      >
        <span>{isOpen ? <>Less</>:<>More</>}</span>
        <span className="ml-2 transform transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">Current Timezone</p>
              <p className="text-lg font-semibold">Europe/London</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Day of the Week</p>
              <p className="text-lg font-semibold">5</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <p className="text-sm text-gray-500">Day of the Year</p>
              <p className="text-lg font-semibold">295</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Week Number</p>
              <p className="text-lg font-semibold">42</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleComponent;
