import { renderTrack } from "./track/renderTrack.component.js";
import { renderSeparator } from "../../common/renderSeparator.component.js";

export function renderPlayListTracks(tracks) {
  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    renderTrack(track);
    renderSeparator();
  }
}
