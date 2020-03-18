import React, { Component } from "react";

export default class PokeStat extends Component {

    render() {
        return(
            <div className="card poke-container">
                <p>Pikachu</p>
                
                <img src="https://tr.rbxcdn.com/19d61db0b07263298eabf0ebb86fb6de/420/420/Decal/Png" alt="" height="200px" width="200px" className="poke-img"/>
                
                <p>Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.</p>
            </div>
        )
    }
}