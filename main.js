import { FFmpeg } from "@ffmpeg/ffmpeg";

const ffmpeg = new FFmpeg();

const loadBtn = document.getElementById("loadBtn");
const status = document.getElementById("status");

loadBtn.onclick = async () => {
  status.textContent = "初期化中…";

  await ffmpeg.load({
    coreURL: "/ffmpeg/ffmpeg-core.js",
    wasmURL: "/ffmpeg/ffmpeg-core.wasm",
    workerURL: "/ffmpeg/worker.js",
  });

  status.textContent = "読み込み完了！";
};
