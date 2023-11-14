"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Introduction: 
console.log("Zubair Ahmad \n Batch: 51 \n Roll No; PIAIC236053");
// Question #02 
console.log('\n Question #02');
var name = "Zubair Ahamd";
console.log("Hello " + name + ",  would you like to learn some Python today?");
// Question #03 
console.log('\n Question #03');
var name1 = "peter";
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
function titleCase(title) {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}
var name2 = titleCase("peter");
console.log(name2);
// Question #04
console.log('\n Question #04');
console.log('Quaid-e-Azam said,"Work,Word and Work."');
//Question #05
console.log('\n Question #05');
var famous_person = "Quaid-e-Azam";
var quote = '"Work,Work and Work."';
console.log(famous_person + ' said,' + quote);
//Question #06 
console.log('\n #06');
var person1 = " \n Peter";
var person2 = "\t Peter";
var person3 = "Peter";
console.log("new line " + person1);
console.log("Horizontal spacing" + person2);
console.log("Normal View " + person3);
//Question #07
console.log('\n Question #07');
var add = 2 + 6;
var sub = 10 - 2;
var mul = 4 * 2;
var div = 16 / 2;
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
//Question 08 
//Question #09
console.log('\n Question #09');
var me = "Zubair Ahmad";
var fav_num = 417;
console.log("My name is ".concat(me, " and My favourite number is ").concat(fav_num, "."));
//Question #10 
console.log('\n Question #10');
/*
Me Zubair Ahmad and Code for Current date and time is below
*/
var date = new Date();
var Currentdate = date.toLocaleString();
console.log("Me ".concat(me, " and Current date and Time is ").concat(date));
//Question #11
console.log('\n Question #11');
var friend_name = ["Abid", "Zia", "Ali"];
console.log(friend_name[0]);
console.log(friend_name[1]);
console.log(friend_name[2]);
//Question #12
console.log('\n Question #12');
var greeting = "Happay to see You!";
console.log("hi,".concat(friend_name[0], " ").concat(greeting));
console.log("hi,".concat(friend_name[1], " ").concat(greeting));
console.log("hi,".concat(friend_name[2], " ").concat(greeting));
//question 13
console.log('\n Question #13');
var fav_transporation = [
    "Honda motorcycle", "Yama motorcycle", "FIT", "Sportage"
];
//arrow function foeEach loop
fav_transporation.forEach(function (vehicle) {
    console.log("Iwould like to own a ".concat(vehicle));
});
//function forEach loop
fav_transporation.forEach(function (vehicle) {
    console.log("I would like to drive a ".concat(vehicle));
});
//iterate each element
console.log("I would like to drive ".concat(fav_transporation[0]));
console.log("I would like to drive fast ".concat(fav_transporation[1]));
console.log("I would like to buy ".concat(fav_transporation[2]));
console.log("I would like to purchase ".concat(fav_transporation[3]));
//for..in loop
for (var item in fav_transporation)
    console.log("I would like ti drive fast ".concat(item));
