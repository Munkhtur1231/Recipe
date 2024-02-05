require("@babel/polyfill");
import "../css/style.css";
import Search from "./model/Search";

let search = new Search("pasta");
search.doSearch().then((r) => console.log(r));
