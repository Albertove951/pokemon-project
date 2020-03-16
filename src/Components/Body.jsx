import React, { Component } from "react";
import axios from "axios";

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        axios.get(`/game/:pokemon`)
            .then(res => {
                const pokemon = res.data;
                this.setState({ pokemon: pokemon });
            })
        }
        
        render() {
            console.log(this.state.pokemon)
        return (
            <div>
                Hello world
            </div>
        )
    }
}