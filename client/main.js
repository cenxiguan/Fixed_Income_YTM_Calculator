import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.calc.onCreated(function calcOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.calc.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.calc.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
