# Third-party notices

Forthy bundles third-party software. This file lists the components that ship with
the application and the license family each one uses. Full license texts travel
with the release archive; the list below is the authoritative inventory.

> **Status: draft.** The complete per-crate text bundle (`licenses/` in the release
> archive) is generated before the first public binary release. Until then this
> inventory is accurate at the component level only.

## Bundled at runtime

| Component | Version | License |
| --- | --- | --- |
| Tauri | 2.x | MIT OR Apache-2.0 |
| React / React DOM | 19.x | MIT |
| Monaco Editor | 0.52.x | MIT |
| `@tauri-apps/api`, `@tauri-apps/plugin-dialog`, `@tauri-apps/plugin-opener` | 2.x | MIT OR Apache-2.0 |
| `lucide-react` | 0.5xx | ISC |
| `@fontsource-variable/inter` | 5.x | SIL Open Font License 1.1 |
| `@fontsource-variable/jetbrains-mono` | 5.x | SIL Open Font License 1.1 |
| Rust crates (`Cargo.lock`) | see lockfile | MIT / Apache-2.0 / BSD / MPL-2.0 / ISC / Zlib, per crate |

The Rust dependency graph is reproducible from `src-tauri/Cargo.lock`; the JavaScript
graph from `package-lock.json`. Both lockfiles are the source of truth for exact
versions.

## Not bundled

- **PHP** and **phpactor** are executed from the host. They are not part of the app
  bundle and keep their own licenses.
- **Laravel** projects, the bridge script and user code run inside the target
  application and are not distributed with Forthy.

## Regenerating

The release pipeline is expected to produce the full text bundle from the two
lockfiles (`cargo about` and a `license-checker`-style pass over the npm tree).
The generated `licenses/` directory is copied next to `Forthy.app` in the release
archive. Update this file whenever a direct dependency changes.
