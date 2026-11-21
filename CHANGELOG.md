# Changelog

## 0.12.16 — 2026-11-21

Storage can now browse the whole project folder, not only the application's disks.

- **Project files** — a new read-only entry at the top of the Storage sidebar opens the
  project itself: one tab per project with breadcrumb navigation, folders first, sizes and
  modification times. Any file is previewed in the same modal as a disk file and downloaded
  to this Mac; nothing is ever written, uploaded, renamed or deleted there.
- **Works on every connection** — a local project (and Docker with a project folder) is
  listed on this Mac, while an SSH, Kubernetes or container-only Docker project is listed
  and read by PHP inside the runtime. It does not need the warm Laravel bridge, so a dead
  session or an unreadable disk does not stop it.
- **Stays safe** — symbolic links are never followed, `.env` files stay hidden (the
  Workbench Environment modal is still their only viewer), `..` and absolute paths are
  refused, and one folder shows at most 2,000 entries.

## 0.12.15 — 2026-11-21

Every open tab now survives a restart, and installing an update no longer drops you on the
start page.

- **Artisan console tabs come back** — a console tab was the only kind that closed on restart
  or reconnect, because only its live process existed and that cannot be saved. The tab is now
  stored by its run, and after a restart it shows the same command with the output and exit
  status from the Artisan history; **Run again** works on it. A command that was still running
  when the app closed opens as **interrupted**, with a note that its output was not kept,
  instead of a stale or empty result.
- **A reconnect keeps live consoles** — reconnecting the same connection re-reads the
  workspace but leaves the consoles that are still streaming (and the active tab) in place.
- **Installing an update returns to the same workspace** — **Restart and install** is not a
  quit, so the relaunched app reopens the connection that was open, with its tabs. If the
  start page was showing at that moment, it comes back to the start page; a failed install
  leaves the next normal launch unchanged.
- **The corner notice steps aside** — while the update dialog is open, the "Forthy … is
  available" notification no longer renders behind it.

## 0.12.14 — 2026-11-19

The footer buttons on a connection card now sit in the same corner as the pin.

- **Footer icons moved to the corner** — edit and delete keep the same 5–6 px inset from the
  card border as the pin in the top-right corner, instead of sitting further in along a
  centred footer. The footer line moves down with them, and a hovered icon stays inside the
  rounded corner.

## 0.12.13 — 2026-11-19

The connection cards on the start page are easier to scan, and hovering one no longer hides
its own title.

- **Actions left the title** — hovering a card used to paint pin, edit and delete on top of
  the connection name. Edit and delete now sit in the card footer, and the pin has its own
  corner.
- **The pin moved to the top-right corner** — a pinned card keeps a visible accent pin there
  and one click unpins it; hovering any other card reveals the pin in the same corner, so
  pinning no longer needs hunting in the footer. No lone icon floats at the end of a row.
- **Names and targets read better** — the name is slightly larger, may wrap to two lines and
  keeps the full value in a tooltip; the target line (host, container, pod or path) is
  brighter with a tooltip, and the footer shows the kind with its colour dot and when the
  connection was last opened, with the exact date in a tooltip. Cards in a row line up their
  footers.
- **Kinds and pinning are visible** — the kind tile is tinted per target (local, SSH, Docker,
  Kubernetes), and a pinned card gets a violet border and a soft tint.
- **Keyboard fix** — pressing Enter on a card action no longer opens the connection too.

## 0.12.12 — 2026-11-19

The snippet header is cleaner, and Forthy reopens in the window where you left it.

- **No duplicate creation button** — the `+` at the top of the Snippets panel duplicated
  the **PHP** button inside it. Creating a snippet still works through the **PHP** and
  **SQL** buttons, and import/export keep their icons.
- **No "local" marker** — the header read "N snippets · local", but the library always
  lives in Forthy's own local database and is shared by every connection and project, so
  the suffix told nothing.
- **The window is remembered** — Forthy reopens with the same size and position, on the
  same monitor, in fullscreen or maximized mode if that is how you left it. If that
  monitor is no longer connected, the window opens on the main display instead of
  off-screen.

## 0.12.11 — 2026-11-19

Long-running work is never cut off by the app, a running tab cannot be lost, and SQL
results and snippets get the controls they were missing.

- **Runs finish on their own** — PHP code, SQL queries, exports, **Show more** and Artisan
  commands no longer carry a built-in deadline: a script can run for hours, like
  `php artisan tinker`. **Stop** still ends it instantly. Timeouts stay available as
  optional settings under Settings → Runner; empty (the default) means no limit, and an
  existing install keeps them empty after the update.
