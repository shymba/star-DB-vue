<template>
  <div class="random-planet">
    <img
        class="planet-image"
        src="https://starwars-visualguide.com/assets/img/planets/3.jpg">
    <div class="list-description">
      <h4>Planet</h4>
      <ul>
        <li>
          <span>Population </span>
          <span>100000</span>
        </li>
        <li>
          <span>Rotation Period </span>
          <span>30000</span>
        </li>
        <li>
          <span>Diameter </span>
          <span>3000</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok) {
      throw new Error(`Could not fetch ${url} + , received${res.status}`)
    }
    return await res.json()
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`)
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`)
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`)
  }
}

const swapi = new SwapiService();

swapi.getPlanet(1).then((planet) => {
  console.log(planet.name)
})

swapi.getAllPlanets().then((pl) => {
  pl.forEach((pl) => {
    console.log(pl.name)
  })
})

swapi.getAllStarships().then((ships) => {
  ships.forEach((sh) => {
    console.log(sh.name)
  })
})

swapi.getStarship(3).then((ship) => {
  console.log(ship.name)
})

swapi.getAllPeople().then((people) => {
  people.forEach((item) => {
    console.log(item.name)
  })
})

swapi.getPerson(3).then((person) => {
  console.log(person.name)
})

export default {
  name: "RandomPlanet"
}
</script>

<style scoped>
  .random-planet {
    display: flex;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #303030;
    border-radius: 5px;
  }
  .random-planet>.planet-image {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    margin-right: 1rem;
  }
  .list-description ul {
    padding-left: 20px;
  }
  .list-description li {
    list-style: none;
    text-align: left;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.5rem;
    text-align: left;
    margin-top: 0;
  }

</style>