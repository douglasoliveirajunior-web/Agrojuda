let money = 100;
let water = 100;
let soil = 100;
let prod = 0;

const farm = document.getElementById("farm");

function update() {
    document.getElementById("money").innerText = money;
    document.getElementById("water").innerText = water;
    document.getElementById("soil").innerText = soil;
    document.getElementById("prod").innerText = prod;
}

function plantCrop() {
    if (water > 10 && soil > 10) {
        let plant = document.createElement("div");
        plant.classList.add("plant");
        plant.style.left = Math.random() * 90 + "%";
        plant.style.top = Math.random() * 80 + "%";
        farm.appendChild(plant);

        soil -= 5;
        water -= 5;
        prod += 2;
        money += 5;
    } else {
        alert("Recursos insuficientes! Cuide do solo e da água 🌍");
    }
    update();
}

function irrigate() {
    water += 20;
    money -= 5;
    update();
}

function technology() {
    soil += 10;
    water -= 5;
    money -= 10;
    update();
}

function harvest() {
    let plants = document.querySelectorAll(".plant");
    if (plants.length > 0) {
        plants.forEach(p => p.remove());
        money += plants.length * 10;
        prod += plants.length;
    } else {
        alert("Nada para colher!");
    }
    update();
}

update();
