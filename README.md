# connection-aware-media

In this repo, we have  Ember Components serving media content such as images and videos based on the network bandwidth of the users. For this, we will make use of the Network Information API provided by the browsers. Currently, the only browser that supports this api is Chrome, soon we are expecting that all the browsers will start supporting the network information api.

This component is purely based on an existing tutorial by Max Böck, a frontend web developer based in Vienna, Austria. Max has done the components in React, this is an Ember port of the same component.

The Ember component will render different elements based on the user's connection quality:

offline: placeholder with alt text
2g: low resolution image
3g: high resolution image
4g: video player

There is a [blog post](http://hangaroundtheweb.com/2018/08/creating-connection-aware-ember-media-components/) describing
the component creation for this repository.


## Usage
In your templates, use the component as following:

```hbs
{{connection-aware-media
  highResImage=highResImage
  lowResImage=lowResImage
  oggVideo=oggVideo
  webmVideo=webmVideo
  alt="Tomster The Ember Mascot"
  autoUpdate=true
}}
```

To pass the property values, use an Ember controller or a parent component as:

```js
import Controller from '@ember/controller';

export default Controller.extend({

    lowResImage: 'https://raw.githubusercontent.com/rajasegar/connection-aware-ember/master/public/assets/img/Tomster-Logo-lowRes.png',
    highResImage: 'https://raw.githubusercontent.com/rajasegar/connection-aware-ember/master/public/assets/img/Tomster-Logo.png',

    oggVideo: 'http://download.blender.org/peach/trailer/trailer_400p.ogg',
    webmVideo: 'http://dl3.webmfiles.org/big-buck-bunny_trailer.webm'

});

```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd connection-aware`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
