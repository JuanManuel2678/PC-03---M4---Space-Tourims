import { Routes, Route } from 'react-router'
import { Home } from '../components/Pages/Home'
import { Destination } from'../components/Pages/Destination'
import { Crew } from '../components/Pages/Crew'
import { Technology } from '../components/Pages/Technology'


export const Enrutador = () => {

  return (

    <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/page/00 HOME' element={<Home />}/>
        <Route path='/page/01 DESTINATION' element={<Destination />}/>
        <Route path='/page/02 CREW' element={<Crew />}/>
        <Route path='/page/03 TECHNOLOGY' element={<Technology />}/>
    </Routes>

  )
}


