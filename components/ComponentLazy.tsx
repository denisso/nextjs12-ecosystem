import React from "react";

const ComponentLazy = React.lazy<any>(() => {
    return new Promise<any>((resolve) => {
        setTimeout(() => resolve(true), 2000);
    }).then(()=>import("./Componetnt"));
});

export default ComponentLazy;
