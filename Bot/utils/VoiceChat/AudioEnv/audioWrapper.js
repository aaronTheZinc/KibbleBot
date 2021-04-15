const { wrap, audioWrap, raw } = '@dogehouse/kabab' 
const { Cli }
const { connect: mediasoupConnect } = "@dogehouse/kebab/lib/audio/mediasoup-client";
const { Device } = require('mediasoup-client')

require('dotenv').config()
moduel.exports = async (room) => {
  const wrapper = wrap(await kibble.connect(process.env.DOGEHOUSE_TOKEN, process.env.DOGEHOUSE_REFRESH_TOKEN, {}));
  const audioWrapper = audioWrap(wrapper.connection);
  const device = new Device();



  const makeMicTrack = async () => {
    try {
      const mic = await navigator.mediaDevices.getUserMedia({ audio: true });

      return mic.getAudioTracks()[0];
    } catch {


      cantUseMic.className = "cant-use-mic";
      cantUseMic.textContent = "- can't use mic";
      currentRole.appendChild(cantUseMic);
    }
  };

  const playOutput = (track) => {
    const audio = new Audio();

    audio.srcObject = new MediaStream([track]);
    audio.play();
  };

  const unsubYjap = audioWrapper.subscribe.youJoinedAsPeer(async ({ routerRtpCapabilities, recvTransportOptions }) => {
    unsubYjap();

    await mediasoupConnect(
      wrapper.connection,
      routerRtpCapabilities,
      "output",
      recvTransportOptions,
      playOutput
    )(device);
    currentRole.textContent = "Listener";

    const unsubYbs = audioWrapper.subscribe.youBecameSpeaker(async ({ sendTransportOptions }) => {
      unsubYbs();

      await mediasoupConnect(
        wrapper.connection,
        routerRtpCapabilities,
        "input",
        sendTransportOptions,
        await makeMicTrack()
      )(device);

      currentRole.removeChild(button);
    });
  });

  const unsubYjas = audioWrapper.subscribe.youJoinedAsSpeaker(async ({
    routerRtpCapabilities,
    recvTransportOptions,
    sendTransportOptions
  }) => {
    unsubYjas();

    await mediasoupConnect(
      wrapper.connection,
      routerRtpCapabilities,
      "output",
      recvTransportOptions,
      playOutput
    )(device);

    await mediasoupConnect(
      wrapper.connection,
      routerRtpCapabilities,
      "input",
      sendTransportOptions,
      await makeMicTrack()
    )(device);
  });

  const extraInfo = await wrapper.query.joinRoomAndGetInfo();

}
