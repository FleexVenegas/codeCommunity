import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from "react";
import { ParsedQuestion, ProfileApi } from "../interface/interface";

// Definir el tipo para el estado del contexto
interface StateContextType{
  requestQuestion: boolean
  setRequestQuestion: Dispatch<SetStateAction<boolean>>
  reqUser: boolean
  setReqUser: Dispatch<SetStateAction<boolean>>
  questionTotal: number
  setQuestionTotal: Dispatch<SetStateAction<number>>
  totalResponse: number
  setTotalResponse: Dispatch<SetStateAction<number>>
  questionData: ParsedQuestion[]
  setQuestionData: Dispatch<SetStateAction<ParsedQuestion[]>>
  user: ProfileApi | undefined
  setUser: Dispatch<SetStateAction<ProfileApi | undefined>>
}

const StateContext = createContext<StateContextType | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [requestQuestion, setRequestQuestion] = useState<boolean>(false)
  const [reqUser, setReqUser] = useState<boolean>(false)
  const [questionTotal, setQuestionTotal] = useState<number>(0)
  const [totalResponse, setTotalResponse] = useState<number>(0)
  const [questionData, setQuestionData] = useState<ParsedQuestion[]>([]);
  const [user, setUser] = useState<ProfileApi>()


  return (
    <StateContext.Provider
      value={{
        requestQuestion,
        setRequestQuestion,
        questionData,
        setQuestionData,
        user,
        setUser,
        reqUser,
        setReqUser,
        questionTotal,
        setQuestionTotal,
        totalResponse, 
        setTotalResponse
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
