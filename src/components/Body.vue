<template>
  <div>
    <ul class="row w-100 px-5 mt-5">
      <li
        class="col-12 col-md-6 col-xl-4 mb-3"
        v-for="book in books"
        :key="book.ISBN"
        :title="book.author"
      >
        <div class="w-100 border rounded border-success min">
          <div class="w-100">
            <img
              :src="book.image"
              alt=""
              class="w-100 border-bottom border-success"
            />
          </div>
          <div class="p-4">
            <div class="row justify-content-between">
              <h5 class="text-start col-12 col-lg mb-2">{{ book.category }}</h5>
              <h5 class="col-12 col-lg mb-2">{{ book.author }}</h5>
            </div>
            <div class="row justify-content-between mb-2">
              <h5 :class="getClass(book.pages)">{{ book.pages }}</h5>
              <h5 class="col-12 col-md mb-2">
                {{ booksStore.formatCurrency(book.price) }}
              </h5>
            </div>
            <div class="row justify-content-between">
              <h5 class="text-start col-12 col-lg mb-2">{{ book.ISBN }}</h5>
              <button
                v-if="!booksStore.isInWichList(book)"
                class="btn btn-outline-success my-2 my-sm-0 col-12 col-lg"
                @click="booksStore.addtowishlist(book)"
              >
                Add to wich list
              </button>
              <button
                class="btn btn-success my-2 my-sm-0 col-12 col-lg"
                v-else
                @click="booksStore.removefromwishlist(book)"
              >
                Remove from wich list
              </button>
              <router-link class="mt-2 text-success btn  my-2 my-sm-0 col-12 col-lg "
                :to="{ name: 'bookDetails', params: { id: book.ISBN } }"
              >
                details
              </router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useBooksStore } from "../store/index";

export default {
  name: "Body",
  async created() {
    this.books = await this.booksStore.fetchBooks();
    this.wichlist = await this.booksStore.fetchWichlist();
    console.log(this.book);
  },
  data: () => ({
    books: [],
    booksStore: useBooksStore(),
    wichlist: [],
  }),
  methods: {
    getClass(pagesNumber) {
      if (pagesNumber < 50) {
        return "less text-start col-12 col-lg mb-2";
      }
      return "more text-start col-12 col-lg mb-2";
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
.less {
  color: rgb(0, 84, 103);
}
.more {
  color: rgb(78, 42, 0);
}
.navbar-brand {
  cursor: pointer;
}
.image-height {
  height: 50px;
}
.line-height {
  line-height: 50px;
}
.min {
  min-height: 500px;
}
</style>
