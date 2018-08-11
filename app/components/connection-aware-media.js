import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  imageUrl: computed('connectionType', function() {
    let _connectionType = this.get('connectionType');
    return (_connectionType === '3g') ? this.get('highResImage') : this.get('lowResImage');

  }),
  ogg: computed.reads('oggVideo'),
  webm: computed.reads('webmVideo'),

  componentType: computed('connectionType', function() {
    let _connectionType = this.get('connectionType');
    switch (_connectionType) {
      case 'offline':
        return 'place-holder';
      case '4g':
        return 'ember-video';
      case '3g':
      case '2g':
        return 'ember-image';
      default:
        return 'place-holder';
    }
  }),

  init() {
    this._super(...arguments);
    // check connection type before first render.
    if (this.hasNetworkInfoSupport()) {
      const connectionType = navigator.onLine ? navigator.connection.effectiveType : 'offline';
      console.log(connectionType); // eslint-disable-line
      this.set('connectionType', connectionType);
    }
  },

  didInsertElement() {
    if (this.get('autoUpdate') && this.hasNetworkInfoSupport()) {
      navigator.connection.addEventListener('change', this.setConnectionType.bind(this));
    }

  },

  willDestroyElement() {
    if (this.get('autoUpdate') && this.hasNetworkInfoSupport()) {
      navigator.connection.removeEventListener('change', this.setConnectionType.bind(this));
    }
  },

  setConnectionType() {
    if (this.hasNetworkInfoSupport) {
      const connectionType = this.getConnectionType();
      console.log(connectionType); // eslint-disable-line
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

  hasNetworkInfoSupport() {
    return navigator.connection && navigator.connection.effectiveType;
  }
});
