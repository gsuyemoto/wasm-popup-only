use wasm_bindgen::prelude::*;
use web_sys::console;

#[wasm_bindgen]
pub fn start() {
    console::log_1(&"Testing!".into());
}
