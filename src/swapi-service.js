export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    loading = true;

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
        return this.getResource(`/people/${id}/`);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }
}

// const swapi = new SwapiService();
//
// swapi.getPlanet(1).then((planet) => {
//     console.log(planet.name)
// })
//
// swapi.getAllPlanets().then((pl) => {
//     pl.forEach((pl) => {
//         console.log(pl.name)
//     })
// })
//
// swapi.getAllStarships().then((ships) => {
//     ships.forEach((sh) => {
//         console.log(sh.name)
//     })
// })
//
// swapi.getStarship(3).then((ship) => {
//     console.log(ship.name)
// })
//
// swapi.getAllPeople().then((people) => {
//     people.forEach((item) => {
//         console.log(item.name)
//     })
// })
//
// swapi.getPerson(3).then((person) => {
//     console.log(person.name)
// })