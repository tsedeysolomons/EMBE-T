/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

type AppContextType = {
  modalTitle: string;
  setModalTitle: (title: string) => void;
};

export const AppContext = createContext<AppContextType>({
  modalTitle: "Login",
  setModalTitle: () => {},
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalTitle, setModalTitle] = useState<string>("Login");

  return (
    <>
      <AppContext.Provider value={{ modalTitle, setModalTitle }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppProvider;
