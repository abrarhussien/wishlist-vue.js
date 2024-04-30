<template>
    <div >
      <div >
        <h3 v-if="booksStore.populatedwishlist.length===0 " class="m-auto w-100 text-center mt-4 text-success">wich list is empty!</h3>
        <table v-else class="table">
          <thead>
            <tr>
              <th scope="col">ISBN</th>
              <th scope="col">image</th>
              <th scope="col">name</th>
              <th scope="col">category</th>
              <th scope="col">pages</th>
              <th scope="col">author</th>
              <th scope="col">price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in booksStore.populatedwishlist" :key="item.ISBN" class="image-height line-height">
              <td scope="row" >{{item.ISBN}}</td>
              <td>
                <div class="image-height">
                  <img :src="item.image" class="image-height"  alt="" />
                </div>
              </td>
              <td >{{item.name}}</td>
              <td>{{item.category}}</td>
              <td>{{item.pages}}</td>
              <td>{{item.author}}</td>
              <td>{{booksStore.formatCurrency(item.price)}}</td>
              <td>
                <button class="btn btn-success my-2 my-sm-0" @click="booksStore.removefromwishlist(item)">
                  Remove from wich list
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import { useBooksStore } from "../store/index";


export default {
  name: 'Wichlist',
  async created() {
    this.books = await this.booksStore.fetchBooks();
    this.wichlist = await this.booksStore.fetchWichlist();
    console.log(this.book);
  },
  data: () => ({
    books: [],
    booksStore: useBooksStore(),
    wichlist:[]
  }),
  methods:{


  }
}
</script>

<style>
ul{
    list-style: none;
}
.less{
    color: rgb(0, 84, 103);
}
.more{
    color: rgb(78, 42, 0);
}
.navbar-brand{
    cursor: pointer;
}
.image-height{
    height: 50px;
}
.line-height{
    line-height: 50px;
}
.min{
    min-height: 500px;
}


</style>
