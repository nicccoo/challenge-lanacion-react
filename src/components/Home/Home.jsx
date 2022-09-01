import React from 'react'
import Grid from '../Grid/Grid'
import './styles.css'

const Home = () => {
    return (
        <div className="container-home">
            <hr />
            <h1 className='home-title'>Acumulado Grilla</h1>
            <Grid />
        </div>
    )
}

export default Home