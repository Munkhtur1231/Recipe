require("@babel/polyfill");
import "../css/style.css";
import Search from "./model/Search";
import { elements, renderLoader, clearLoader } from "./view/base";
import * as searchView from "./view/searchView";
/**
 * Web app төлөв
 * - Хайлтын query, үр дүн
 * - Тухайн үзүүлж байгаа жор
 * - Лайкласан жорууд
 * - Захиалж байгаа жорын найрлагууд
 */

const state = {};

const controlSearch = async () => {
  // 1. Вэбээс хайлтын түлхүүр үгийг гаргаж авна.
  let query = searchView.getInput();
  if (query) {
    // 2. Шинээр хайлтын обьектийг үүсгэж өгнө.
    state.search = new Search(query);
    // 3. Хайлт хийхэд зориулж дэлгэцийг UI бэлтгэнэ.
    searchView.clearSearchQuery();
    searchView.clearSearchResult();
    renderLoader(elements.searchResultDiv);
    // 4. Хайлтыг гүйцэтгэнэ.
    await state.search.doSearch();
    // 5. Хайлтын үр дүнг дэлгэцэнд хэвлэнэ.
    clearLoader();
    if (state.search.result === void 0)
      alert(`Уучлаарай тийм хоол байхгүй байна.`);
    else searchView.renderRecipes(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});
