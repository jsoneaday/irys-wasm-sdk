mod utils;
use wasm_bindgen::prelude::*;
use serde::{Deserialize, Serialize};

#[wasm_bindgen(module = "/src/irys_interface.js")]
extern "C" {
    pub type Irys;

    #[wasm_bindgen(constructor)]
    pub fn new(params: IrysConstructorConfig) -> Irys;
}

#[wasm_bindgen]
#[derive(Serialize, Deserialize)]
pub struct IrysConstructorConfig {
    url: Option<String>,
    token: Option<String>,
    key: Option<Vec<u8>>
}

#[wasm_bindgen]
pub fn connect_to_irys(url: Option<String>, token: Option<String>, key: Option<Vec<u8>>) -> Irys {
    let irys = Irys::new(IrysConstructorConfig {
        url, token, key
    });
    //println!("irys {}", irys);
    irys
}
