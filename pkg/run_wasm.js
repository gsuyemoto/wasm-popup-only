const runtime = chrome.runtime || browser.runtime;

async function run() {
  await wasm_bindgen(runtime.getURL('wasm_test_bg.wasm'));
  wasm_bindgen.start();
}

// run()