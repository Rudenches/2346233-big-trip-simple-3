import {createElement} from '../render.js';

function createEventListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class EventList{
  #element = null;

  get template() {
    return createEventListTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.element = null;
  }
}
