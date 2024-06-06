function setupCarrusel(galeriaClass, prevButtonId, nextButtonId) {
    const scrollContainer = document.querySelector("galeriaClass");
    const irbtn = document.getElementById("prevButtonId");
    const volverbtn = document.getElementById("nextButtonId");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "auto";
    });

    volverbtn.addEventListener("click", ()=> {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
    });

    irbtn.addEventListener("click", ()=> {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 900;
    });
}
setupCarrusel(".galeria-papel","irbtn-papel", "volverbtn-papel");
setupCarrusel(".galeria-llaves","irbtn-llaves", "volverbtn-llaves");
setupCarrusel(".galeria-tapitas","irbtn-tapitas", "volverbtn-tapitas");
setupCarrusel(".galeria-latitas","irbtn-latitas", "volverbtn-latitas");
setupCarrusel(".galeria-materiales","irbtn-materiales", "volverbtn-materiales");
setupCarrusel(".galeria-publicidad","irbtn-publicidad", "volverbtn-publicidad");