- **A running tab is protected** — it shows a spinner and cannot be closed; closing the
  window, quitting or switching connections warns once and stops the work first. SQL tabs
  got their own **Stop**.
- **SQL results are complete** — a statement shows its first 500 rows with **Show more**,
  **Copy** puts every row on the clipboard and **Export** writes every row, so a big
  result is no longer silently truncated.
- **Snippets have groups and labels** — organise the library into collapsible folders and
  tag snippets with up to eight labels; label chips filter the list (picking several
  requires all of them) and labels used before are offered for reuse.
- **Tab context menu** — right-click a tab for Close, Close other tabs, Close all tabs,
  Close unmodified tabs, Close tabs to the left and Close tabs to the right. Escape, a
  click anywhere else in the app and a click on another tab all close it.
- **Wider Kubernetes fields** — the context, namespace, pod and container fields use the
  full dialog width now, so a long pod name is readable in the field and in the list.
- **Instant start** — the window paints before the project index is built and the project
  lists fill in a moment later. New defaults: module names under the rail icons on, reopen
  the last connection off, automatic update checks on.
- **Environment works with a cached config** — `APP_LOCALE=en` and the other connection
  variables reach the application even when `bootstrap/cache/config.php` exists, without
  changing other cached values, and `config:cache`, `config:clear` and `optimize` run from
  Forthy keep the project's own cache file.

## 0.12.10 — 2026-11-18

Update checks always offer the newest release, and environment variables get the right
Laravel name.

- **Fresh update offer** — pressing **Check for updates**, or clicking the update bell or
  notice, now asks the release feed again instead of reopening the release it already knew
  about. A newer release replaces the old offer and the dialog switches to it; if the feed
  is already up to date, the stale offer is dropped. While the check runs, **Download** is
  disabled and shows a "Checking…" state. A download that already started is never
  discarded by a check.
- **`APP_LOCALE` hint** — environment variables are process variables, so Laravel reads
  its own names: use `APP_LOCALE=en` to switch the application language, because the shell
  `LOCALE` variable is ignored by Laravel. The connection and Artisan run dialogs now say
  so, and the name placeholder is `APP_LOCALE`.

## 0.12.9 — 2026-11-18

SQL results go straight into a spreadsheet, connections get CLI environment variables,
and Artisan commands link to Tinker and their source.

- **Copy a SQL result** — every read result now has **Copy** next to **Export**. It puts
  the rows currently shown on the clipboard as a tab-separated table with a header row,
  ready to paste into Excel or Google Sheets: `NULL` becomes an empty cell and a tab or a
  line break inside a value is flattened, so nothing shifts a column. Copy uses the
  500-row preview; **Export** still reads up to 10,000 rows.
- **Environment variables per connection** — the connection dialog has an
  **Environment variables** section, like the ENVIRONMENT VARIABLES of a PhpStorm CLI
  interpreter: name/value rows such as `LOCALE=en`. They are exported into every PHP,
  Artisan, Tinker and bridge process of that connection, including **Test connection**.
  They are plain text and are not part of the connection's identity, so editing them
  updates the same connection.
- **Per-run overrides** — the Artisan run dialog shows the connection variables and lets
  you change, add or remove them for that single run. The saved connection stays
  untouched, and the console tab marks the run with an `N env` badge. **Run again**
  repeats the same environment.
- **Open in Tinker / Open source** — the Artisan dialog can prepare an
  `Artisan::call('...', [...])` snippet with the current arguments, options and flags in a
  new PHP tab (with `Artisan::output()` dumped), or open the file where the command is
  declared at its declaration line — `routes/console.php` for a closure command, the
  vendor file for a framework command.
- **Moving connections** — environment variables travel with a connection file behind
  their own checkbox, because the values are plain text and may contain a token.

## 0.12.8 — 2026-11-18

Every tab closes now, and an empty workbench has a place of its own.

- **Close every tab** — closing the last tab leaves the workbench empty instead of
  immediately opening a new `Untitled` tab, so `⌘W` works on the final tab too. The
  status bar simply has no active tab to show.
- **Empty workbench** — the empty area renders a CSS-only canvas in the app's style:
  aurora gradients, a dot grid and a soft glow follow the theme, with the project name
  and the ways back in — **New PHP tab** (`⌘T`), **SQL console** and **Quick open**
  (`⌘P`) — plus a `⌘K` command-palette hint. The actions reflow on narrow windows, and
  the background stops drifting with Reduce Motion.
