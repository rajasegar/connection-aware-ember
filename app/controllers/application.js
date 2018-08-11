import Controller from '@ember/controller';

export default Controller.extend({
  imageSrc : {
    lowRes: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1256430/chewie.lowres.jpg',
    hiRes: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1256430/chewie.hires.jpg'
  },
   videoSrc :  {
    mp4: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1256430/chewie.mp4',
    webm: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1256430/chewie.webm'
  }
});
