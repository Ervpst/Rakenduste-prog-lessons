//object literal
let book = {
    "main title": "Jajaja",
    author: {
        firstName: "Mari",
        lastName: "Hari"
    },

    getAuthorName: function () { return this.author.firstName + ' ' + this.author.lastName }
 
};

 
console.log(book.getAuthorName())

function person(firstName, lastName, age) {
 
    return { 
        firstName: firstName, 
        lastName: lastName, 
        age: age
    }
}
 
 
let erv=person("erv","puu",22)
let rauk=person("rauk","mauk",11)
 
console.log(erv)
console.log(rauk)
//shortthand

const x = 2;

const answer = x > 10 ? "greater than 10" : "less than 10";
console.log(answer)
//funktsioon
const arrowFunction = () => {
    return 1 + 2
  }
  
  console.log(arrowFunction())