// for..of loop
for (var _i = 0, fav_transporation_1 = fav_transporation; _i < fav_transporation_1.length; _i++) {
    var item = fav_transporation_1[_i];
    console.log("I would like to Purchase ".concat(item));
}
//Question 14 
console.log('\n Question #14');
var invited_person = ["Ahmad", "Danish", "Abid"];
invited_person.forEach(function (name) {
    console.log("hi,Mr.".concat(name, " You are invited for dinner today!"));
});
//Question 15 
console.log('\n Question #15');
console.log("Mr.".concat(invited_person[2], " can't come for today dinner!"));
invited_person[2] = "Ali";
invited_person.forEach(function (name) {
    console.log("hi,Mr.".concat(name, " You are invited for dinner today!"));
});
//Question 16 
console.log('\n Question #16');
invited_person.forEach(function (name) {
    console.log("hi,".concat(name, " a found a bigger table,so thought to invite more friends!"));
});
invited_person.unshift("Khalid");
var middle_person = Math.floor(invited_person.length / 2);
invited_person.splice(middle_person, 0, "Qasim");
invited_person.push("Shabbir");
invited_person.forEach(function (name) {
    console.log("Hi,Mr.".concat(name, " You are Invited!"));
});
//question 17 
console.log('\n Question #17');
invited_person.forEach(function (name) {
    console.log("Sorry,Mr.".concat(name, " ,I can invite only two persons for today dinner! "));
});
invited_person = invited_person.filter(function (name) { return name !== "Ali"; });
console.log("Sorry Ali,I can't invite You today!");
console.log("".concat(invited_person));
invited_person = invited_person.filter(function (name) { return name !== "Khalid"; });
console.log("Sorry Khalid,I can't invite You today!");
console.log("".concat(invited_person));
invited_person = invited_person.filter(function (name) { return name !== "Qasim"; });
console.log("Sorry Qasim,I can't invite You today!");
console.log("".concat(invited_person));
invited_person = invited_person.filter(function (name) { return name !== "Ahmad"; });
console.log("Sorry Ahmad,I can't invite You today!");
console.log("".concat(invited_person));
invited_person.forEach(function (name) {
    console.log("You Mr.".concat(name, " are still invited!"));
});
invited_person.splice(0, 1);
console.log("".concat(invited_person));
invited_person.splice(0, 1);
console.log("Now I have an empty string ".concat(invited_person));
//Question 18 
console.log('\n Question #18');
var location = ["Madina", "Makkah", "Istambol", "London", "New York"];
console.log("".concat(location));
var copy_location = location.slice();
copy_location = copy_location.sort();
console.log("".concat(copy_location));
console.log("".concat(location));
copy_location.reverse();
console.log("".concat(copy_location));
console.log("".concat(location));
location.reverse();
console.log("".concat(location));
location.reverse();
console.log("".concat(location));
location = location.sort();
console.log("".concat(location));
location = location.reverse();
console.log("".concat(location));
//Question 19
console.log('\n Question #19');
invited_person[0] = "Abrar";
invited_person[1] = "Ilyas";
console.log("".concat(invited_person));
invited_person.forEach(function (name, index) {
    var loc = location[index];
    console.log("Hi,Mr.".concat(name, ",I want to invite you on dinner at ").concat(loc));
});
//Question 20 and 21,22
console.log('\n Question #20,#21,#22');
var own_array = ["mountain", "Rivers", "Countries", "Cities", "Languages"];
var own_obj = {
    mountain: "K2",
    river: "Indus",
    country: "Pakistan",
    city: "Karachi",
    language: "Urdu"
};
//Question 23
console.log('\n Question #23');
var car = "sobaru";
console.log("Is car=='sobaru'? I predict True");
console.log(car == 'sobaru');
var mountain = "K2";
console.log("Is mountain=='K2'? I predict False");
console.log(mountain == "K2");
var vehicle = "mehran";
console.log("Is car=='mehran'? I predict True");
console.log(vehicle == 'mehran');
var city = "karachi";
console.log("Is city=='karachi'? I predict True");
console.log(city == 'karachi');
var language = "urdu";
console.log("Is language=='urdu'? I predict True");
console.log(language == 'urdu');
var car2 = "sobaru";
console.log("Is car2=='sobaru'? I predict False");
console.log(car == 'suzuki');
var mountain2 = "nanga parbat";
console.log("Is mountain2=='mount everest'? I predict False");
console.log(mountain2 == 'mount everest');
var vehicle2 = "honda bike";
console.log("Is vehicle2=='yamaha'? I predict False");
console.log(vehicle2 == 'yamaha');
var city2 = "lahore";
console.log("Is city2=='multan'? I predict False");
console.log(city2 == 'multan');
var language2 = "punjabi";
console.log("Is car=='sindhi'? I predict False");
console.log(car == 'sindhi');
//Question 24 
console.log('\n Question #24');
var game = "cricket";
console.log("Is game == 'cicket'? I think True");
console.log(game == 'cricket');
var ball = "red";
console.log("Is ball !== 'red'? I think False");
console.log(ball !== 'red');
var numb = 5 == 5;
console.log("Is 5==5? I think true");
console.log(5 == 5);
var numb2 = 4 !== 4;
console.log("Is 4!==4? I think False");
console.log(4 !== 4);
var num1 = 5 > 3;
console.log("Is 5>3? I think True");
console.log(5 > 3);
var num2 = 7 < 9;
console.log("Is 7<9? I think True");
console.log(7 < 9);
var num3 = 6 >= 6;
console.log("Is 6>=6? I think True");
console.log(6 >= 6);
var num4 = 8 <= 5;
console.log("Is 8<=5? I think False");
console.log(8 <= 5);
var state1 = true || true;
console.log("true || true? I think true");
console.log(true || true);
var state2 = true || false;
console.log("true || false? I think true");
console.log(true || false);
var state3 = false || false;
console.log("false || false? I think false");
console.log(false || false);
var state4 = true && true;
console.log("true && true? I think true");
console.log(true && true);
var state5 = true && false;
console.log("true && false? I think false");
console.log(true && false);
var state6 = false && false;
console.log("false && false? I think false");
console.log(false && false);
var cities = ["Manshera", "abbottabad", "karachi", "lahore"];
var cityToFind = cities.indexOf("abbottabad");
console.log(cityToFind);
console.log(cityToFind !== -1);
var city2ToFind = cities.indexOf("haderabad");
console.log(city2ToFind);
console.log(city2ToFind !== -1);
//question25 
console.log("\n Question #25");
var allien_color = "green";
var point = 5;
if (allien_color == "green") {
    console.log("The player killed ".concat(allien_color, " color allien and got the points ").concat(point));
}
else {
    console.log("The player killed no allien and got no points");
}
console.log("\n");
//Question 26 
console.log("\n Question #26");
if (allien_color !== "green")
    console.log("The player killed ".concat(allien_color, " color allien and got the points ").concat(point));
