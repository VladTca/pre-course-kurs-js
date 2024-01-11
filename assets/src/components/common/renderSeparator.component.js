export function renderSeparator() {
  const separatorEl = document.createElement("hr");
  separatorEl.style.border = "1px dashed red";
  document.body.append(separatorEl);
}
