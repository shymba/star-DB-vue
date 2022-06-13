<template>
  <div class="add-item">
    <h3 class="title" @click="$router.push('/')">Star DB</h3>
    <ul>
      <li @click="formVisible">Add Item</li>
    </ul>
  </div>
    <div class="item-form" v-if="show" @click.stop="hideForm">
        <form
            @submit.prevent="submit"
            @click.stop
            class="content-items">
          <select class="form-select" v-model="event.category">
            <option value="" disabled selected hidden>Pick A Category</option>
            <option
                v-for="option in categories"
                :value="option"
                :key="option"
                :selected="option === event.category"
            >
              {{ option }}
            </option>
          </select>
          <SimpleForm
              v-model="event.title"
              label="Title"
              type="text"
          />
          <SimpleForm
              v-model="event.description"
              label="Description"
              type="text"
          />
          <button type="submit" class="btn-add">Add</button>
        </form>
    </div>

</template>

<script>
import SimpleForm from "@/views/SimpleForm";

export default {
  name: "ItemForms",
  components: {
    SimpleForm,
  },
  data() {
    return {
      categories: [
        'people',
        'planets',
        'starships',
      ],
      event: {
        category: '',
        title: '',
        description: '',
      },
      show: false
    }
  },
  methods: {
    hideForm() {
      this.show = false
    },
    formVisible() {
      this.show = true;
    },
    submit(){
      // const {category, title, description} = Object.fromEntries(new FormData(event.target));
      // this.event.title = title;
      // this.event.category = category;
      // this.event.description = description;

      console.log(this.event.category, this.event.title, this.event.description)
    }
  }
}
</script>

<style scoped>
.item-form {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  position: fixed;
}
.content-items {
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 1.5rem;
  color: #00bc8c;
  background: white;
  border-radius: 10px;
  min-height: 100px;
  min-width: 500px;
}
.btn-add {
  width: 150px;
  margin-top: 1rem;
  padding: .5rem;
  border: 1px solid teal;
  background: none;
  color: teal;
  cursor: pointer;
  border-radius: 3px;
  align-self: center;
}

.add-item {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.add-item ul {
  list-style: none;
}
.add-item ul li {
  margin: 0;
  padding: 0.5rem 1rem;
  border-radius: 3px;
}

.add-item ul li:hover {
  background-color: #444;
}
.add-item ul li {
  text-decoration: none;
  color: #00bc8c;
  cursor: pointer;
}
.add-item ul li:hover a {
  color: #007053;
}

.title {
  font-size: 2rem;
  text-align: left;
  font-weight: 500;
  line-height: 1.2;
}
.title:hover {
  color: #00bc8c;
  cursor: pointer;
}
.form-select {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid teal;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
}

</style>