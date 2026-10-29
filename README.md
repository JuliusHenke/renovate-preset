# renovate-preset

This preset can be used in [renovate](https://docs.renovatebot.com/) configuration files.

It includes:
- `config:best-practices` from Renovate
- weekend schedule based on Europe/Berlin time
- pull request limits
- minimum release age for updates: 7 days by default and for automerged updates, 3 days for minor updates (security fixes are never delayed)
- grouping of patch and minor updates, split into `frontend` and `backend` when the files live in those folders
- automerge for patch, pin and digest updates
- Node.js and `@types/node` limited to LTS majors
- labels by update type, and a `security` label on vulnerability fixes

Use it in your repository's `renovate.json` and pin a release tag:
```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>juliushenke/renovate-preset#v3.1.0"
  ]
}
```
All configuration from the preset can be overridden or combined with new configuration. Learn more about it in the [official docs](https://docs.renovatebot.com/key-concepts/presets/).

`default.json` references `patch.json` and `minor.json` with relative paths (`./patch`), so they resolve to the same tag as the preset. When you reference one of them from a repository, pin the tag too, for example `github>juliushenke/renovate-preset:minor#v3.1.0`.

Automerge relies on GitHub branch protection: mark the CI checks as required on the default branch, otherwise GitHub merges automerged PRs before the checks finish.

## Validate renovate config locally
Install [bun](https://bun.sh). Copy `.env.sample` to `.env` and put a read-only token in `RENOVATE_GITHUB_COM_TOKEN`. Then run:
```shell
bun install
bun --env-file=.env lint
```
