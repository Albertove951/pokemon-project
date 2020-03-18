import React, { Component } from "react";
import PokeStat from "./PokeStat";
import axios from "axios";

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            search: "",        
        }
        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onClick() {
        axios.get(`/game/:${this.state.search}`)
            .then(res => {
                const pokemon = res.data;
                this.setState({ pokemon: pokemon });
                console.log(this.state.pokemon);
            })

            const caughtPokemonStats = (pokemonName) => {
                fetch(`/stats/${pokemonName}`)
                  .then(res => res.json())
                  .then((caughtPokemonData) => {
                    setStats(caughtPokemonData);
                  })
                  .catch(err => console.log(err))
              };
    }
        
        handleChange(event) {
            this.setState({ [event.target.name]: event.target.value })
        }    
        
        render() {
        return (
            <div className="body-container">
                <input type="text" placeholder="search..." name="search" onChange={this.handleChange} value={this.state.search} />
                <button onClick={this.onClick}>search</button>
                <PokeStat/>
            </div>
        )
    }
}