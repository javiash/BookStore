import React from 'react'
import { connect } from 'react-redux';
import { setSearch, setBookFund } from '../store/actions/actions'
import Axios from 'axios';



class Main extends React.Component {


    handleChange(e) {
        this.props.setSearch(e.target.value)
    }

    componentDidUpdate(prevState) {
        if (this.state.search == prevState.search)
        Axios.get(`http://www.omdbapi.com/?apikey=8c8bfbdc&s=${this.props.search}`)
            .then(books => {
                console.log(books)
                this.props.setBookFound(books)
            }

            )
    }


    render() {
        return (
            <div>
                <h1>Hola Titanes de nuevo!!!</h1>

                <input onChange={this.handleChange.bind(this)} placeholder='buscame' />
                <p>{this.props.search}</p>

            </div>
        )
    }



}


function mapStateToProps(state) {
    return {
        search: state.search,
        find: state.find
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSearch: (text) => dispatch(setSearch(text)),
        setBookFound: (ArrayBOoks) => dispatch(setBookFound(ArrayBOoks))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)