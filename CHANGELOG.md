# Changelog

## 0.7.5 — 2026-11-16

Patch release for the Database module.

- Clicking a foreign-key value opened the related table with `id = …`, so a
  relation that points at another key (a `uid`, `uuid` or any non-`id` primary
  key) showed an empty page or the wrong row. The bridge now reports each
  reference as `{table, column}`: a real foreign key supplies the referenced
  column, and the `<name>_id` guess falls back to the related table's primary
  key. A `users.team_uid → teams.uid` relation opens `teams` filtered on
  `uid`.
- The Database tab itself is unchanged; only the target of the related-row
  link moved from a hardcoded `id` to the column the schema reports.

## 0.7.4 — 2026-11-16

Second patch for real projects: Forthy now reads a project without loading its
classes.

- 0.7.3 reported the real reason a project could not be read, and it turned out
  to be a compile-time fatal in a class the application itself never loads
  (`Declaration of App\Utils\Encrypter::supported(...) must be compatible
  with Illuminate\Encryption\Encrypter::supported(...)`). Model discovery no
  longer loads every class-shaped file under `app/`: it reads each file's
  tokens (namespace, imports, `extends`) and walks the parent chain statically,
  so only files that really declare a `Model`/`Authenticatable`/`Pivot`
  subclass are autoloaded.
- A model that is skipped this way is simply absent from the Models list; the
  project still connects, because the broken class is never executed.

## 0.7.3 — 2026-11-16

Patch release for connecting to a real Laravel project.

- Connecting failed for projects that keep helper files under `app/` (for
  example `app/Support/helpers.php` loaded from `composer.json`): the model
  scan loaded every PHP file under `app/`, included the helper file a second
  time and killed PHP with `Cannot redeclare function`. The dialog showed only
  "The bridge response contained no project info". Model discovery now reads
  each file's tokens and loads only files that declare the class their path
  maps to.
- A fatal error while the bridge reads a project is reported with its real
  message (`FatalError: …`) instead of an empty response.

## 0.7.2 — 2026-11-15

Build-only release: the app behaves exactly like 0.7.1.

- The macOS bundle is now built and published by the repository's release
  workflow on a GitHub-hosted arm64 runner instead of a local machine.
- The archive checksum differs from 0.7.1 because the binary was recompiled
  with the runner's Rust toolchain.
- Third-party license texts (`licenses/`, `LICENSE`, `THIRD-PARTY-NOTICES.md`)
  ship inside the archive, as in 0.7.1.

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
