<template>
  <div class="list">
<!--    <ul v-if="swObjects[0]">-->
<!--      <li-->
<!--          @click="$emit('select', person)"-->
<!--          v-for="person in this.swObjects"-->
<!--          :key="person">-->
<!--        {{ person.name }}-->
<!--      </li>-->
<!--    </ul>-->
    <div class="spinner-list" v-if="!loading">
      <Spinner />
    </div>

    <ul v-else>
      <li v-for="name in people" :key="name">
        {{name.name}}
      </li>
    </ul>

    <div ref="observer" class="observer"></div>

<!--    <div class="page-wrapper">-->
<!--      <div-->
<!--          @click="changePage(pageNumber)"-->
<!--          class="pages"-->
<!--          v-for="pageNumber in totalPages"-->
<!--          :key="pageNumber">-->
<!--        {{ pageNumber }}-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";
import axios from 'axios';

export default {
  name: "ItemList",
  components: {
    Spinner
  },
  data() {
    return {
      people: [],
      totalPages: 0,
      limit: 10,
      page: 1,
      loading: true
    }
  },
  props: {
    swObjects: {
      type: Array,
      required: true
    },
  },
  methods: {
    changePage(pageNum) {
      this.page = pageNum;
      this.getPeople();
    },

    async getPeople() {
      this.loading = false;
      const response = await axios.get('https://swapi.dev/api/people/', {
        params: {
          page: this.page
        }
      });
      this.totalPages = Math.ceil(response.data.count / this.limit);
      this.people = response.data.results;
      this.loading = true
    },
    async getMorePeople(page) {
      // this.loading = false;
      const response = await axios.get('https://swapi.dev/api/people/', {
        params: {
          page: page
        }
      });
      this.totalPages = Math.ceil(response.data.count / this.limit);
      this.people = [...this.people, ...response.data.results];
      console.log(this.people)
      // this.loading = true
    },
  },
  mounted() {
    this.getPeople().then(() => {
      const options = {
        rootMargin: '0px',
        threshold: 1.0
      }
      const callback = (entries) => {
        if(entries[0].isIntersecting) {
          let num = this.page +=1;
          this.getMorePeople(num);
          console.log(entries);
        }
      }
      const observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer)
      console.log(this.$refs.observer);
    });
  }
}
</script>

<style scoped>
.list {
  background-color: #303030;
  flex: 50%;
  margin-right: 15px;
  border: 1px solid #444;
  border-bottom: none;
  border-radius: 5px;
}

.spinner-list {
  padding-top: 5rem;
}

.list ul {
  margin: 0;
  padding: 0;
}
.list li {
  list-style: none;
  text-align: left;
  padding: .75rem 1.25rem;
  border-bottom: 1px solid #444;
}

.list li:last-child {
  -moz-border-radius-bottomleft: 5px;
  -moz-border-radius-bottomright: 5px;
}
.list li:first-child {
  -moz-border-radius-topleft: 5px;
  -moz-border-radius-topright: 5px;
}

.list ul li:hover {
  padding: .75rem 1.25rem;
  cursor: pointer;
  background-color: #444;
}
.page-wrapper {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.pages {
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 6px;
  border-radius: 5px;
  border: 2px solid #494242;
  margin: 2px;
}

.pages:hover {
  background-color: #444;
}

</style>