import Irys from "@irys/sdk";

export function getIrysInstance(url: string, token: string, key: object) {
  return new Irys({ url, token, key });
}
