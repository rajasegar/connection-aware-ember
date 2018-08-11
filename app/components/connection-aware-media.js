import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  imageUrl: computed('connectionType', function() {
    let _connectionType = this.get('connectionType');
    let _imageSrc = this.get('imageSrc');
    switch(_connectionType) {
    case '3g':
      return _imageSrc.hiRes;
    case '2g':
      return _imageSrc.lowRes;
    default:
      return _imageSrc.lowRes;
    }
  }),
  mp4: computed.reads('videoSrc.mp4'),
  webm: computed.reads('videoSrc.webm'),

  componentType: computed('connectionType', function() {
    let _connectionType = this.get('connectionType');
    switch(_connectionType) {
    case 'offline':
      return 'place-holder';
    case '4g':
      return 'ember-video';
    case '3g':
      return 'ember-image';
    case '2g':
      return 'ember-image';
    default:
      return 'place-holder';
    }
  }),

  init() {
    this._super(...arguments);
    // check connection type before first render.
    if (navigator.connection && navigator.connection.effectiveType) {
      const connectionType = navigator.onLine ? navigator.connection.effectiveType : 'offline';
      console.log(connectionType);
      this.set('connectionType', connectionType);
    }
  },

  didInsertElement() {
    navigator.connection.addEventListener('change', this.setConnectionType.bind(this));
  },

  willDestroyElement() {
    navigator.connection.removeEventListener('change', this.setConnectionType.bind(this));
  },

  setConnectionType() {
    if (this.hasNetworkInfoSupport) {
      const connectionType = this.getConnectionType();
      console.log(connectionType);
      this.set('connectionType', connectionType);
    }
  },

  getConnectionType() {
    const connection = navigator.connection;
    // check if we're offline first...
    if (!navigator.onLine) {
      return 'offline';
    }
    // ...or if reduced data is preferred.
    if (connection.saveData) {
      return 'saveData';
    }
    return connection.effectiveType;
  },

  hasNetworkInfoSupport(){
    return navigator.connection && navigator.connection.effectiveType;
  }
});
