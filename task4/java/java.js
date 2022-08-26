    
function MyAge() {

    a1 = document.getElementById("year").value;
    var date = new Date(a1);
    var a2 = new Date();
    var yourage = a2.getFullYear() - date.getFullYear();
    let a = (yourage + " Years old");
    document.getElementById("age").innerHTML = a;
}