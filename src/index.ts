import { hof } from "./curry/curry";

function startApp() {
    hof();
}

document.addEventListener("DOMContentLoaded", startApp);