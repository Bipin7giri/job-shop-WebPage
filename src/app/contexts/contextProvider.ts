import React from "react";

import AuthProvider from "./auth";
import LanguageProvider from "./language";
interface Props {
  children: React.ReactNode;
}
const ContextProvider: React.FC<Props> = ({ children }) => (
  <AuthProvider>
    <LanguageProvider>{children}</LanguageProvider>
  </AuthProvider>
);

export default ContextProvider;
