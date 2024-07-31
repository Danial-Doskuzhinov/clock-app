import  { useState } from 'react';
import { useTheme } from "../../Context/ToggleContext/ToggleContext";
import data from '../../api/data.json';
import Next from '../../../public/restart.svg';

const Fragment = () => {
  const { isOpen } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.phrases.length);
  };

  return (
    <>
      {!isOpen && (
        <section className="w-[650px] h-[85px] pt-[2rem] ml-[6rem] mb-[11rem]">
          <p className="font-mono text-[18px]">“{data.phrases[currentIndex].quote}”</p>
          <h5 className="font-bold text-[18px]">{data.phrases[currentIndex].author}</h5>
          <img className='ml-[40rem] cursor-pointer' onClick={handleNextClick} src={Next} alt="next" />
        </section>
      )}
    </>
  );
};

export default Fragment;
