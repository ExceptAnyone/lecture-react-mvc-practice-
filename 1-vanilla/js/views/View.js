import { emit, on } from "../helpers.js";

const tag = "[View]";

export default class View {
  constructor(element) {
    

    if (!element) throw "no element";

    this.element = element;
    this.originalDisplay = this.element.style.display || "";

    return this;
  }

  hide() {
    this.element.style.display = "none";
    return this;
  }

  show() {
    this.element.style.display = this.originalDisplay;
    return this;
  }

  on(eventName, handler) { //헬퍼함수
    on(this.element, eventName, handler);
    return this;
  }

  emit(eventName, data) { //헬퍼함수
    emit(this.element, eventName, data);
    return this;
  }
}
