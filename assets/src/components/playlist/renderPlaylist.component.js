import { renderPlayListHeader } from "./header/renderHeader.component.js";
import { renderPlayListTracks } from "./tracks/renderTracks.component.js";

export function renderPlayList(anyPlayList) {
  renderPlayListHeader(anyPlayList.playListInfo);
  renderPlayListTracks(anyPlayList.tracks);
}
