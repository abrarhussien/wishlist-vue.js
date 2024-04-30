<template>
  <div class="mt-3">
    <h1 v-if="notfound" class="m-auto w-100 text-center mt-4 text-success">book not found!</h1>
    <div v-else>
      ISBN:{{ book?.ISBN }} <br>
      name:{{ book?.name }} <br>
      category:{{
        book?.category
      }} <br>
      author:{{ book?.author }}
    </div>
  </div>
</template>

<script>
import { useBooksStore } from "../store/index";

export default {
  name: "Body",
  async created() {
    await this.booksStore.fetchBooks();
    this.book = this.booksStore.getBook(this.$route.params.id);
    if (!this.book) {
      this.notfound = true;
    }
    console.log(this.book);
  },

  data: () => ({
    book: null,
    notfound: false,
    booksStore: useBooksStore(),
  }),
  methods: {},
};
</script>
