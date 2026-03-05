const slidersContainer = document.getElementById("pigment-sliders");
const hairFill = document.getElementById("hair-fill");
const formulationSummary = document.getElementById("formulation-summary");
const printBtn = document.getElementById("print-btn");

let ratios = {};
let currentLevel = 10;

function initSliders() {
    for (let key in PIGMENTS) {
        ratios[key] = 0;

        const wrapper = document.createElement("div");
        wrapper.innerHTML = `
        <label>${PIGMENTS[key].name}</label>
        <input type="range" min="0" max="100" value="0" data-key="${key}">
        `;

        slidersContainer.appendChild(wrapper);
    }
}

function updateColor() {
    const mixed = mixColors(ratios);
    const simulated = applyBaseTone(mixed, currentLevel);

    const rgbString = `rgb(${simulated[0]}, ${simulated[1]}, ${simulated[2]})`;
    hairFill.setAttribute("fill", rgbString);

    formulationSummary.textContent = generateFormulation(ratios);
}

slidersContainer.addEventListener("input", (e) => {
    const key = e.target.dataset.key;
    ratios[key] = parseInt(e.target.value) || 0;
    updateColor();
});

document.querySelectorAll(".canvas-toggle button").forEach(btn => {
    btn.addEventListener("click", () => {
        currentLevel = parseInt(btn.dataset.level);
        updateColor();
    });
});

printBtn.addEventListener("click", ()=> window.print());

initSliders();
updateColor();