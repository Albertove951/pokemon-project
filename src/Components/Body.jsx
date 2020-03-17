import React, { Component } from "react";
import axios from "axios";

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            pokemonSearch: ''        
        }
        this.onClick = this.onCLick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onCLick() {
        axios.get(`/game/:pokemonSearch`)
            .then(res => {
                const pokemon = res.data;
                this.setState({ pokemon: pokemon });
                console.log(this.state.pokemon)
            })
        }
        
        handleChange(event) {
            this.setState({ [event.target.name]: event.target.value })
        }    
        
        render() {
        return (
            <div>
                <input type="text" placeholder="search..." name="pokemonSearch" onChange={this.handleChange} value={this.state.pokemonSearch}/>
                <button onClick={this.onClick}>search</button>
            </div>
        )
    }
}