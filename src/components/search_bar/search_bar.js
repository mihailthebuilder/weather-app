import "./search_bar.scss";
import html from "./search_bar.html";

const loadSearchBar = () => {
  document.querySelector("main").insertAdjacentHTML("afterbegin", html);
  document.getElementById("search-bar").className = "shown";
};

export { loadSearchBar };
