let  a = document.getElementById("n")
let  b = document.getElementById("m")
let  c = document.getElementById("cr")
let  d = document.getElementById("cm")

let asd 

if (localStorage.getItem("iphone")== null) {
    asd = []
}
else{
    asd = JSON.parse(localStorage.getItem("iphone"))
    view()
}

function home(){
    if(a.value == '' || b.value == '' || c.value == '' || d.value == ''){
        alert("ادخل كل الحقول")
    }
    else{
    let phone = {
        n : a.value,
        m : b.value,
        cr : c.value,
        cm : d.value
    }
    asd.push(phone)
    localStorage.setItem("iphone" , JSON.stringify(asd))
    view()
    clr()
    }
  
}

function view(){
    let v = ""
    for (let i = 0; i < asd.length; i++) {
        v += `
           <tr>
            <td>${i+1}</td>
            <td>${asd[i].n}</td>
            <td>${asd[i].m}</td>
            <td>${asd[i].cr}</td>
            <td>${asd[i].cm}</td>
            <td> <button class="btn btn-warning" onclick="">update</button> </td>
            <td> <button class="btn btn-danger" onclick="deleteRow(${i})">delete</button> </td>
            </tr>
        `
    }
    document.getElementById('tbody').innerHTML = v
}

function clr(){
    a.value = ''
    b.value = ''
    c.value = ''
    d.value = ''
}

function btnDelete(){
    asd.splice(0)
    localStorage.setItem("iphone" , JSON.stringify(asd))
    view()    
}

function deleteRow(i){
    asd.splice(i,1)
    localStorage.setItem("iphone" , JSON.stringify(asd))
    view()
}
