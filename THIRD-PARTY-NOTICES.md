# Third-party notices

Forthy bundles third-party software. This inventory lists the components and the
license family of each one. The full texts are published as
`Forthy-<version>-licenses.zip` on the release page; new release archives also carry
`licenses/`, `LICENSE` and this file next to `Forthy.app`.

> **Status: generated.** `licenses/` is produced from `Cargo.lock` and
> `package-lock.json` by `scripts/licenses.mjs` (`npm run licenses`) and added to the
> archive by `scripts/publish-release.sh`. The 0.7.0 app archive predates the bundle, so
> for that version the texts live only in `Forthy-0.7.0-licenses.zip`.

## Bundled at runtime

| Component | Version | License |
| --- | --- | --- |
| Tauri | 2.x | MIT OR Apache-2.0 |
| React / React DOM | 19.x | MIT |
| Monaco Editor | 0.52.x | MIT |
| `@tauri-apps/api`, `@tauri-apps/plugin-dialog`, `@tauri-apps/plugin-opener` | 2.x | MIT OR Apache-2.0 |
| `lucide-react` | 1.x | ISC |
| `@fontsource-variable/inter` | 5.x | SIL Open Font License 1.1 |
| `@fontsource-variable/jetbrains-mono` | 5.x | SIL Open Font License 1.1 |
| Rust crates (`Cargo.lock`) | see lockfile | per crate: MIT, Apache-2.0, BSD-3-Clause, ISC, Zlib, MPL-2.0, 0BSD, Unlicense, Unicode-3.0, OFL-1.1 |

The Rust list covers the macOS dependency graph from
`cargo tree --target aarch64-apple-darwin`, including build and proc-macro crates.
The npm list covers production packages from `package-lock.json`; dev tooling is not
shipped.

## Not bundled

- **PHP** and **phpactor** are executed from the host. They are not part of the app
  bundle and keep their own licenses.
- **Laravel** projects, the bridge script and user code run inside the target
  application and are not distributed with Forthy.

## Regenerating

`npm run licenses` writes `release/licenses/`: every upstream license file, a
`README.md` with the full component table, `manifest.json` with the same inventory in
machine-readable form, and `texts/` with the standard license texts. Components that
ship no license file (or only an SPDX declaration) get a generated `NOTICE.txt` that
names the component and its copyright holders.

`scripts/publish-release.sh` regenerates the bundle, adds `licenses/`, `LICENSE` and
this file to the app archive, and publishes a standalone
`Forthy-<version>-licenses.zip` alongside it.

Update the inventory whenever a direct dependency changes.
