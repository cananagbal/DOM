//SELECTOR-SEÇİCİLER

//document.getElementById() İD SEÇİYOR
//ID tek bir elemana verdiğimiz bir eleman seçimi yapıyoruz.

// const h1 = document.getElementById("header")

// h1.style.color ="red"
// h1.style.background ="green"
// console.log(h1);

// const list =document.getElementsByTagName("li");

// const myImput =document.getElementById("input")
// const button =document.getElementById("btn")

button.style.background="black"
button.style.color="white"
button.style.width="7rem"
button.style.border="none"
button.style.borderRadius="10px"
button.style.padding="1rem"
button.style.fontSize="1.1rem"
button.style.padding="1rem"


//document.getElementsByTagName() tag'ları seçer

const list = document.getElementsByTagName("li");

console.log(list);
list[2].style.color ="red"
list.item(3).style.color = "blue"
list.item(4).textContent = "STEVE" //içindeki ifadeyi değiştirir
list[4].innerText ="ÖKMEN" //içindeki ifadeyi değiştirir.
console.log(list[2].textContent);
console.log(list[2].innerText);

//*===========================================
//*          GETELEMENTSBYCLASSNAME()    Class'ları seçer
//*===========================================

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

//TRAVERSİNG DOM*************bir Html elementi üzerinden başka bir elementi seçmek 
// Seçme işlemi 3 yolla yapılır. 
//*yukarı yönde (parent)
//*aşağı yönde (child)
//*yatay yönde (sibling)

//1 Yukarı yönde Traverse

const list = document.querySelector(".list").parentNode.parentNode.parentNode.style.border= "2px solid red" //ilk gördüğü li'yi aldı.parentNode diyerek bir üstte çıktık. Ul'ye çıktık Ul li'lerin kapsayıcısı. tekrar parendNode diyerek section'u seçtik. bir tane daha diyerek main'i seçmiş olduk.

//2-Aşağı yönde Traverse
document.querySelector(".add-item").children[0].style.color="red"; //indeksi 0 olan çocuğu seçtik. 

//3-Yatay yönde Traverse

const a =document.querySelector(".list").parentNode.children[2];
console.log(a);
 

document.querySelector("#sezer").parentNode.parentNode.parentNode.previousElementSibling.children[0].style.color="red"

//Create Element (element oluşturmak) Html sayfasına müdahale etmeden JS sayfasında element oluşturmak için kullanılır.

const newP = document.createElement("p") //p elementi oluşturduk.

newP.id = humeyra   //humeyra id'sini atadık.

newP.setAttribute("class", "jin") // class'ını jin verdik

const text = document.createTextNode("This is a new P element") // içinde ne yazacağını yazdık ve bir değişkene atadık.

newP.appendChild(text);
console.log(newP);

document.querySelector(".item-list h2")
h2.after(newP) //konumu belirlendi.


//GETATTİRİBUTE()

console.log(newP.getAttribute("class"));
console.log(newP.getAttribute("id"));
console.log(newP.getAttribute("name"));

//CLASSLİST

console.log(newP.clessList.contains("jsd")); //classı içeriyor mu true veya false döndürür.
newP.classList.add("new-class");
console.log(newP);
newP.classList.remove("new-class") //class ı newclass olanı sil
console.log(newP);

//İnner HTML- Ciddi güvenlik açıkları vardır.

const ul = document.querySelector("ul")
ul.innerHTML += `<li id = "list-id" class = "list" >Bootstrap</li>`
console.log(ul);
ul.innerText += `<li id = "list-id" class = "list" >Bootstrap</li>`
console.log(ul);










