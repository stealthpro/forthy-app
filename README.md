# Forthy

**A native Laravel workbench for macOS.**

Run code in the real context of your Laravel app, inspect models, tables, routes and
config, stream Artisan and follow your logs — from a local project, Docker, SSH or a
Kubernetes pod.

## Download

[**Download the latest version**](https://github.com/stealthpro/forthy-app/releases/latest/download/Forthy-macos-aarch64.zip)
· [All releases](https://github.com/stealthpro/forthy-app/releases)

Apple Silicon (arm64), macOS 11 or later. The build is ad-hoc signed, so on first launch
use **right-click → Open**. Verify the download with the `.sha256` file from the release
page:

```bash
shasum -a 256 -c Forthy-macos-aarch64.zip.sha256
```

## What it does

- **Tinker** — write PHP and run it inside the running application, with structured
  dumps (models, collections, arrays, exceptions) and a query log with bindings and
  timing.
- **Snippets** — save and reuse code, tag destructive snippets, and keep a history of
  every run.
- **Artisan** — a searchable command list with favorites, streaming output and console
  tabs.
- **Models** — an Eloquent reference for the real app: attributes, casts, relations,
  methods and scopes.
- **Database** — browse tables with a typed filter builder, page through rows and export.
- **Routes and config** — the actual route table and configuration tree of the running
  app.
- **Logs** — follow channel and daily files, with parsed levels and stack traces.
- **Any target** — local PHP, Docker, SSH (key or password) and Kubernetes pods.
- **Safety** — destructive code is flagged and confirmed before it runs; secrets are
  never written to disk.

## Requirements

- macOS 11 or later (Apple Silicon)
- PHP 8.1+ on the host, or a Docker, SSH or Kubernetes target
- A Laravel 10–13 project

## Install

1. Download the zip from [Releases](https://github.com/stealthpro/forthy-app/releases).
2. Unzip it and open `Forthy.app` (right-click → Open on the first launch).
3. Add a connection: a local project, Docker, SSH or Kubernetes.

## Privacy

Connections, snippets and settings stay on your machine. SSH passwords live in memory
only. There is no telemetry, and your code is not sent anywhere.

## License

Proprietary. All rights reserved. The binary may be downloaded and used as-is;
redistribution and modification are not permitted. See [LICENSE](LICENSE).
Third-party components and their licenses are listed in
[THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).
