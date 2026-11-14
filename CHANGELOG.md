# Changelog

## 0.7.1 — 2026-11-14

Patch release with fixes from the post-release audit.

- The Database table list now follows the selected connection. Pages, SQL and
  export already did; the sidebar stayed on the default connection.
- A rejected SSH password now reaches the connection dialog instead of being
  replaced by a generic connection error.
- Release archives now include the third-party license texts (`licenses/`,
  `LICENSE`, `THIRD-PARTY-NOTICES.md`) next to `Forthy.app`.
- Documentation and site copy were corrected to match the shipped behaviour.

## 0.7.0 — 2026-11-14

First public release for macOS (Apple Silicon).

- Workbench: a warm PHP session, structured dumps and a query log with bindings.
- Snippets: saved code, favorites, import/export and the full run history.
- Artisan, Models, Database, Routes, Config and Logs modules.
- Local, Docker, SSH (key or password) and Kubernetes targets.
- A local SQLite library, connection import/export and the destructive-code guard.
- Ad-hoc signed build; proprietary license, third-party notices included.
