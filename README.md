# renovate-preset

This preset can be used in [renovate](https://docs.renovatebot.com/) configuraiton files.

It includes:
- weekend schedule based on Europe/Berlin time
- pull request limits
- minimum stability days for updates
- basic grouping for non-major & major-dev updates

It can be used in your repository by referencing it in a `renovate.json` file:
```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "github>juliushenke/renovate-preset"
  ]
}
```
All configuration from the preset can be overriden or combined with new configuration. Learn more about it in the [official docs](https://docs.renovatebot.com/key-concepts/presets/).
