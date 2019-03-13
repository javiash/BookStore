import React from 'react'
import { connect } from 'react-redux';
// import { } from '../store/actions/actions'
import Axios from 'axios';



class Main extends React.Component {


    
    render() {
        return (
            <div>
                <h1>Hola Titanes de nuevo!!!</h1>

                

            </div>
        )
    }



}


function mapStateToProps(state) {
    return {
        // Lo dejo vacio para que cada uno lo use como quiera
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // Lo dejo vacio para que cada uno lo use como quiera
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)