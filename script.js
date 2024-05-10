
function check_And_gate(){
    let var3=document.getElementById("input1").value
    let var4=document.getElementById("input2").value
    let condition1="true"
    let condition2="false"

    if (var3==="1" && var4==="1") {
        return condition1;
    } else {
        return condition2;

    }
}

function check_OR_gate(){
    let var3=document.getElementById("input1").value
    let var4=document.getElementById("input2").value
    let condition1="true"
    let condition2="false"

    if (var3==="0" && var4==="0"){
        return "false";
    } else {
        return "true";
    }    
}

function check_NAND_gate(){
    let var3=document.getElementById("input1").value
    let var4=document.getElementById("input2").value
    let condition1="true"
    let condition2="false"

    if (var3 === "1" && var4 === "1") {
        return condition2;
    } else {
        return condition1;
    }
}

function check_XOR_gate(){
    let var3=document.getElementById("input1").value
    let var4=document.getElementById("input2").value
    let condition1="true"
    let condition2="false"

    if (var3 ===  var4){
        return condition2;
    } else {
        return condition1;
    }
}

function check_NOR_gate(){
    let var3=document.getElementById("input1").value
    let var4=document.getElementById("input2").value
    let condition1="true"
    let condition2="false"

    if (var3 === "0" && var4 === "0"){
        return condition1;
    } else {
        return condition2;
    }
}



let clicked1=document.querySelector("#btn1")
clicked1.addEventListener("click" ,() =>{
    let OR1=check_OR_gate()
    console.log(OR1)
    document.querySelector(".output").innerText=OR1
    
})

let clicked2=document.querySelector("#btn2")
clicked2.addEventListener("click" ,() =>{
    let AND=check_And_gate()
    console.log(AND)
    document.querySelector(".output").innerText=AND
    
})

let clicked3=document.querySelector("#btn3")
clicked3.addEventListener("click" ,() =>{
    let NAND=check_NAND_gate()
    console.log(NAND)
    document.querySelector(".output").innerText=NAND
    
})

let clicked4=document.querySelector("#btn4")
clicked4.addEventListener("click" ,() =>{
    let NOR=check_NOR_gate()
    console.log(NOR)
    document.querySelector(".output").innerText=NOR
    
})

let clicked5=document.querySelector("#btn5")
clicked5.addEventListener("click" ,() =>{
    let XOR=check_XOR_gate()
    console.log(XOR)
    document.querySelector(".output").innerText=XOR
    
})