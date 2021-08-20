const btnAddTag=document.getElementsByClassName("plus");
const checktag=document.getElementsByClassName("check")
for (var i=0;i<btnAddTag.length;i++){
    btnAddTag[i].addEventListener("click",add)
    checktag[i].addEventListener("click",total)
};
function add(event){
var btnAdd=event.target;
var divElt=btnAdd.parentElement;
var quentityTag=divElt.querySelector("p");
var quentity=Number(quentityTag.innerHTML);
quentity++;
quentityTag.innerHTML=quentity;
var trElt=divElt.parentElement.parentElement
var unitePrice=Number(trElt.querySelector(".unitPrice").innerHTML)
var priceTag=trElt.querySelector(".price")
var price =Number(priceTag.innerHTML)
price=quentity*unitePrice
priceTag.innerHTML=price
};

function total(e){
var checktag=e.target;
var price= Number(checktag.parentElement.parentElement.querySelector(".price").innerHTML)
var totaltag =document.querySelector("#total")
var total = Number(totaltag.innerHTML)
if(checktag.checked===true){
    total+=price
}else{
    total-=price
}
totaltag.innerHTML=total
var btnAddTag=checktag.parentElement.parentElement.querySelector(".plus")
var btnaddminus=checktag.parentElement.parentElement.querySelector(".minus")
if(checktag.checked===true){
    btnAddTag.setAttribute("disabled",true)
}else{btnaddminus.RemoveAttribute}
if(checktag.checked===true){
    btnaddminus.setAttribute("disabled",true)
}else{btnaddminus.RemoveAttribute}
}

const btnMinusTag=document.getElementsByClassName("minus");
for (var i=0;i<btnMinusTag.length;i++){
    btnMinusTag[i].addEventListener("click",minus)
};
function minus(event){
    var btnMinus=event.target;
    var divElt=btnMinus.parentElement;
    var quentityTag=divElt.querySelector("p");
    var quentity=Number(quentityTag.innerHTML);
    if(quentity>0)
    quentity--;
    else(quentity=0)
        quentityTag.innerHTML= quentity
        var trElt=divElt.parentElement.parentElement
    var unitePrice=Number(trElt.querySelector(".unitPrice").innerHTML)
    var priceTag=trElt.querySelector(".price")
    var price =Number(priceTag.innerHTML)
    price=quentity*unitePrice
    priceTag.innerHTML=price
};

var likeBotton = document.getElementsByClassName('like');
for(var i=0;i<likeBotton.length;i++){
    var bottonLike =likeBotton[i]
    bottonLike.addEventListener('click',function like(e){
            var botton=e.target;
             if(botton.style.color=='red'){
                 botton.style.color='black';
             }else{
                 
                botton.style.color='red';}

        })
}

var btnDelete = document.getElementsByClassName('delete');
for(var i=0; btnDelete.length;i++){
    btnDelete[i].addEventListener('click', function deletebtn(e){
    btnDelete=e.target;
    var tr=btnDelete.parentElement.parentElement.parentElement.parentElement
    tr.remove()
})}
