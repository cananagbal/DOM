//document.getElementById()

// const h1 = document.getElementById("header")

// h1.style.color ="red"
// h1.style.background ="green"
// console.log(h1);

// const list =document.getElementsByTagName("li");

// const myImput =document.getElementById("input")
// const button =document.getElementById("btn")

// button.style.background="black"
// button.style.color="white"
// button.style.width="7rem"
// button.style.border="none"
// button.style.borderRadius="10px"
// button.style.padding="1rem"
// button.style.fontSize="1.1rem"
// button.style.padding="1rem"


//document.getElementsByTagName()

const list = document.getElementsByTagName("li");

console.log(list);
list[2].style.color ="red"
list.item(3).style.color = "blue"
list.item(4).textContent = "STEVE" //içindeki ifadeyi değiştirir
list[4].innerText ="ÖKMEN" //içindeki ifadeyi değiştirir.
console.log(list[2].textContent);
console.log(list[2].innerText);

//document.getElementsByClassName()

const myList = document.getElementsByClassName("list");
console.log(myList);

Array.from(myList).forEach((a) => console.log(a.innerText));
//mylist'i arraya çevirdik forEach diyerek içinde gezindik ve innertext diyerek hepsini gördük.
//- HTML Collection'larda Dizi metotlari dogrudan KULLANILAMAZ.
//- Spread ve Array.from() ile diziye çevirildikten sonra dizi metotları KULLANILABİLİR.


//document.querySelector() id-class- tag

const myli =document.querySelector("li.innerText") //ilk bulduğu tag'ı alır.
const itemList = document.querySelector(".item-list");
console.log(itemList.innerText); // class'ı item -list olanların hepsini alır.

const input = document.querySelector("#input");
console.log(input.value); //id si input un value sini alır

//document.querySelectorAll() forEach() yapısını doğrudan kullanabiliriz. forEach() bir şeyin içine girip gezinir. forEachın gezinebilmesi için çoklu bir yapısı olması lazım çoklu seçim de querySelectorAll ile yapılır.

const lists = document.querySelectorAll("ul li")
console.log(lists);  //ul nin içindeki list lerin hepsini seçti

lists.forEach((x) =>console.log(x.innerText)); 

//traversing dom *************bir Html elementi üzerinden başka bir elementi seçmek 
//Seçme işlemi 3 yolla yapılır. 
//-yukarı yönde (parent)
//-aşağı yönde (child)
//-yatay yönde (sibling)




