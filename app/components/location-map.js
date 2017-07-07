import Ember from 'ember';

export default Ember.Component.extend({
  // Ember tries to set that property with a service matching its name.
  maps: Ember.inject.service(),

  // didInsertElement is a component lifecycle hook.
  // This function runs during the component render,
  // after the component's markup gets inserted into the page.
  didInsertElement() {
    this._super(...arguments);
    let location = this.get('location');
    let mapElement = this.get('maps').getMapElement(location);
    this.$('.map-container').append(mapElement);
  }
});
