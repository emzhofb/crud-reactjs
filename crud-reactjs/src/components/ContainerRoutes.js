import React from 'react'
import Home from '../pages/Home'
import SiswaIndex from '../pages/siswa/Index'
import SiswaCreate from '../pages/siswa/Create'
import { Route } from 'react-router-dom'

const ContainerRoutes = () => {
    return (
        <div className="container">
            <Route path="/" exact component={ Home } />
            <Route path="/siswa" exact component={ SiswaIndex } />
            <Route path="/siswa/Create" exact component={ SiswaCreate } />
        </div>
    )
}

export default ContainerRoutes