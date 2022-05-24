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

    _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    // const idRegExp = /([a-z]*\/[0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results
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
