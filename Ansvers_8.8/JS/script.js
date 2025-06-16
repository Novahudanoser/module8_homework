const button = document.querySelector(".btn-gallery");
const grid = document.querySelector(".gallery-grid");
const loader = document.querySelector(".loader");

async function loadImages() {
    try {
        loader.style.display = "block";
        button.style.display = "none";
        grid.innerHTML = "";

        const response = await fetch(
            "https://dog.ceo/api/breeds/image/random/20"
        );
        const data = await response.json();

        data.message.forEach((url) => {
            const img = document.createElement("img");
            img.classList.add("gallery-image");
            img.src = url;
            grid.appendChild(img);
        });
    } catch (error) {
        console.error(
            "Ошибка при загрузке изображений! Установите и запуститеVPN!:",
            error
        );
        alert(
            "Произошла ошибка при загрузке изображений! Установите и запустите VPN!"
        );
    } finally {
        loader.style.display = "none";
        button.style.display = "block";
    }
}

button.addEventListener("click", loadImages);

document.getElementById("vpnButton").addEventListener("click", (e) => {
    e.stopPropagation();
    window.open(
        "https://adguard-vpn.com/ru/welcome.html",
        "_blank",
        "noopener noreferrer"
    );
});
