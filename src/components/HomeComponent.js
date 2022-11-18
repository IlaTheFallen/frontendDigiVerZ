import React, {useContext, useEffect} from 'react';
import NavBarComponent from './NavBarComponent';
import ThingsContext from '../thingsContext';

export default function HomeComponent() {

  const {auth} = useContext(ThingsContext)

  useEffect(()=>{
    console.log(auth)
  },[])

  return (
    <>
        <NavBarComponent></NavBarComponent>
        <div>HomeComponent</div>
    </>
  )
}
