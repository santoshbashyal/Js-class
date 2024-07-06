// Create a class Book with properties title, author, and ISBN. Add a method getDetails that returns a string with the book's details. Then, create a class Library that can hold a collection of books. Implement methods to add a book, remove a book by ISBN, and list all books in the library.


class Book {
    constructor(title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
    getDetails(){
        return `${this.title} by ${this.author} (ISBN : ${this.ISBN})`
    }
}


class Library {
    constructor(){
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
    removeBook(ISBN){
        this.books = this.books.filter(book => book.ISBN !== ISBN);

    }
    listBook(){

        return this.books.map(book => book.getDetails()).join("\n")
//         This method returns a string listing all books in the    library.
//          It uses map() to iterate over the books array, calling each book's getDetails() method to get its formatted string representation.
//          join("\n") joins all book details with a newline character, creating a multiline string.


    }
}

//((1)) creating the library and boooks

let library = new Library(); 
//In our code, Library is a blueprint or a template that defines how our library should work. It includes functions (like addBook and removeBook) to help us manage our books.


// When we say new Library(), we're actually making a real library based on that blueprint. This specific library (library) will hold all our books and have all the functions we defined in the Library class.

//create two book instances using the book class

let book1 = new Book("Muna madan","Laxmi prasad Devkota","123456")
let book2 = new Book("Two states","Chetan Bhagat","654321")

//((2))     adding books to library
library.addBook(book1);
library.addBook(book2);

//((3))  listing books in the library(printout_all_the_books in library)

console.log(library.listBook())

//((4)) removing a book from the library
 library.removeBook(123456);

 //((5)) print out the updated after removed

 console.log(library.listBook());





 //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// Question 2: E-commerce System

// Create a class Product with properties name, price, and category. Add a method displayProduct that returns a string with the product's details. Then, create a class ShoppingCart that can hold a collection of products. Implement methods to add a product, remove a product by name, and calculate the total price of the products in the cart.


class Product{
    constructor(_name,price,category){

        this.name = _name;
        this.price = price;
        this.category = category;

    }
    displayProduct(){
        return `${this.name}, ${this.price}, ${this.category}`
    }
}

class ShoppingCart{

    constructor(){
        this.products = []
    }
    addProduct(product){
        this.products.push(product); //mathi ko array ma push gareko

    }
    removeProduct(){
        this.products = this.book.products.filter(Product => Product.name !== _name);
    }
    calculateTotal(){
        return this.products.reduce((total,product)=> total + product.price,0)
    }
}
//create shoppingcart instance
let cart = new ShoppingCart();

//create two product instances
let product1 = new Product( "Laptop", 100000, "Electronics");
let product2 = new Product( "shoe", 4000, "Outfits");

//add products to the shoppingcart

cart.addProduct(product1);
cart.addProduct(product2);

//calculate and display the total price of the products in the cart
console.log(cart.calculateTotal());

//remove a product from the cart
cart.removeProduct("Laptop");

// calculate and display the updated total price of products in the cart
console.log(cart.calculateTotal());


 



