// Movies 





// FAQ Section

document.querySelectorAll(".text-container").forEach((item) => {
    item.addEventListener("click", () => {
        const parentBox = item.parentElement;


        parentBox.classList.toggle("active");
    });
});





// Footer Copyright date 
document.getElementById("year").innerHTML = new Date().getFullYear();
