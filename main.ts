 
   

   //Introduction: 
   console.log(`\n Zubair Ahmad \n Batch: 51 \n Roll No; PIAIC236053`)  

 // Question #02 
 console.log('\n Question #02')
  let name:string = "Zubair Ahamd"; 
  console.log("Hello "+name +",  would you like to learn some Python today?"); 
  
   
 // Question #03 
console.log('\n Question #03')
   let name1 = "peter";
   console.log(name1.toUpperCase())
   console.log(name1.toLowerCase())
   
   function titleCase(title:string): string{
     return title.charAt(0).toUpperCase()+title.slice(1).toLowerCase()
   }  

   const name2 = titleCase("peter");
   console.log(name2); 

   // Question #04
   console.log('\n Question #04')
   console.log('Quaid-e-Azam said,"Work,Word and Work."') 

   //Question #05
   console.log('\n Question #05')
   let famous_person= "Quaid-e-Azam";
   let quote = '"Work,Work and Work."';
   console.log(famous_person+' said,'+quote); 

   //Question #06 
   console.log('\n #06')
   let person1 = " \n Peter";
   let person2 = "\t Peter";
   let person3 = "Peter";
   
   console.log("new line " +person1)
   console.log("Horizontal spacing"+ person2)
   console.log("Normal View "+person3) 

   //Question #07
   console.log('\n Question #07')
   let add = 2+6;
   let sub = 10-2;
   let mul = 4*2;
   let div = 16/2;
   console.log(add)
   console.log(sub)
   console.log(mul)
   console.log(div) 

   //Question 08 



   //Question #09
   console.log('\n Question #09')
   let me = "Zubair Ahmad";
   let fav_num = 417;
   console.log(`My name is ${me} and My favourite number is ${fav_num}.` )


   //Question #10 
   console.log('\n Question #10')

   /* 
   Me Zubair Ahmad and Code for Current date and time is below
   */ 
  let date = new Date();
  let Currentdate = date.toLocaleString();
  console.log(`Me ${me} and Current date and Time is ${date}`);
 

  //Question #11
  console.log('\n Question #11')
  
  let friend_name:string[]= ["Abid","Zia","Ali"]
  console.log(friend_name[0])
  console.log(friend_name[1])
  console.log(friend_name[2]) 

  //Question #12
  console.log('\n Question #12')

 let greeting:string = "Happay to see You!"
 console.log(`hi,${friend_name[0]} ${greeting}`)
 console.log(`hi,${friend_name[1]} ${greeting}`)
 console.log(`hi,${friend_name[2]} ${greeting}`)

 //question 13
 console.log('\n Question #13')

 let fav_transporation:string[] =[
    "Honda motorcycle","Yama motorcycle","FIT","Sportage"
 ]  
 //arrow function foeEach loop
 fav_transporation.forEach((vehicle)=>{
    console.log(`Iwould like to own a ${vehicle}`)
 });
 //function forEach loop
 fav_transporation.forEach(function(vehicle){
    console.log(`I would like to drive a ${vehicle}`)
 }); 

 //iterate each element
 console.log(`I would like to drive ${fav_transporation[0]}`)
 console.log(`I would like to drive fast ${fav_transporation[1]}`)
 console.log(`I would like to buy ${fav_transporation[2]}`)
 console.log(`I would like to purchase ${fav_transporation[3]}`)
 
 //for..in loop
 for(let item in fav_transporation)
 console.log(`I would like ti drive fast ${item}`)
 
 // for..of loop
 for(let item of fav_transporation)
 console.log(`I would like to Purchase ${item}`)
  

 //Question 14 
 console.log('\n Question #14')

 let invited_person:string[]=[ "Ahmad","Danish","Abid"]
 invited_person.forEach((name)=>{
    console.log(`hi,Mr.${name} You are invited for dinner today!`)
 });

 //Question 15 
 console.log('\n Question #15')

 console.log(`Mr.${invited_person[2]} can't come for today dinner!`)
 invited_person[2]="Ali";
 invited_person.forEach((name)=>{
    console.log(`hi,Mr.${name} You are invited for dinner today!`)
 }); 

 //Question 16 
 console.log('\n Question #16')

 invited_person.forEach((name)=>{
    console.log(`hi,${name} a found a bigger table,so thought to invite more friends!`)
 }); 
 invited_person.unshift("Khalid");
 let middle_person = Math.floor(invited_person.length/2);
 invited_person.splice(middle_person,0,"Qasim");
 invited_person.push("Shabbir");
 invited_person.forEach((name)=>{
    console.log(`Hi,Mr.${name} You are Invited!`)
 });
  
 //question 17 
 console.log('\n Question #17')

 invited_person.forEach((name)=>{
    console.log(`Sorry,Mr.${name} ,I can invite only two persons for today dinner! `)
 }); 
 
 invited_person = invited_person.filter((name)=>name!=="Ali")
 console.log(`Sorry Ali,I can't invite You today!`)  
 console.log(`${invited_person}`)
 invited_person=invited_person.filter((name)=>name!=="Khalid")
 console.log(`Sorry Khalid,I can't invite You today!`)
 console.log(`${invited_person}`)

 invited_person=invited_person.filter((name)=>name!=="Qasim")
 console.log(`Sorry Qasim,I can't invite You today!`)
 console.log(`${invited_person}`) 

 invited_person=invited_person.filter((name)=>name!=="Ahmad")
 console.log(`Sorry Ahmad,I can't invite You today!`)
 console.log(`${invited_person}`) 

 invited_person.forEach((name)=>{
    console.log(`You Mr.${name} are still invited!`)
 }); 

   invited_person.splice(0,1)
   console.log(`${invited_person}`)

   invited_person.splice(0,1)
   console.log(`Now I have an empty string ${invited_person}`) 
   

   //Question 18 
   console.log('\n Question #18')

   let location:string[]=["Madina","Makkah","Istambol","London","New York"]
   console.log(`${location}`)
   let copy_location = location.slice();
   copy_location = copy_location.sort()
   console.log(`${copy_location}`) 
   console.log(`${location}`) 
   copy_location.reverse()
   console.log(`${copy_location}`) 
   console.log(`${location}`) 
   location.reverse();
   console.log(`${location}`)
   location.reverse()
   console.log(`${location}`) 
   location = location.sort()
   console.log(`${location}`) 
   location = location.reverse()
   console.log(`${location}`) 

   //Question 19
   console.log('\n Question #19')
 
   invited_person[0]="Abrar";
   invited_person[1]="Ilyas";
   console.log(`${invited_person}`)
   invited_person.forEach((name,index)=>{
    let loc:string=location[index]
    console.log(`Hi,Mr.${name},I want to invite you on dinner at ${loc}`)
  });
  
  //Question 20 and 21,22
  console.log('\n Question #20,#21,#22')

  let own_array:string[]=["mountain","Rivers","Countries","Cities","Languages"];
  let own_obj:{mountain:string, river:string, country:string, city:string,  language:string} = {
    mountain:"K2",
    river:"Indus",
    country:"Pakistan",
    city:"Karachi",
    language:"Urdu"

  } 

  //Question 23
  console.log('\n Question #23')

  let car:string="sobaru";
  console.log("Is car=='sobaru'? I predict True")
  console.log(car=='sobaru')

  let mountain:string="K2"
  console.log("Is mountain=='K2'? I predict False")
  console.log(mountain=="K2")

  let vehicle:string="mehran";
  console.log("Is car=='mehran'? I predict True")
  console.log(vehicle=='mehran') 

  let city:string="karachi";
  console.log("Is city=='karachi'? I predict True")
  console.log(city=='karachi')

  let language:string="urdu";
  console.log("Is language=='urdu'? I predict True")
  console.log(language=='urdu')

  let car2:string="sobaru";
  console.log("Is car2=='sobaru'? I predict False")
  console.log(car=='suzuki')

  let mountain2:string="nanga parbat";
  console.log("Is mountain2=='mount everest'? I predict False")
  console.log(mountain2=='mount everest')

  let vehicle2:string="honda bike";
  console.log("Is vehicle2=='yamaha'? I predict False")
  console.log(vehicle2=='yamaha') 

  let city2:string="lahore";
  console.log("Is city2=='multan'? I predict False")
  console.log(city2=='multan')

  let language2:string="punjabi";
  console.log("Is car=='sindhi'? I predict False")
  console.log(car=='sindhi') 


  //Question 24 
  console.log('\n Question #24')

  let game:string= "cricket";
  console.log("Is game == 'cicket'? I think True")
  console.log(game=='cricket')

  let ball:string="red"
  console.log("Is ball !== 'red'? I think False")
  console.log(ball !== 'red') 

  let numb = 5==5
  console.log("Is 5==5? I think true")
  console.log(5==5)

  let numb2 = 4!==4
  console.log("Is 4!==4? I think False")
  console.log(4!==4)

  let num1 = 5>3
  console.log("Is 5>3? I think True")
  console.log(5>3) 

  let num2 = 7<9
  console.log("Is 7<9? I think True")
  console.log(7<9)

  let num3= 6>=6
  console.log("Is 6>=6? I think True")
  console.log(6>=6) 

  let num4 = 8<=5
  console.log("Is 8<=5? I think False")
  console.log(8<=5) 

  let state1 = true || true
  console.log("true || true? I think true")
  console.log(true || true)
 
  let state2 = true || false
  console.log("true || false? I think true")
  console.log(true || false) 

  let state3 = false || false
  console.log("false || false? I think false")
  console.log(false || false)
 
  let state4 = true && true
  console.log("true && true? I think true")
  console.log(true && true)
 
  let state5 = true && false
  console.log("true && false? I think false")
  console.log(true && false) 

  let state6 = false && false
  console.log("false && false? I think false")
  console.log(false && false) 


  let cities:string[] = ["Manshera", "abbottabad","karachi","lahore"]
  let cityToFind:number = cities.indexOf("abbottabad")
  console.log(cityToFind)
  console.log(cityToFind!==-1) 

  let city2ToFind:number = cities.indexOf("haderabad")
  console.log(city2ToFind)
  console.log(city2ToFind !== -1) 

  //question25 
  console.log(`\n Question #25`)
  let allien_color:string= "green";
   
  let point:number=5


  if(allien_color=="green")
  { 
   console.log(`The player killed ${allien_color} color allien and got the points ${point}`)
  } 
  else 
  {
   console.log(`The player killed no allien and got no points`)
  } 
 console.log(`\n`)

 //Question 26 
 console.log(`\n Question #26`)
  if(allien_color!=="green")
  console.log(`The player killed ${allien_color} color allien and got the points ${point}`)
 else 
 console.log(`The player killed no ${allien_color}  color allien and got 10 points`)
 console.log(`\n`)

 //Question 27 
 console.log(`\n Question #27`)
 let allien1_color:string = "green"
 if(allien1_color== "green")
 { 
   console.log(`The player got 5 points`)
 } 
 else if(allien1_color=="yellow")
 {
   console.log(`The player got 10 points`)
 }
 else if(allien1_color=="red")
 {
   console.log(`The player got 15 points`)
 }
 else 
 {
   console.log(`The player got No points`)
 }


  
  let allien2_color:string="yellow"
 if(allien2_color== "green")
 { 
   console.log(`The player got 5 points`)
 } 
 else if(allien2_color=="yellow")
 {
   console.log(`The player got 10 points`)
 }
 else if(allien2_color=="red")
 {
   console.log(`The player got 15 points`)
 }
 else 
 {
   console.log(`The player got No points`)
 } 


 
 let allien3_color:string="red"
 if(allien3_color== "green")
 { 
   console.log(`The player got 5 points`)
 } 
 else if(allien3_color=="yellow")
 {
   console.log(`The player got 10 points`)
 }
 else if(allien3_color=="red")
 {
   console.log(`The player got 15 points`)
 }
 else 
 {
   console.log(`The player got No points`)
 } 
 console.log(`\n`) 

 //Question 28 
 console.log(`\n question #28`) 
 let age:number= 12
 if(age < 2)
 {
   console.log("The person is baby")
 } 
 else if(age>=2 && age<4)
 { 
   console.log("The person is toddler")
 }
 else if(age>=4 && age<13)
 {
  console.log("The person is kid")
 }
 else if(age>=13 && age<20)
 {
   console.log("The person id teenager")
 } 
 else if(age>=20 && age<65)
 { 
   console.log("The person is adult")
 } 
 else if(age>=65)
 {
   console.log("The person is elder")
 }
 else{
   console.log("Describe the age")
 } 
 console.log(`\n`)

 //Question #29 
 console.log(`\n Question #29`)
  let fav_fruits:string[]=["Mango","Banana","Orange"]
  console.log(`I have an array of favourite fruits as ${fav_fruits}`)
  if(fav_fruits.indexOf("Banana")!==-1)
  { 
   console.log("I really like Banana")
  }  
  if(fav_fruits.indexOf("Mango")!==-1)
  { 
   console.log("I really like Mango")
  } 
   if(fav_fruits.indexOf("orange")!==-1)
  { 
   console.log("I really like Orange")
  }   
  if(fav_fruits.indexOf("Apple")==-1)
  { 
   console.log("I don't like Apple")
  }  
  if(fav_fruits.indexOf("Carrot")==-1)
  { 
   console.log("I don't like Carrot")
  } 
  console.log(`\n`)

  //Question #30 
  console.log(`\n Question #30`)
  let users:string[]=["Admin","Eric","Peter","Ellen","Smith"]
  
  for(let user of users)
  { 
   if(user === "Admin")
   { 
      console.log( "Hello admin, would you like to see a status report?")
   } 
   else{ 
      console.log( `Hello ${user}, thank you for logging in again`)
   }
  }
  console.log(`\n`)
    
  //Question #31 
  console.log(`\n Question #31`)
  if(users.length== 0) 
  { 
   console.log(" Username Array is empty")
  }else{ 
   console.log("Username Array is not empty")
  }  
   users = users.splice(4,0)
   console.log(users)
   console.log("Array is empty now")
   console.log('\n') 

   //Question #32 
  console.log('\n Question #32')
  let current_users:string[]=["Adil","Bilal","Imam","Kamran","Hamza"]
  let new_users:string[]=["Basit","Kamran","Raja","Bilal","Kashif"]  
   for(let new_user of new_users ) 
   if(new_user == "Bilal")
   console.log(" the person will need to enter a new username.")
  else { 
   console.log("username is available")
  } 
 console.log('\n')
  

 //Question #33 
 console.log('\n Question #32') 
 let ordinal_num:number[] =[1,2,3,4,5,6,7,8,9]
 for(let number of ordinal_num)
 { 
   let lastString:string;
   if(number == 1){ 
      lastString = "st";
   }
   else if(number == 2)
   { 
       lastString = "nd";
      }
   else if(number == 3) 
   { 
     lastString = "rd"
   }
   else { 
      lastString = "th"
   } 

   console.log(`${number}${lastString}`)
 } 
 
 



 //Question #34 
  console.log(`\n Question #34`)
  let pizza:string[]=["Margherita", "Pepperoni", "Vegetarian"]
  for(let i = 0; i<=2; i++)
  console.log(`I like ${pizza[i]} pizza`) 

  console.log("\n Vegetarian Pizza is rish of vegetable \n I eat vegetarian once a week \n Vegetarian is inrich with protein")
  console.log(" \n I really love Vegetarian.") 
  
  console.log('\n')

  //Question #35 
  console.log('\n Question #35')
  let pets:string[]=["goat","cow","buffalow"]
  for(let i=0;i<=2;i++)
  { 
   console.log(pets[i]) 
   console.log(` A ${pets[i]} would have a great pet `)
  } 
  console.log(` All these pets provide milk and meat for Human.`)
 console.log('\n')

  // Question #36 
  console.log(`\n Question #36`)

  function make_shirt(size:string, message:string):void{
   console.log(`The of shirt is ${size} and the message on shirt is:${message}`)
  }  

  make_shirt("Large","Make day happy"); 
  console.log('\n')

  //Question #37 
  console.log('\n Question #37')
  function make_shirts(size:string):void{
   if(size == "Large"){ 
      console.log("I love typescript")
   }else if(size == "Medium"){ 
      console.log("Make Large shirt and medium shirt")
   } else{ 
      console.log("Shirt size does not match")
   }
  } 

  make_shirts("Large");
  make_shirts("Medium");
  make_shirts("Small"); 

  console.log('\n')

  //Question #38
  console.log('\n Question #38')
  function city_country(city,country="Pakistan"):void { 
     if(city == "Karachi")
     { 
      console.log(`The ${city} is in ${country}`)
     } 
     else if(city == "Lahore")
     { 
      console.log(`The ${city} is in ${country}`)
     } 
     else 
     { 
      console.log(`The ${city} is not in Pakistan`)
     }
  } 
  
  city_country("Karachi");
  city_country("London");
  city_country("Lahore"); 

  console.log('\n')

  //Question #39 
  console.log(`\n Question #39`) 

  function cities_countries(city:string, country:string):void{ 
     console.log(`"${city},${country}"`)
  }

  cities_countries("Lahore","Pakistan");
  cities_countries("Paris","France");
  cities_countries("London","England"); 
 console.log('\n') 

 //Question #40 
 console.log('\n Question #40')
  function make_album(artist_name:string,album_title:string,noOfTracks:number):void{ 
    let music_album = { 
      name:artist_name,
      title:album_title,
      track:noOfTracks
    } 
    if(noOfTracks !== 0)
    { 
      console.log(`Artist name ${artist_name},album title ${album_title} and no of tracks ${noOfTracks} have been saved.`)
      
    } 
    else { 
      console.log(`Artist name ${artist_name},album title ${album_title} have been saved`)
    }
    }  


    make_album("Fareed Sabri","Tere Bin",5);
    make_album("Nusrat","Tum Khana the",0)

  console.log('\n')

  //Question #41 
  console.log('/n Question #41')
   let magicians:string[] =["lal bangali","begalal","santoshi"]  

   function show_magician(mags):void { 
      for(let mag of mags)
      { 
         console.log(mag)
      }
   } 
  
   show_magician(magicians); 

   console.log('\n')
    
   //Question #42 & #43 
   console.log('\n Question #42 & #43')
   function make_great(mags,txt:string): void { 

      
      for(let mag of mags) 
      
         console.log(`${txt} ${mag}`)
      }
   

   make_great(magicians,"Great"); 
   show_magician(magicians); 

   console.log('\n')

   
  
  //Question #44 
  console.log('\n Question #44')
   
  function sanwich_item(arrs:string):void{ 
   
   console.log(`Summary of sandwich:\n The customer ordered ${arrs} so it is full tak sandwich`)
  }

  sanwich_item('["carrot","slice","onion"]')
 
 //Question #45 
 console.log('\n Question #45') 
 function createCar(manufacturer: string, modelName: string, ...options: any[]): { [key: string]: any } {
   let car: { [key: string]: any } = {
       manufacturer: manufacturer,
       modelName: modelName,
   };

   
   for (let i = 0; i < options.length; i += 2) {
       if (options[i] && options[i + 1]) {
           car[options[i]] = options[i + 1];
       }
   }

   return car;
}

let car_created = createCar("Toyota", "Camry", "color", "blue", "year", 2022);
console.log(car_created);





















 export{}