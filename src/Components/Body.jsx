import React, { Component } from "react";
import axios from "axios";

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            pokemonSearch: ''        
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        axios.get(`/game/:pokemon`)
            .then(res => {
                const pokemon = res.data;
                this.setState({ pokemon: pokemon });
            })
        }

        handleChange(event) {
            this.setState({ [event.target.name]: event.target.value })
        }    
        
        render() {
        return (
            <div>
                <input type="text" placeholder="search..." name="pokemonSearch" onChange={this.handleChange} value={this.state.pokemonSearch}/>
                <button>search</button>
            </div>
        )
    }
}