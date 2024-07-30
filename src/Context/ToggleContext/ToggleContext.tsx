import { createContext, ReactNode, useContext, useState , } from "react"
interface isOpenProps {
    isOpen:boolean;
    toggleOpen:()=>void
}
const Context =createContext<isOpenProps | undefined>(undefined)

const ToggleContext = ({children}:{children:ReactNode}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleOpen = () =>{
        setIsOpen(prev => !prev)
    }
  return (
    <>
    <Context.Provider value={{isOpen , toggleOpen}}>
        {children }
    </Context.Provider>
    </>
  )
}

export default ToggleContext;
export const useTheme = (): isOpenProps => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};