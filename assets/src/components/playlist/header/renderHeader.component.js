export function renderPlayListHeader(anyPlayListInfo) {
  const playListTitleEl = document.createElement("h1");
  playListTitleEl.append(anyPlayListInfo.title);
  document.body.append(playListTitleEl);

  const playListCoverEl = document.createElement("img");
  playListCoverEl.src = anyPlayListInfo.coverImageUrl;
  playListCoverEl.style.width = "150px";
  playListCoverEl.style.height = "150px";
  document.body.append(playListCoverEl);
}
