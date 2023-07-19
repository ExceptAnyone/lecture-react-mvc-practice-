const tag = "[Controller]";
import SearchFormView from "./views/SearchFormView.js";
import SearchResultView from "./views/SearchResultView.js";
import Store from './Store.js';

export default class Controller {
  constructor(store, { SearchFormView, searchResultView }) {
    console.log(tag);

    this.store = store;

    this.SearchFormView = SearchFormView;
    this.searchResultView = searchResultView;

    this.subscribeViewEvents();
  }
  subscribeViewEvents() {
    this.SearchFormView
    .on("@submit", (event) => this.search(event.detail.value))
    .on("@reset", () => this.reset());
  }
  search(searchKeyword) {
    console.log(tag, "search",searchKeyword);
    this.store.search(searchKeyword);
    this.render()
  }

  reset() {
    console.log(tag, "reset");
    this.store.searchKeyword = "";
    this.store.searchResult = [];
    this.render();
  }

  render() {
    if(this.store.searchKeyword.length > 0) {
      this.searchResultView.show(this.store.searchResult)
      return
    }
    
    this.searchResultView.hide();
  }
}
