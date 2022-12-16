import React from "react";

type TContext = { data: string; setData: (arg: string) => void };

export const Context = React.createContext<TContext>({
    data: "",
    setData: () => undefined,
});
