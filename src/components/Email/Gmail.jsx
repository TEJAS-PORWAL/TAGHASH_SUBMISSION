import React from 'react'
import Header from './Header';
import './index.css';
import Main from './Main';
// import Email from './Email'
export default function Gmail() {
  return (<>
 {/* header starts */}
  <Header/>
   {/* header ends */}

{/* sidebar  and main bodystarts */}
    <Main/>
{/* //sidebar and main body ends */}


{/* to view simplified Email view uncomment the below line and comment out the above line */}
{/* <Email/> */}
  </>

  )
}
