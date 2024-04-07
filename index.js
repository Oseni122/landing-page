function openNav() {
    console.log("nav opened");
    document.getElementById("mynav").style.display = "inline-block";
    document.getElementById("mynav").style.width = "100%";
}
function closeNav() {
    console.log("nav closed");
    document.getElementById("mynav").style.display = "none";
    document.getElementById("mynav").style.width = "0%";
}