import React from 'react'

export function withAuth<P>(WrappedComponent:React.ComponentType<P>) {
    const  ComponentWithAuth=(props:P)=> {
       //some code
        //if user logged In
           return <WrappedComponent {...props} />      
   }
}
