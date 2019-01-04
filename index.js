document.addEventListener("DOMContentLoaded", func);
function func(){
    const RANDOM_FRIENDS_API_URL = "https://randomuser.me/api/?results=60";
    fetch(RANDOM_FRIENDS_API_URL)
        .then(resp => resp.json())
        .then(data => console.log(data));
}