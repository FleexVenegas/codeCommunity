import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from "react";
import { ParsedQuestion } from "../interface/interface";

// Definir el tipo para el estado del contexto
interface StateContextType{
  requestQuestion: boolean
  setRequestQuestion: Dispatch<SetStateAction<boolean>>
  questionData: ParsedQuestion[]
  setQuestionData: Dispatch<SetStateAction<ParsedQuestion[]>>
}

const StateContext = createContext<StateContextType | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [requestQuestion, setRequestQuestion] = useState<boolean>(false)
  const [questionData, setQuestionData] = useState<ParsedQuestion[]>([]);

  return (
    <StateContext.Provider
      value={{
        requestQuestion,
        setRequestQuestion,
        questionData,
        setQuestionData
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextType => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useContext debe ser utilizado dentro de un ContextProvider");
  }
  return context;
};
