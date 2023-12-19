import React, { useState } from 'react'
import Menu from '../../components/Menu'
import './style.css'
import SignUp from '../../components/SignUp'
import RowList from '../../components/RowList'

function Home() {
    const [sign, setSign] = useState(true)
  return (
    <div className='container-all'>
        <Menu setFunction={setSign}/>
        {sign ? (
            <SignUp/>
        ) : (
            <RowList/>
        )}
        
    </div>
  )
}

export default Home