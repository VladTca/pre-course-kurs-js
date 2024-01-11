import { renderPlayList } from "./playlist/renderPlaylist.component.js";
import { renderSeparator } from "./common/renderSeparator.component.js";

export function renderPlaylists(inputPlayLists) {
  for (let i = 0; i < inputPlayLists.length; i++) {
    const playlist = inputPlayLists[i];
    renderPlayList(playlist);
    renderSeparator();
  }
}
