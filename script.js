//1.Write a java script programe to list the properties of a java script object 
var student={
    name:"David Rayy",
    Sclass:"VI",
    rollno:12,
};
//Sample output :name,Sclass,rollno.
console.log(student)
//2.Write a java script programe delete the rollno property from the folllowing object.Also print the object before or after deleting the property.
//Sample object
var student1={
    name:"David Rayy",
    Sclass:"VI",
    rollno:12,
};
delete student1.rollno
console.log(student1)
//3.Write a java script programe to get the length of a java script object.
//Sample object:
var student={
    name:"David Rayy",
    Sclass:"VI",
    rollno:12
}
var length=Object.keys(student).length;
console.log(length)
//4.Write a java script programe to display the reading status
//(i.e display book name ,author name and reading status)
//of the folllowing book.
var library=[{
    author:"Bill Gates",
    title:"The Road Ahead",
    readingStatus:true 
},
{
    author:"Steve Jobs",
    title:"Walter lsaacson",
    readingStatus:true     
},
{
    author:"Suzzane collins",
    title:"Mockingjya:The final book of the Hunger Game",
    readingStatus:false 
}]
for (var i = 0 ; i < library.length ; i++) {
    var book = library[i];
    var bookinfo="'" + book.title + book.author;
    if(book.readingStatus){
        console.log(bookinfo + "- Already read.")
    }else{
        console.log(bookinfo + 'not yet read.')
    }
}
// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.   
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.
class Cylinder{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    };
volume() {
    let volume= Math.PI * Math.pow(this.radius,2) * this.height;
    return volume.toFixed(4);
};
};
let cylinder1=new Cylinder(3,5);//creating a clyiner raduise 3 and height 5

console.log("Volume of the cylinder : ",cylinder1.volume());
