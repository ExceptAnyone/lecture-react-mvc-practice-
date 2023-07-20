import SearchFormView from "./views/SearchFormView.js";
import SearchResultView from "./views/SearchResultView.js";
import Store from './Store.js';
import TabView from './views/TabView.js';

const tag = "[Controller]";

export default class Controller {
  constructor(store, { SearchFormView, searchResultView, tabView, }) {
    console.log(tag);

    this.store = store;

    this.SearchFormView = SearchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;

    this.subscribeViewEvents();
    this.render();
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
      this.tabView.hide();
      this.searchResultView.show(this.store.searchResult)
      return;
    }
    
    this.tabView.show();
    this.searchResultView.hide();
  }
}
