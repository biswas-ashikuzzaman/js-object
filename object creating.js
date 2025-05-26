let student={
    AGR077: "Ashikuzzaman Biswas",
    AGR078:" Sahinur Alom Rony",
    AGR079: "Aynul HAque",
    AGR080:" Samsin Tahur",

};
// object property update 
student.AGR077= "Mahmudul  Hasan Sifat",
Object.freeze(student);
student.AGR080 = "rafi",
console.log(student);
document.write(student.AGR077 , student.AGR078)