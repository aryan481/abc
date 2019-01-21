// custome code 

(function()
{
  var lkqdSettings = {
    pid: 51,
    sid: 977093,
    playerContainerId: '',
    playerId: '',
    playerWidth: 400,
    playerHeight: 225,
    execution: 'outstream',
    placement: 'slider',
    playInitiation: 'auto',
    volume: 0,
    trackImp: '',
    trackClick: '',
    custom1: '',
    custom2: '',
    custom3: '',
    pubMacros: '',
    dfp: true,
    lkqdId: new Date().getTime().toString() + Math.round(Math.random()*1000000000).toString(),
    supplyContentVideo: {
      url: '', clickurl: '', play: 'post'
    }
  };

  var lkqdVPAID;
  var creativeData = '';
  var environmentVars = { slot: document.getElementById(lkqdSettings.playerContainerId), videoSlot: document.getElementById(lkqdSettings.playerId), videoSlotCanAutoPlay: true, lkqdSettings: lkqdSettings };

  function onVPAIDLoad()
  {
    lkqdVPAID.subscribe(function() { lkqdVPAID.startAd(); }, 'AdLoaded');
  }

  var vpaidFrame = document.createElement('iframe');
  vpaidFrame.id = lkqdSettings.lkqdId;
  vpaidFrame.name = lkqdSettings.lkqdId;
  vpaidFrame.style.display = 'none';
  var vpaidFrameLoaded = function() {
    vpaidFrame.contentWindow.addEventListener('lkqdFormatsLoad', function() {
      lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
      onVPAIDLoad();
      lkqdVPAID.handshakeVersion('2.0');
      lkqdVPAID.initAd(lkqdSettings.playerWidth, lkqdSettings.playerHeight, 'normal', 600, creativeData, environmentVars);
    });
    vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
    vpaidLoader.setAttribute('async','async');
    vpaidLoader.src = 'https://ad.lkqd.net/vpaid/formats.js?pid=51&sid=977093';
    vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader);
  };
  vpaidFrame.onload = vpaidFrameLoaded;
  vpaidFrame.onerror = vpaidFrameLoaded;
  document.documentElement.appendChild(vpaidFrame);
})();

//intext desktop
(function()
{
  var lkqdSettings = {
    pid: 51,
    sid: 977093,
    playerContainerId: 'intext',
    playerId: '',
    playerWidth: '640',
    playerHeight: '360',
    execution: 'outstream',
    placement: 'incontent',
    playInitiation: 'auto',
    volume: 0,
    trackImp: '',
    trackClick: '',
    custom1: '',
    custom2: '',
    custom3: '',
    pubMacros: '',
    dfp: false,
    lkqdId: new Date().getTime().toString() + Math.round(Math.random()*1000000000).toString()
  };

  var lkqdVPAID;
  var creativeData = '';
  var environmentVars = { slot: document.getElementById(lkqdSettings.playerContainerId), videoSlot: document.getElementById(lkqdSettings.playerId), videoSlotCanAutoPlay: true, lkqdSettings: lkqdSettings };

  function onVPAIDLoad()
  {
    lkqdVPAID.subscribe(function() { lkqdVPAID.startAd(); }, 'AdLoaded');
    lkqdVPAID.subscribe(function() { lkqdVPAID.pauseAd(); }, 'AdNotViewable');
    lkqdVPAID.subscribe(function() { lkqdVPAID.resumeAd(); }, 'AdViewable');
    lkqdVPAID.subscribe(function() { setTimeout(function() { secondPlayer1565(); }, 5000); }, 'AdStopped');
  }

  var vpaidFrame = document.createElement('iframe');
  vpaidFrame.id = lkqdSettings.lkqdId;
  vpaidFrame.name = lkqdSettings.lkqdId;
  vpaidFrame.style.display = 'none';
  var vpaidFrameLoaded = function() {
    vpaidFrame.contentWindow.addEventListener('lkqdFormatsLoad', function() {
      lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
      onVPAIDLoad();
      lkqdVPAID.handshakeVersion('2.0');
      lkqdVPAID.initAd(lkqdSettings.playerWidth, lkqdSettings.playerHeight, 'normal', 600, creativeData, environmentVars);
    });
    vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
    vpaidLoader.setAttribute('async','async');
    vpaidLoader.src = 'https://ad.lkqd.net/vpaid/formats.js?pid=51&sid=977093';
    vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader);
  };
  vpaidFrame.onload = vpaidFrameLoaded;
  vpaidFrame.onerror = vpaidFrameLoaded;
  document.documentElement.appendChild(vpaidFrame);
})();



