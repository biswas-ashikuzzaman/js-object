const person ={
    firstName: "Ashik",
    lastName:[],
    age: 25,
    getShow: function (){
        console.log(this.lastName);
    },
    setData: function (a){
        this.lastName.push(a)
    }  
}

person.setData("Zaman");
person.setData("islam");
person.getShow();
