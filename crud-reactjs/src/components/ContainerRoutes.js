import React from 'react'
import Home from '../pages/Home'
import Siswa from '../pages/Siswa'
import { Route } from 'react-router-dom'

const ContainerRoutes = () => {
    return (
        <div className="container">
            <Route path="/" exact component={ Home } />
            <Route path="/siswa" exact component={ Siswa } />
        </div>
    )
}

export default ContainerRoutes