import React from "react"
export const Context = React.createContext({
    modal: true,
    setModal: (value: boolean) => {},
});