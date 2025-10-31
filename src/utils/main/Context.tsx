import React, { createContext } from "react";

export const RegisterContext = createContext<{
  registerType: string;
  setRegisterType: React.Dispatch<React.SetStateAction<string>>;
}>(null!);
