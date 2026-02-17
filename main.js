import { FFmpeg } from "https://unpkg.com/@ffmpeg/ffmpeg@0.12.6/dist/esm/index.js";
import { fetchFile } from "https://unpkg.com/@ffmpeg/util@0.12.1/dist/esm/index.js";

const loadBtn = document.getElementById("load");
const bar = document.getElementById("bar");

const ffmpeg = new FFmpeg();

loadBtn.onclick = async () => {
  loadBtn.disabled = true;

  await ffmpeg.load({
    coreURL: "https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm/ffmpeg-core.js",
    wasmURL: "https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm/ffmpeg-core.wasm",
  });

  ffmpeg.on("progress", ({ progress }) => {
    bar.style.width = Math.round(progress * 100) + "%";
  });

  console.log("FFmpeg loaded");
};
