function setSearchEngine() {
    let engine = document.querySelector("input[name=engine]:checked");
    let actions = {
        "google": "https://www.google.com/",
        "duckDuckGo": "https://www.duckduckgo.com/",
        "bing": "https://www.bing.com",
        "ask": "https://www.ask.com/web"
    };

    console.log(actions[engine.value])
    searchForm.setAttribute("action", actions[engine.value])
}

window.addEventListener("load", function () {

    let form = document.querySelector("form");
    form.addEventListener("submit", setSearchEngine());


});