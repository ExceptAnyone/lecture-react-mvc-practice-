const tag = "[Controller]";
import SearchFormView from './views/SearchFormView.js';

export default class Controller {
  constructor(store, {SearchFormView}) {
    console.log(tag);

    this.store = store;

    this.SearchFormView = SearchFormView;

    this.subscribeViewEvents();
  }
  subscribeViewEvents() {
    this.SearchFormView.on('@submit', event => 
    this.search(event.detail.value))
    .on("@reset", () => this.reset());

    
  }
  search(keyword) {
    console.log(tag, keyword);
  }

  reset() {
    console.log(tag, 'reset');
  }
}