- **The empty state survives a restart** — the workspace saves an empty tab list as a
  valid snapshot, so quitting with nothing open reopens the same canvas instead of a
  starter tab. A connection that has never been opened still starts from its welcome
  tab.

## 0.12.7 — 2026-11-18

The SQL workbench: snippets in two languages, scripts in the console, exportable results.

- **PHP and SQL snippets** — the Snippets module has separate **PHP** and **SQL** creation
  buttons, and every saved snippet carries a language chip. A SQL snippet opens in the SQL
  console and **Save** on the console updates that snippet instead of asking for a name
  again. The tab strip's `+` now opens a chooser (**PHP code** / **SQL console**), and tabs
  show the same PHP/SQL chip as the lists.
- **Scripts in one run** — the SQL console runs a whole script: statements are split on
  top-level `;` outside quotes and comments, and every statement is classified before any of
  them runs, so a `-- note` before `select` no longer demands **Allow writes** and a
  mixed script either passes the guard completely or does not run at all. Each statement
  gets its own result set with a heading, timing and row count.
- **Export a result** — every read result has an **Export** menu with CSV, Excel and JSON.
  The export re-reads only that read-only statement (up to 10,000 rows, while the console
  shows 500), writes a real `.xlsx` workbook, and is never offered for a write statement.
- **Duplicate column names** — a join that returns two `status` columns keeps both cells;
  headers are qualified with the source table (`users.id`, `articles.id`) and a duplicate
  without a table source falls back to `status (2)`. CSV/Excel headers and JSON keys follow
  the same rule.
- **SQL runs in History** — console runs are recorded with their SQL result and a `SQL`
  chip next to PHP runs, and reopen in a SQL console tab with the stored grid.
- **Tab-bar actions** — **Save** and **Run** for a SQL tab live in the tab strip, like a
  code tab; the tab shows the unsaved dot and closing a dirty console asks before discarding.
- **Scheduler environments** — a command registered with `->environments([...])` keeps its
  cron expression but gets an amber marker and `not in <env>` when the connected environment
  is excluded, and its tooltip (and the Artisan dialog) names the environments where it does
  run.
- README screenshots were re-captured for the new language chips and the SQL console.

## 0.12.6 — 2026-11-18

Small fixes across the lists and the layout.

- **Full Artisan names** — a long command name no longer ends in an ellipsis: it wraps onto
  a second line, and the row tooltip carries the full name (in the command list, in
  favorites and in Recent runs). The hover actions moved into an overlay above the first
  line, so names and descriptions get the whole row width.
- **Update bell on the start page** — the bell shown while a release is waiting now sits in
  the start page topbar next to the version too, so an update found before connecting stays
  one click away after the persistent notice is dismissed with **Later**.
- **Snippet copy picker** — "copy snippet to another connection" lists every other saved
  connection (name plus its kind and path) instead of asking for a name typed from memory;
  arrows/Enter pick, typing filters.
- **Resizable sidebar** — drag the splitter between the sidebar and the tabs to resize it
  (232–560 px, the workbench keeps at least 640 px), double-click to restore the default,
  and the width is remembered between launches.
- The Artisan README screenshot was re-captured (descriptions keep more text now); no other
  frame changed.

## 0.12.5 — 2026-11-18

Long values in the `.env` viewer wrap cleanly.

- **Wrapping** — a value that does not fit now fills the rest of its line and continues at
  the beginning of the next line. The key and `=` never break, so `OPENAI_API_KEY` no
  longer splits into `OPENAI_API_K` / `EY`.
- **Copy stays clear** — the hover Copy chip keeps its reserved column and sits on the
  first line of a wrapped row, so it never covers the value.
- No new screenshots: no README or site frame shows the `.env` modal.

## 0.12.4 — 2026-11-18

The Workbench `.env` viewer has a find bar.

- **Find in `.env`** — the read-only modal now carries the same search field as a Storage
  preview: a match counter, up/down arrows, `Enter`/`Shift+Enter` wrap-around, `⌘F` and a
  clear action. Every hit is highlighted — including a query that spans the `=` — and the
  active hit scrolls into view.
- **Searches what you see** — matches are counted against the rows as rendered, so a
  masked secret is not searchable until **Show secrets** is on. A query that finds nothing
  while secrets are hidden explains the masking instead of naming a hidden value.
- No new screenshots: no README or site frame shows the `.env` modal.

## 0.12.3 — 2026-11-18

The Workbench shows the project's git status.

