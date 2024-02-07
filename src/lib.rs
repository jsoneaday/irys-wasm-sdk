mod utils;
use wasm_bindgen::prelude::*;
use std::fmt;
// use js_sys;

#[wasm_bindgen(module = "/src/irys_interface.js")]
extern "C" {
    pub type Irys;

    #[wasm_bindgen(constructor)]
    pub fn new(url: Option<String>, token: Option<String>, key: Option<String>) -> Irys;
}

#[wasm_bindgen]
pub fn connect_to_irys() -> Irys {
    let irys = Irys::new(None, None, None);
    //println!("irys {}", irys);
    irys
}

impl fmt::Display for Irys {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        
        Ok(())
    }
}