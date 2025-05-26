
// const person ={
//     first : "Ashikuzzaman" ,
//     surname : "Biswas",
//     id : 1288603,
//     address : "Jashore",
//     fullName: function() {
//         console.log(this.first + " " + this.surname) 

//     }
// };

// person.fullName();


const houseMessages = {
    hi:"Welcome to your new",
    location: "home !",
    house: "Your house rent is due.",
    rent: "Please pay by 5th of the month.",
    schedule: " Scheduled maintenance this Friday from 10AM to 2PM.",
    good: "Thank you for staying with us.",
    bye: " Safe journey!",
  welcome: function () {
    console.log(this.hi + " " + this.location);
  },
  rentDue: function () {
    console.log(this.house+ " " + this.rent);
  },
  maintenance: function () {
    console.log(this.schedule);
  },
  goodbye: function () {
    console.log(this.good + " " + this.bye);
  }
//   invite: function()
//   console.log("Please come again Tomarrow");
};
houseMessages.welcome();       //  Welcome to your new home!
houseMessages.rentDue();       // Your house rent is due...
houseMessages.maintenance();   // Scheduled maintenance...
houseMessages.goodbye();       //Thank you...
// houseMessages.invite();