(function()
{
  var lkqdSettings = {
    pid: 51,
    sid: 977093,
    playerContainerId: '',
    playerId: '',
    playerWidth: 400,
    playerHeight: 225,
    execution: 'outstream',
    placement: 'slider',
    playInitiation: 'auto',
    volume: 0,
    trackImp: '',
    trackClick: '',
    custom1: '',
    custom2: '',
    custom3: '',
    pubMacros: '',
    dfp: true,
    lkqdId: new Date().getTime().toString() + Math.round(Math.random()*1000000000).toString(),
    supplyContentVideo: {
      url: '', clickurl: '', play: 'post'
    }
  };

  var lkqdVPAID;
  var creativeData = '';
  var environmentVars = { slot: document.getElementById(lkqdSettings.playerContainerId), videoSlot: document.getElementById(lkqdSettings.playerId), videoSlotCanAutoPlay: true, lkqdSettings: lkqdSettings };

  function onVPAIDLoad()
  {
    lkqdVPAID.subscribe(function() { lkqdVPAID.startAd(); }, 'AdLoaded');
  }

  var vpaidFrame = document.createElement('iframe');
  vpaidFrame.id = lkqdSettings.lkqdId;
  vpaidFrame.name = lkqdSettings.lkqdId;
  vpaidFrame.style.display = 'none';
  var vpaidFrameLoaded = function() {
    vpaidFrame.contentWindow.addEventListener('lkqdFormatsLoad', function() {
      lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
      onVPAIDLoad();
      lkqdVPAID.handshakeVersion('2.0');
      lkqdVPAID.initAd(lkqdSettings.playerWidth, lkqdSettings.playerHeight, 'normal', 600, creativeData, environmentVars);
    });
    vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
    vpaidLoader.setAttribute('async','async');
    vpaidLoader.src = 'https://ad.lkqd.net/vpaid/formats.js?pid=51&sid=977093';
    vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader);
  };
  vpaidFrame.onload = vpaidFrameLoaded;
  vpaidFrame.onerror = vpaidFrameLoaded;
  document.documentElement.appendChild(vpaidFrame);
})();

// intext mw
(function()
{
  var lkqdSettings = {
    pid: 51,
    sid: 977093,
    playerContainerId: 'intext',
    playerId: '',
    playerWidth: '',
    playerHeight: '',
    execution: 'outstream',
    placement: 'incontent',
    playInitiation: 'auto',
    volume: 0,
    trackImp: '',
    trackClick: '',
    custom1: '',
    custom2: '',
    custom3: '',
    pubMacros: '',
    dfp: false,
    lkqdId: new Date().getTime().toString() + Math.round(Math.random()*1000000000).toString()
  };

  var lkqdVPAID;
  var creativeData = '';
  var environmentVars = { slot: document.getElementById(lkqdSettings.playerContainerId), videoSlot: document.getElementById(lkqdSettings.playerId), videoSlotCanAutoPlay: true, lkqdSettings: lkqdSettings };

  function onVPAIDLoad()
  {
    lkqdVPAID.subscribe(function() { lkqdVPAID.startAd(); }, 'AdLoaded');
    lkqdVPAID.subscribe(function() { lkqdVPAID.pauseAd(); }, 'AdNotViewable');
    lkqdVPAID.subscribe(function() { lkqdVPAID.resumeAd(); }, 'AdViewable');
    lkqdVPAID.subscribe(function() { setTimeout(function() { secondPlayer1565(); }, 5000); }, 'AdStopped');
  }

  var vpaidFrame = document.createElement('iframe');
  vpaidFrame.id = lkqdSettings.lkqdId;
  vpaidFrame.name = lkqdSettings.lkqdId;
  vpaidFrame.style.display = 'none';
  var vpaidFrameLoaded = function() {
    vpaidFrame.contentWindow.addEventListener('lkqdFormatsLoad', function() {
      lkqdVPAID = vpaidFrame.contentWindow.getVPAIDAd();
      onVPAIDLoad();
      lkqdVPAID.handshakeVersion('2.0');
      lkqdVPAID.initAd(lkqdSettings.playerWidth, lkqdSettings.playerHeight, 'normal', 600, creativeData, environmentVars);
    });
    vpaidLoader = vpaidFrame.contentWindow.document.createElement('script');
    vpaidLoader.setAttribute('async','async');
    vpaidLoader.src = 'https://ad.lkqd.net/vpaid/formats.js?pid=51&sid=977093';
    vpaidFrame.contentWindow.document.body.appendChild(vpaidLoader);
  };
  vpaidFrame.onload = vpaidFrameLoaded;
  vpaidFrame.onerror = vpaidFrameLoaded;
  document.documentElement.appendChild(vpaidFrame);
})();
