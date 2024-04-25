//Проверка поддержки webp, добавление класа webp или no-webp для HTML

export function isWebp () {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        //Добавление класа webp или no-webp для HTML
        testWebP(function (support) {
            let className = support === true ? 'webp' : 'nowebp';
            document.documentElement.classList.add(className)
        });
}
