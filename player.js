const playList = {
    playListId: '1',
    playListInfo:{
        title: "Hip-hop hits",
        coverImageUrl: 'cover.avif',
        totalInfo:{
            totalTrackCount: 4,
            totalTracksDurationInSec: 733
        },
    },
    
    tracks: [
        {
            trackId: '11',
            trackCoverImageUrl: 'eminem.jpg',
            artistName: 'Eminem',
            trackTitle: 'Rap God',
            trackFileUrl: 'eminem.mp3',
            trackDurationInSec: 1,
            isHot: false
        },
        {
            trackId: '12',
            trackCoverImageUrl: '50cent.jpg',
            artistName: '50Cent',
            trackTitle: 'In da Club',
            trackFileUrl: '50cent.mp3',
            trackDuration: 1,
            isHot: true
        },
    ]
};


function renderPlayList(anyPlayList) {
        renderPlayListHeader(anyPlayList.playListInfo)
        renderTrack(anyPlayList.tracks[0])
        renderTrack(anyPlayList.tracks[1])
}

function renderPlayListHeader(anyPlayListInfo) {
    const playListTitleEl = document.createElement('h1');
    playListTitleEl.append(anyPlayListInfo.title);
    document.body.append(playListTitleEl);

    const playListCoverEl = document.createElement('img');
    playListCoverEl.src = anyPlayListInfo.coverImageUrl;
    playListCoverEl.style.width = '150px';
    playListCoverEl.style.height = '150px'
    document.body.append(playListCoverEl);
}
function renderTrack(anyTrack) {
    const trackEl = document.createElement("div");
    const cover = document.createElement("img");
    cover.style.width = "50px"
    cover.src = anyTrack.trackCoverImageUrl;
    trackEl.append(cover);
    trackEl.append(anyTrack.artistName + ": " + anyTrack.trackTitle);

    const audio = document.createElement("audio");
    audio.src = anyTrack.trackFileUrl;
    audio.controls = true;
    trackEl.append(audio);
    document.body.append(trackEl);
}
renderPlayList(playList)