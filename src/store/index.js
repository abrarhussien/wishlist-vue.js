import { defineStore } from "pinia";
export const useBooksStore = defineStore("books", {
  state: () => ({
    wishlist: [],
    books: [],
    populatedwishlist:[]
  }),
  actions: {
    async fetchBooks() {
      let res = await fetch("http://localhost:3000/books");
      let books = await res.json();
      this.books = books;
      return books;
    },
    async fetchWichlist() {
      let res = await fetch("http://localhost:3000/wichlist");
      let wichlist = await res.json();
      this.wishlist = wichlist
      this.populatedwishlist=wichlist.map((wish)=>this.books.find((book)=>book.ISBN==wish.bookId))
      return wichlist;
    },
    formatCurrency(price) {
      const currency = "SAR";
      const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
      });
      return priceFormatter.format(price);
    },
    async removefromwishlist(book) {
        console.log(book)
      let index = this.wishlist.findIndex((wich) => wich.bookId == book.ISBN);
      this.populatedwishlist.splice(index, 1);
      console.log(index)
      const id=this.wishlist[index].id
      console.log(id)
      this.wishlist.splice(index, 1);
      await fetch(`http://localhost:3000/wichlist/${id}`, {
        method: "DELETE",
      });
    return true
    },
    async addtowishlist(book) {
        this.populatedwishlist.push(book)
        const id=Math.random()*10000000+""
      this.wishlist.push({id,bookId:book.ISBN});
      console.log(this.wishlist);

      await fetch(`http://localhost:3000/wichlist`, {
        method: "POST",
        body: JSON.stringify({id,bookId:book.ISBN}),
      });
    },
    isInWichList(book) {
      const index = this.wishlist.findIndex((item) => item.bookId === book.ISBN);
      if (index === -1) {
        return false;
      }
      return true;
    },
    getBook(id){
        const book= this.books.find((book)=>book.ISBN==id)

        return book
    }

  },
});
