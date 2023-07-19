const tag = "[Controller]";
import SearchFormView from './views/SearchFormView.js';

export default class Controller {
  constructor(store, {SearchFormView}) {
    console.log(tag);
    this.store = store;

    this.SearchFormView = SearchFormView;
  }
}
