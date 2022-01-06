import React from 'react'

export function withAuth<P>(WrappedComponent:React.ComponentType<P>) {
    const  ComponentWithAuth=(props:P)=> {
       
       
           return <WrappedComponent {...props} />
       
       
       return null;
   }
}