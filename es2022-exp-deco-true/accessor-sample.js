"use strict";
class AccessorSample {
  #somethingProperty_accessor_storage = "";
  get somethingProperty() {
    return this.#somethingProperty_accessor_storage;
  }
  set somethingProperty(value) {
    this.#somethingProperty_accessor_storage = value;
  }
}
