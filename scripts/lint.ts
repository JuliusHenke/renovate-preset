// Validates the preset files with renovate-config-validator.
// patch.json and minor.json are packageRule fragments, so they are wrapped
// in a packageRules array first, because the validator rejects selectors
// at the top level of a config.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { $ } from "bun";

const fragments = ["patch.json", "minor.json"];
mkdirSync("out", { recursive: true });
const wrapped = fragments.map((file) => {
  const target = `out/${file}`;
  const { $schema, ...rule } = JSON.parse(readFileSync(file, "utf8"));
  writeFileSync(target, JSON.stringify({ $schema, packageRules: [rule] }, null, 2));
  return target;
});

await $`renovate-config-validator --strict default.json ${wrapped}`;
