const playList = {
  playListId: "1",
  playListInfo: {
    title: "Enjoy selected tracks from cartoons!",
    coverImageUrl: "./assets/image/bremen.jpg",
    totalInfo: {
      totalTrackCount: 4,
      totalTracksDurationInSec: 733,
    },
  },

  tracks: [
    {
      trackId: "11",
      trackCoverImageUrl: "./assets/image/bremsml2.jpg",
      artistName: "Bremen Artists",
      trackTitle: "Nothing better    ",
      trackFileUrl:
        "./assets/sounds/bremenskie-muzykanty-nichego-na-svete-luchshe-netu.mp3",
      trackDurationInSec: 1,
      isHot: false,
    },
    {
      trackId: "12",
      trackCoverImageUrl: "./assets/image/cat.png",
      artistName: "Leopold the Cat",
      trackTitle: "Don't Worry, Be Happy  ",
      trackFileUrl: "./assets/sounds/leopold-dont-worry.mp3",
      trackDuration: 1,
      isHot: true,
    },
    {
      trackId: "13",
      trackCoverImageUrl: "./assets/image/fish.jpg",
      artistName: "Pretty Woman",
      trackTitle: "Stay with us    ",
      trackFileUrl: "./assets/sounds/ostavaysya-malchik-s-nami.mp3",
      trackDuration: 1,
      isHot: true,
    },
  ],
};

function renderPlayList(anyPlayList) {
  renderPlayListHeader(anyPlayList.playListInfo);
  renderTrack(anyPlayList.tracks[0]);
  renderTrack(anyPlayList.tracks[1]);
  renderTrack(anyPlayList.tracks[2]);
}

function renderPlayListHeader(anyPlayListInfo) {
  const playListTitleEl = document.createElement("h1");
  playListTitleEl.style.marginTop = "30px";
  playListTitleEl.style.marginBottom = "30px";
  playListTitleEl.append(anyPlayListInfo.title);
  document.body.append(playListTitleEl);

  const playListCoverEl = document.createElement("img");
  playListCoverEl.src = anyPlayListInfo.coverImageUrl;

  playListCoverEl.style.width = "350px";
  playListCoverEl.style.height = "200px";
  document.body.append(playListCoverEl);
}

function renderTrack(anyTrack) {
  const trackEl = document.createElement("div");
  const cover = document.createElement("img");
  cover.style.width = "80px";
  cover.src = anyTrack.trackCoverImageUrl;
  trackEl.append(cover);
  trackEl.append(anyTrack.artistName + ": " + anyTrack.trackTitle);

  const audio = document.createElement("audio");
  audio.src = anyTrack.trackFileUrl;
  audio.controls = true;
  trackEl.append(audio);
  document.body.append(trackEl);
}

renderPlayList(playList);
