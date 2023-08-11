import { ReactNode, createContext, useState } from 'react';
interface LayoutContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const LayoutContext = createContext<LayoutContextType>({
  open: true,
  setOpen: () => {},
});
interface LayoutContextProviderProps {
  children: ReactNode;
}
export const LayoutContextProvider = ({
  children,
}: LayoutContextProviderProps) => {
  const [open, setOpen] = useState(true);
  return (
    <LayoutContext.Provider value={{ open, setOpen }}>
      {children}
    </LayoutContext.Provider>
  );
};
