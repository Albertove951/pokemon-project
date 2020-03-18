import React, { Component } from "react";

export default class PokeStat extends Component {

    render() {
        return(
            <div className="card poke-container">
                <h3 className="pokemon-name">Pikachu</h3>
                
                <img src="https://tr.rbxcdn.com/19d61db0b07263298eabf0ebb86fb6de/420/420/Decal/Png" alt="" className="poke-img"/>
                
                <p className="text-left">Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.</p>
            </div>
        )
    }
}