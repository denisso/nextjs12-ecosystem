import React from "react";

export interface IAppContext {
    pages: string[];
    setPages: (pages: string[]) => void;
}

export const Context = React.createContext<IAppContext>({
    pages: [],
    setPages: () => {},
});
