//object learning
//var will be called as empty objeck
//name, class and other inside object called as property and can be use if we add bridge (.) after the object
//example x.name will be appear name, and if we want to call a city will be like this, 
//example x.address.city or x[sddress][city] can use same logic to other one asswell
//we can use same logic repeat in repeat if we want add some properti inside property


//OBEJCT LITERAL
var x = {
    name : 'Jodi',
    class : 12,
    report : [7,8,9,8,7],
    address : {
        street : "jln. dansen, Gg. Budi Mulya",
        city : "Pontianak",
        provincy : "Kalimantan Barat",
    }
};


//FUNCTION DECLARATION
function object( nama, age, email, hp){
    var user ={};
    user.nama = nama;
    user.age = age; 
    user.email = email;
    user.hp = hp;
    return user;
}
var user1 = object('jodi', 24, 'jody201542@gmail.com', '0895704189360');


//CONSTRUCTOR
function Student(studentname, studentnim, studentemail, studenthp){
    this.studentname = studentname;
    this.studentnim = studentnim;
    this.studentemail = studentemail;
    this.studenthp = studenthp;
}
//cara memanggilnya wajib menambahkan new setalah var student
var student1 = new Student('Kris', 'b1031201135', 'b1031201135@student.untan.ac.id', '0895704189460');
