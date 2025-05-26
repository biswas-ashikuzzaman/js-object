const person ={
    first : "Ashikuzzaman" ,
    surname : "Biswas",
    id : 1288603,
    address : "Jashore",
    fullName: function() {
        console.log(this.first + " " + this.surname) 

    }
};

person.fullName();