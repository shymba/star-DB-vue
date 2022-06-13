<template>
  <div class="header">
    <h3 @click="$router.push('/')">Star DB</h3>
    <nav>
      <ul>
        <!--      <li @click="$router.push('/people')">People</li>-->
        <li
            @click="peopleList"
            :people="people"
        >
          People
        </li>
        <li
            @click="planetsList"
            :planets="planets"
        >
          Planets
        </li>
        <li
            @click="starshipsList"
            :starships="starships"
        >
          Starships
        </li>
        <li @click="$router.push('/addItems')">
          Add Items
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

import SwapiService from "@/swapi-service";

const swapi = new SwapiService();

export default {
  name: "Header",
  data() {
    return {
      people: [],
      planets: [],
      starships: [],
      path: ''
    }
  },
  methods: {
    peopleList() {
      const peopleNames = swapi.getAllPeople();
      peopleNames.then((list) => {
        this.people = list;
        this.path = 'https://starwars-visualguide.com/assets/img/characters/';
        this.$emit('peopleListItems', this.people, this.path);
      })
    },
    planetsList() {
      const planetNames = swapi.getAllPlanets();
      planetNames.then((list) => {
        this.planets = list;
        this.path = 'https://starwars-visualguide.com/assets/img/planets/';
        this.$emit('planetsListItems', this.planets, this.path);
      })
    },
    starshipsList() {
      const starshipsNames = swapi.getAllStarships();
      starshipsNames.then((list) => {
        this.starships = list;
        this.path = 'https://starwars-visualguide.com/assets/img/starships/';
        this.$emit('starshipsListItems', this.starships, this.path);
      })
    },
  }
}
</script>

<style scoped>

  .header {
    display: flex;
    max-width: 1140px;
    color: #fff;
    --nav-load-time: 400ms;
    --nav-link-load-time: 600ms;
    --article-load-delay: 900ms;
  }
  h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    animation: article-load 300ms ease-in var(--article-load-delay);
    animation-fill-mode: forwards;
    transform: translateY(-20px);
    opacity: 0;
  }
  h3:hover {
    color: #00bc8c;
    cursor: pointer;
  }
  .header nav {
    display: flex;
    animation: nav-load var(--nav-load-time) ease-in;
  }
  .header ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  .header nav li:first-child {
    animation-name: nav-first-link-load;
    transform: translateX(-1000%);
  }
  .header nav li:last-child {
    animation-name: nav-last-link-load;
    transform: translateX(1000%);
  }
  .header ul li {
    margin: 0;
    padding: 0.5rem 1rem;
    border-radius: 3px;
    animation-name: nav-link-load;
    animation-duration: var(--nav-link-load-time);
    animation-timing-function: ease-in;
    animation-delay: var(--nav-load-time);
    animation-fill-mode: forwards;
    transform: scale(0);
  }
  .header ul li:hover {
    background-color: #444;
  }
  .header ul li {
    text-decoration: none;
    color: #00bc8c;
    cursor: pointer;
  }
  .header ul li:hover a {
    color: #007053;
  }
  @keyframes nav-load {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes nav-link-load {
    0% {
      transform: scale(0);
    }
    90% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes nav-first-link-load {
    0% {
      transform: translateX(-1000%);
    }
    90% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes nav-last-link-load {
    0% {
      transform: translateX(1000%);
    }
    90% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes article-load {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

</style>