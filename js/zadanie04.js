//1

let el = document.getElementsByClassName("sample_class");
function getTagsOfElements(elements) {
    let x = [];
    for(let i = 0; i < elements.length; i++){
        x.push(elements[i].tagName);
    }
    return x;
}
console.log(getTagsOfElements(el));


//2

const element = document.getElementById("sample-id");
function getClassesOfElement(element){
    let y = [];
    const classes = element.classList;
    for(let i =0; i <classes.length; i++){
        y.push(classes[i]);
    }
    return y;
}
console.log(getClassesOfElement(element));

//3

const el2 = document.getElementsByClassName("sample_class_2");
const l  = el2[0].getElementsByTagName("li");
function getInnerTextsOfElements(elements){
    let z = [];
    for(var i=0; i< elements.length; i++ ){
        z.push(elements[i].textContent);
    }
    return z;
}
console.log(getInnerTextsOfElements(l));

// 4

const li = document.getElementsByTagName("a");
function getAddressesOfElements(elements){
    let k = [];
    for(var i= 0; i<elements.length; i++){
        k.push(elements[i].getAttribute("href"));
    }
    return k;
}
console.log(getAddressesOfElements(li));

//5

const childre = document.getElementsByClassName("sample_class_3")[0].children;
console.log(getTagsOfElements(childre));
   