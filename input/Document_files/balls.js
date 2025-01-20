const divElRef = document.createElement("div");
function balls(num) {

    for (let i = 1; i <= num; i++) {


        divElRef.innerText = i;
        divElRef.style.color = "white";
        divElRef.style.width = 50 + "px";
        divElRef.style.height = 50 + "px";
        divElRef.style.backgroundColor = "black";
        divElRef.style.borderRadius = 50 + "%";
        divElRef.style.alignContent = "center";
        divElRef.style.textAlign = "center";

        document.body.appendChild(divElRef);
    }
}
balls(100);



const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    divElRef.style.backgroundColor = "#" + randomColor;
    // color.innerHTML = "#" + randomColor;

    //   genNew.addEventListener("click", setBg);
    //   setBg();

};
const buttonElRef = document.createElement("button");
buttonElRef.innerText = "Change-Bg";
buttonElRef.style.backgroundColor = "green";
buttonElRef.onclick = setBg();



document.body.appendChild(buttonElRef);