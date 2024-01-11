export function renderTrack(anyTrack) {
  const trackEl = document.createElement("div");

  const trackTitleEl = document.createElement("div");
  if (anyTrack.isHot) trackEl.append("🔥`");
  trackEl.append(anyTrack.artistName + ": " + anyTrack.trackTitle);
  trackEl.append(trackTitleEl);

  const coverEl = document.createElement("img");
  coverEl.style.width = "50px";
  coverEl.src = anyTrack.trackCoverImageUrl;
  coverEl.style.border = "4px solid green";
  trackEl.append(coverEl);

  const audio = document.createElement("audio");
  audio.src = anyTrack.trackFileUrl;
  audio.controls = true;
  trackEl.append(audio);
  document.body.append(trackEl);
}
