import React, { Component } from "react";
import { ANIMALS } from "petfinder-client";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

export default class Search extends Component {
  state = {
    location: "",
    animal: ""
  };

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleAnimalChange = event => {
    this.setState({
      animal: event.target.value
    });
  };

  render() {
    return (
      <div className="zip-search">
        <form>
          <label htmlFor="location">
            Location
            <input
              id="location"
              onChange={this.handleLocationChange}
              value={this.state.location}
              placeholder="Location"
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={this.state.animal}
              onChange={this.handleAnimalChange}
              onBlur={this.handleAnimalChange}
            >
              <option />
              {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
