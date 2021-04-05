//select the element 
const bigFiveButton = document.querySelectorAll(".big-five-button");
const spottedAnimals = document.getElementById("spotted-animals-list");
const removeBtnAll = document.getElementById("remove-all-button");
const removeFirstItem = document.getElementById("remove-first-item-button");
// console.log(removeFirstItem);

// Read the button text
const btnClick = function (i) {
    return bigFiveButton[i].innerHTML;
}

//create new Li
const createLi = function (text) {
    const newLi = document.createElement("li");
    newLi.append(text);
    return newLi;
}


// console.log(spottedAnimals);

for (let i = 0; i < bigFiveButton.length; i++) {
    bigFiveButton[i].addEventListener("click", function () {
        spottedAnimals.append(createLi(btnClick(i)));
    })
}

removeFirstItem.addEventListener("click", function () {
    document.getElementById("spotted-animals-list");
    document.getElementsByTagName("li")[6].remove();
});

removeBtnAll.addEventListener("click", function () {
    spottedAnimals.innerHTML = "";
    console.log("It's working");
})