else
    console.log("The player killed no ".concat(allien_color, "  color allien and got 10 points"));
console.log("\n");
//Question 27 
console.log("\n Question #27");
var allien1_color = "green";
if (allien1_color == "green") {
    console.log("The player got 5 points");
}
else if (allien1_color == "yellow") {
    console.log("The player got 10 points");
}
else if (allien1_color == "red") {
    console.log("The player got 15 points");
}
else {
    console.log("The player got No points");
}
var allien2_color = "yellow";
if (allien2_color == "green") {
    console.log("The player got 5 points");
}
else if (allien2_color == "yellow") {
    console.log("The player got 10 points");
}
else if (allien2_color == "red") {
    console.log("The player got 15 points");
}
else {
    console.log("The player got No points");
}
var allien3_color = "red";
if (allien3_color == "green") {
    console.log("The player got 5 points");
}
else if (allien3_color == "yellow") {
    console.log("The player got 10 points");
}
else if (allien3_color == "red") {
    console.log("The player got 15 points");
}
else {
    console.log("The player got No points");
}
console.log("\n");
//Question 28 
console.log("\n question #28");
var age = 12;
if (age < 2) {
    console.log("The person is baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person id teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is adult");
}
else if (age >= 65) {
    console.log("The person is elder");
}
else {
    console.log("Describe the age");
}
console.log("\n");
//Question #29 
console.log("\n Question #29");
var fav_fruits = ["Mango", "Banana", "Orange"];
console.log("I have an array of favourite fruits as ".concat(fav_fruits));
if (fav_fruits.indexOf("Banana") !== -1) {
    console.log("I really like Banana");
}
if (fav_fruits.indexOf("Mango") !== -1) {
    console.log("I really like Mango");
}
if (fav_fruits.indexOf("orange") !== -1) {
    console.log("I really like Orange");
}
if (fav_fruits.indexOf("Apple") == -1) {
    console.log("I don't like Apple");
}
if (fav_fruits.indexOf("Carrot") == -1) {
    console.log("I don't like Carrot");
}
console.log("\n");
//Question #30 
console.log("\n Question #30");
var users = ["Admin", "Eric", "Peter", "Ellen", "Smith"];
for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
    var user = users_1[_a];
    if (user === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again"));
    }
}
console.log("\n");
//Question #31 
console.log("\n Question #31");
if (users.length == 0) {
    console.log(" Username Array is empty");
}
else {
    console.log("Username Array is not empty");
}
users = users.splice(4, 0);
console.log(users);
console.log("Array is empty now");
console.log('\n');
//Question #32 
console.log('\n Question #32');
var current_users = ["Adil", "Bilal", "Imam", "Kamran", "Hamza"];
var new_users = ["Basit", "Kamran", "Raja", "Bilal", "Kashif"];
for (var _b = 0, new_users_1 = new_users; _b < new_users_1.length; _b++) {
    var new_user = new_users_1[_b];
    if (new_user == "Bilal")
        console.log(" the person will need to enter a new username.");
    else {
        console.log("username is available");
    }
}
console.log('\n');
//Question #33 
console.log('\n Question #32');
var ordinal_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, ordinal_num_1 = ordinal_num; _c < ordinal_num_1.length; _c++) {
    var number = ordinal_num_1[_c];
    var lastString = void 0;
    if (number == 1) {
        lastString = "st";
    }
    else if (number == 2) {
        lastString = "nd";
    }
    else if (number == 3) {
        lastString = "rd";
    }
    else {
        lastString = "th";
    }
    console.log("".concat(number).concat(lastString));
}
//Question #34 
console.log("\n Question #34");
var pizza = ["Margherita", "Pepperoni", "Vegetarian"];
for (var i = 0; i <= 2; i++)
    console.log("I like ".concat(pizza[i], " pizza"));
