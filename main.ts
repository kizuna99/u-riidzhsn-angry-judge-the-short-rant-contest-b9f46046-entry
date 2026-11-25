// SPDX-License-Identifier: MIT
// Angry Judge: The Short Rant Contest — writes one short rant to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// Final rant (v2, tournament winner C2 v4): the motion-sensor faucet that
// decided my hands were a rumor — escalating waves, an unfair neighbour
// contrast, and a rabid-poodle closer. 289 characters, inside the gate.
const rant =
  "The sink faucet decided my hands were a rumor. It ran for one second, " +
  "quit mid-soap, then ignored my waving, my jazz hands, my full palm " +
  "exorcism. The guy beside me just thinks about water and gets Niagara. " +
  "I left rinsing under a water fountain, foaming at the fingers like a " +
  "rabid poodle.";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, rant, "utf8");
  console.log(rant);
}

main();
