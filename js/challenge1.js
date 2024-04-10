document.addEventListener("dblclick", function() {
    const date = new Date();
    alert(date);
});  

document.querySelector(".hidden").addEventListener("click", function() {
    document.querySelector(".hidden").computedStyleMap.display = "block";
});  