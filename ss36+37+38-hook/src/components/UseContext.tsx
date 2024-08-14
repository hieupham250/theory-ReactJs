import React, { createContext, useState } from "react";
import A from "./A";
export const setUseContext = createContext("");
export default function UseContext() {
  const [name, setName] = useState<string>("mỹ tâm");
  return (
    <div>
      UseContext
      {/*   
       đây là 1 hook
       sau khi 
      */}
      <setUseContext.Provider value={name}>
        <A></A>
      </setUseContext.Provider>
    </div>
  );
}
