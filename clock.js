let Name = prompt ("Adınızı Giriniz:");
let myName = document.querySelector("#myName");



if (Name) {
    myName.innerHTML = `${Name}`
} else {
    alert("Bir isim Giriniz!")
    location.reload();
}



function showTime (){
    var now= new Date();
    var hour= now.getHours();
    var minute=now.getMinutes();
    var second= now.getSeconds();

    var day= now.getDate();
    var month = now.getMonth()+1;
    var year = now.getFullYear();
    
    

    (minute<10)? document.getElementById("minute").innerText="0"+minute:
                 document.getElementById("minute").innerText=+minute;
    (second<10)? document.getElementById("second").innerText="0"+second:
                 document.getElementById("second").innerText= second;

    document.getElementById("date").innerText= day+" / "+month+" / "+year;

}

setInterval (showTime, 10);