console.log("\n Vegetarian Pizza is rish of vegetable \n I eat vegetarian once a week \n Vegetarian is inrich with protein");
console.log(" \n I really love Vegetarian.");
console.log('\n');
//Question #35 
console.log('\n Question #35');
var pets = ["goat", "cow", "buffalow"];
for (var i = 0; i <= 2; i++) {
    console.log(pets[i]);
    console.log(" A ".concat(pets[i], " would have a great pet "));
}
console.log(" All these pets provide milk and meat for Human.");
console.log('\n');
// Question #36 
console.log("\n Question #36");
function make_shirt(size, message) {
    console.log("The of shirt is ".concat(size, " and the message on shirt is:").concat(message));
}
make_shirt("Large", "Make day happy");
console.log('\n');
//Question #37 
console.log('\n Question #37');
function make_shirts(size) {
    if (size == "Large") {
        console.log("I love typescript");
    }
    else if (size == "Medium") {
        console.log("Make Large shirt and medium shirt");
    }
    else {
        console.log("Shirt size does not match");
    }
}
make_shirts("Large");
make_shirts("Medium");
make_shirts("Small");
console.log('\n');
//Question #38
console.log('\n Question #38');
function city_country(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    if (city == "Karachi") {
        console.log("The ".concat(city, " is in ").concat(country));
    }
    else if (city == "Lahore") {
        console.log("The ".concat(city, " is in ").concat(country));
    }
    else {
        console.log("The ".concat(city, " is not in Pakistan"));
    }
}
city_country("Karachi");
city_country("London");
city_country("Lahore");
console.log('\n');
//Question #39 
console.log("\n Question #39");
function cities_countries(city, country) {
    console.log("\"".concat(city, ",").concat(country, "\""));
}
cities_countries("Lahore", "Pakistan");
cities_countries("Paris", "France");
cities_countries("London", "England");
console.log('\n');
//Question #40 
console.log('\n Question #40');
function make_album(artist_name, album_title, noOfTracks) {
    var music_album = {
        name: artist_name,
        title: album_title,
        track: noOfTracks
    };
    if (noOfTracks !== 0) {
        console.log("Artist name ".concat(artist_name, ",album title ").concat(album_title, " and no of tracks ").concat(noOfTracks, " have been saved."));
    }
    else {
        console.log("Artist name ".concat(artist_name, ",album title ").concat(album_title, " have been saved"));
    }
}
make_album("Fareed Sabri", "Tere Bin", 5);
make_album("Nusrat", "Tum Khana the", 0);
console.log('\n');
//Question #41 
console.log('/n Question #41');
var magicians = ["lal bangali", "begalal", "santoshi"];
function show_magician(mags) {
    for (var _i = 0, mags_1 = mags; _i < mags_1.length; _i++) {
        var mag = mags_1[_i];
        console.log(mag);
    }
}
show_magician(magicians);
console.log('\n');
//Question #42 & #43 
console.log('\n Question #42 & #43');
function make_great(mags, txt) {
    for (var _i = 0, mags_2 = mags; _i < mags_2.length; _i++) {
        var mag = mags_2[_i];
        console.log("".concat(txt, " ").concat(mag));
    }
}
make_great(magicians, "Great");
show_magician(magicians);
console.log('\n');
//Question #44 
console.log('\n Question #44');
function sanwich_item(arrs) {
    console.log("Summary of sandwich:\n The customer ordered ".concat(arrs, " so it is full tak sandwich"));
}
sanwich_item('["carrot","slice","onion"]');
//Question #45 
console.log('\n Question #45');
function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var i = 0; i < options.length; i += 2) {
        if (options[i] && options[i + 1]) {
            car[options[i]] = options[i + 1];
        }
    }
    return car;
}
var car_created = createCar("Toyota", "Camry", "color", "blue", "year", 2022);
console.log(car_created);
