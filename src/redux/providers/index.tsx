"use client"

import { store } from "../store"
import { Provider } from "react-redux"

/* define a ReactNode using a Provider which accepts the 'store' so that all children components under this provoder will use the Redux Infrastructure  */
/* HOC object */
export function Providers({children}: {children:React.ReactNode}){
    return (
        <Provider store={store}>{children}</Provider>
    );
}