- **Git card** — the first module now lists whether the project is a git repository, the
  current branch (or the detached commit), the tracked upstream and how far it is ahead or
  behind, plus how many files are staged, unstaged, untracked or conflicted.
- **One read, no Laravel boot** — the card is read with a single `git status` on the host
  for Local and Docker-with-folder connections and inside the runtime for SSH, Kubernetes
  and container-only Docker. A folder that is not a repository (or a runtime without git)
  is shown as a note, not an error, and the refresh button re-reads it.
- **Ownership hint** — when git refuses a repository that belongs to another user, the
  card names the `git config --global --add safe.directory <path>` command instead of
  repeating git's raw message.
- The Workbench screenshot was re-taken for the new card; the version stays hidden in
  every frame.

## 0.12.2 — 2026-11-18

The titlebar shows the running version and looks for updates more often.

- **Version in the titlebar** — the running version now sits next to the settings gear,
  where the `+` shortcut used to be. New connection is still one click away in the
  connection switcher menu (and the command palette), so nothing was lost.
- **Update bell** — while an update is waiting, a bell with an accent dot appears next to
  the version; its tooltip names the new version and a click opens the update dialog.
- **Hourly checks** — Forthy checks the release feed once an hour instead of every six
  hours; the first check still runs four seconds after launch, and choosing **Later** is
  not repeated while the same version is pending.
- Screenshots were re-taken for the new titlebar, with the version hidden in every frame,
  so a future version bump alone never needs new captures.

## 0.12.1 — 2026-11-18

The window drags from the start page again.

- **Start page** — the Welcome topbar and the startup splash screens are real window drag
  regions, so the window moves before a project is opened. They previously carried only the
  Electron `-webkit-app-region` rule, which the WebView ignores, so dragging worked only
  after a connection had opened.
- **Nothing else changes** — the buttons and the search field on the topbar stay
  clickable, double-clicking the topbar toggles maximize, and no screen looks different, so
  the screenshots are unchanged.

## 0.12.0 — 2026-11-18

Every text-like preview can be searched in place.

- **Find in a preview** — a field in the preview toolbar highlights every match and shows
  the position (`3 / 27`). The up/down arrows, or `Enter`/`Shift+Enter`, move between
  matches and wrap around; `⌘F`/`Ctrl+F` focuses the field and × clears the query.
- **Every text-like format** — plain text and markup (`.txt`, `.md`, `.yaml`, `.xml`,
  `.log`, …), pretty-printed JSON with its token colours intact, CSV/TSV in both Table and
  Raw views, each sheet of an Excel workbook, and Word `.docx` documents. PDFs, images and
  binaries have no find bar.
- **The count follows the view** — Table counts cells while Raw counts the raw document;
  Excel counts the active sheet. Switching views keeps the query and re-counts the hits.
- **Bounded** — matching is literal and case-insensitive, and a very common query stops at
  the first 2,000 matches (`2,000+`) so a 1 MB preview cannot freeze the window.
- The active match scrolls into view and is drawn solid; the other hits keep a softer
  highlight, and JSON token colours survive the highlight.

## 0.11.0 — 2026-11-17

Storage can delete, and the Workbench shows the project's `.env` without turning it into
an editor tab.

- **Delete a file** from its row or from the preview modal. Every deletion asks first;
  there is no one-click delete anywhere in the module.
- **Delete a folder** after a confirmation that counts what goes with it: files, folders
  and their total size, plus how many `.gitignore`-style placeholders disappear with the
  tree. Recursion exists only through that separate, confirmed command, so deleting a
  file can never remove a tree, and the disk root is never deletable.
- **System files stay protected** — `.gitignore`, `.gitkeep`, `.gitattributes`, any
  `.env*`, `.htaccess`, `.htpasswd`, `.user.ini` and `web.config` show a lock instead of a
  delete action, and the bridge refuses them even if the UI is bypassed. `.DS_Store` and
  `Thumbs.db` remain deletable clutter.
- **`.env` in a modal** — the Runtime card in Workbench opens the project's `.env`, with
  `.env.example` as a reference when there is none. Comments and blank lines stay intact,
  values of secret-looking keys are masked until **Show secrets**, every row has a **Copy**
  action for its value, and the file is read from the host for Local and
  Docker-with-folder connections and inside the runtime otherwise. Its contents never
  enter the bootstrap, a workspace, a log or a code tab.
- The `.env` rows are one aligned line grid — numbers and code share the same line — and
  the per-row copy action is a labelled chip instead of a bare icon.

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
