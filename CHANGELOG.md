# Changelog

## 0.10.0 — 2026-11-17

Forthy can lock itself and individual connections — and the check is macOS, not a
password invented by the app.

- **Connection lock** — open **Edit connection → Lock** and turn on **Require Touch ID
  or the Mac password to open**. Before the project opens, macOS shows Touch ID, or the
  Mac account password when Touch ID is cancelled or unavailable. Forthy stores only a
  flag and never sees or keeps the password. The unlock lasts for that connection's
  session: closing it or quitting asks again, while browsing modules and tabs does not.
- **App lock** — **Settings → Security → Ask for Touch ID or the Mac password on
  launch**, also available in the application menu. At launch the connection library and
  workspace stay hidden behind a lock screen, and the last project reopens only after
  unlocking. **Lock Now** (`⌘⌃L`) locks immediately, an optional idle timer can lock
  after inactivity, and enabling the lock shows the system prompt once so it cannot lock
  you out by mistake.
- **Locked connections are marked** with a persistent red lock on the welcome card, the
  title-bar switcher, the connection menu and the Workbench connection card.
- **Nothing to forget** — there is no Forthy password, hash or reset: macOS performs the
  check through Touch ID or your account password. The lock protects against someone
  using your unlocked Mac; it is not disk encryption.
- The welcome connection cards lost their decorative arrow, so names get the space.

## 0.9.2 — 2026-11-17

A Database fix.

- **Database picker** — the connection picker now appears only when the project
  really uses more than one database: the default connection plus the connections
  that open and already hold tables. The stock `mysql`, `mariadb`, `pgsql` and
  `sqlsrv` entries of a fresh `config/database.php`, empty databases and a second
  name for the same database stay out; an empty database joins the list after its
  first migration.
- **Table list scope** — on MySQL a selected connection used to list tables from
  every user database on the server, because `getTables()` without a schema means
  "all non-system databases". The table list, table pages, SQL console and exports
  are now scoped to the selected connection's own database.

## 0.9.1 — 2026-11-17

Two small conveniences on top of 0.9.0.

- **Check for Updates…** is now in the application menu, right under About. It
  runs the same manual check as Settings → About and the command palette: a
  toast when the app is current, or the update dialog with release notes,
  download progress and the consent-to-install step. The background check, its
  six-hour interval and its setting are unchanged.
- **Pinned connections** on the Welcome screen no longer keep their pin, edit
  and delete buttons on screen. Like every other connection card, the buttons
  appear when the card is hovered or focused, so a pinned card is not busier
  than an ordinary one.

## 0.9.0 — 2026-11-17

Connecting to a cluster is now a matter of choosing what is actually there
instead of typing it from memory.

- **Cluster pickers** — the Kubernetes connection keeps its context, namespace,
  pod and container, but you no longer type them blind: clicking a field lists
  the real values, read with `kubectl` through the app's own transport, and each
  list has its own **Refresh**. The dialog opens every value even while the field
  holds one of them, keeps free text for a namespace that does not exist yet, and
  never overwrites what you configured — a value that is missing from the cluster
  stays, with a warning. The namespace is deliberately not prefilled, because
  `kubectl` usually prints `default`, which is rarely the namespace the app lives
  in.
- **Recreated pods** — a rollout replaces the pod name, and a saved connection
  used to keep pointing at the pod that no longer exists. When a connect fails
  because the saved pod is gone, Forthy lists the pods in the namespace, marks
  their status and containers, preselects one that is Running, and reconnects
  with the pod and container you pick. The connection's identity is the context
  plus namespace, so replacing a pod does not create a second connection for the
  same target.
- **Reconnect** — the session card's **Reconnect** now re-runs the connection for
  Kubernetes targets instead of only restarting the warm PHP process, so the
  replacement dialog appears there too. **Reset** still means "start the session
  from scratch".
- **Readable kubectl errors** — retries and raw stderr from `kubectl` are folded
  into one actionable sentence: unreachable API server, missing RBAC permission,
  bad certificate or a timeout, with the address that failed.

## 0.8.0 — 2026-11-17

Files, without leaving the app: browse the application's own filesystem disks,
preview what is inside, download anything and upload into the folder you mean.

- **Storage** is a new module. The sidebar lists every disk from
  `config/filesystems.php` — local, public, S3 and custom disks. A disk opens its
  own file-manager tab with breadcrumb navigation, folders first, sizes and
  modification times; the tab remembers the disk and folder and re-reads them on
  restore. A disk whose adapter cannot be built (for example the default `s3`
  disk without `league/flysystem-aws-s3-v3`) is marked unavailable with the
  reason instead of opening an empty view.
- **Previews** stay in a modal. Text and JSON render with a non-selectable
  line-number gutter and light JSON highlighting, CSV/TSV as a table or raw
  text, Excel `.xlsx` workbooks with a sheet picker, dates and formulae, Word
  `.docx` documents as clean HTML, PDFs in the system viewer, and images. CSV and
  XLSX tables keep their controls fixed while the grid scrolls, start at 300 rows
  and report "299 of 7,999 rows" with **Show 300 more** instead of stopping
  silently.
- **Download any file**, in 1 MB chunks through the bridge when the file is not
  on this machine; a local disk is copied directly.
- **Download any folder as an archive**: a `.zip` for local and Docker folders, a
  streamed `.tar.gz` for SSH, Kubernetes and container-only Docker, and a paged
  bridge zip for cloud disks. The destination is picked in the save panel before
  the progress dialog appears; archives are capped at 2 GB / 50,000 entries,
  report progress and can be cancelled.
- **Upload** with a destination-first dialog: the disk and the full folder path
  are visible before a file is chosen and can be changed in an inline folder
  tree. Drop several files at once; a file that would replace an existing one is
  marked before the upload starts, and the bridge refuses an unconfirmed
  overwrite, so a stale listing cannot replace data.
- Paths are never abbreviated: breadcrumbs and dialog subtitles draw every folder
  and wrap on deep paths.

## 0.7.7 — 2026-11-16

Maintenance release; the application is unchanged.

- CI, release and Pages workflows now use the Node 24 action releases:
  `actions/checkout@v7`, `actions/setup-node@v7`, `actions/upload-artifact@v7`,
  `actions/upload-pages-artifact@v5` and `actions/deploy-pages@v5`. GitHub's
  Node 20 deprecation warning is gone.
- Build artifacts uploaded by the release workflow are named after the tag
  (`forthy-vX.Y.Z`).
- This is the first release published after 0.7.6, so it is the one that
  exercises the in-app update path from 0.7.6.

## 0.7.6 — 2026-11-16

Forthy can update itself now.

- The app checks the public release feed four seconds after launch and then
  every six hours. A newer version appears as a notification over the status
  bar and as an update button in the titlebar; nothing is downloaded until you
  press **Update**, and the app restarts only after you confirm the install.
- Downloads are verified against the signing key compiled into the app, and the
  update archive is bound to the advertised version, so a tampered manifest
  cannot swap in an older build.
- Settings gains **Check for updates automatically** (Behavior) and **Check for
  updates** (About, also in the command palette). Automatic checks can be
  turned off; manual checks keep working.
- Release pages now also carry `Forthy.app.tar.gz` and `latest.json`. Users on
  0.7.5 and older keep using the zip for this one release; automatic updates
  start with 0.7.6.

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
