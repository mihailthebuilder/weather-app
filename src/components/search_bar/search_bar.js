import "./search_bar.scss";
import html from "./search_bar.html";
import { delay } from "../../common/common.js";

const loadSearchBar = async () => {
  document.querySelector("main").insertAdjacentHTML("afterbegin", html);

  setTimeout(() => {
    document.getElementById("search-bar").className = "visible";
  }, 0);

  await delay(1000);
};

export { loadSearchBar };
