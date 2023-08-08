let btnStart = document.getElementById("btnStart");
let btnStop = document.getElementById("btnStop");

btnStart.onclick = async function() {
  try {
    window.alert("TEST");
    await wasm_bindgen(chrome.runtime.getURL('wasm_test_bg.wasm'));
    wasm_bindgen.start();
  } catch (err) {
    window.alert(`failed to execute script: ${err}`);
  }
}
