# Security policy

Forthy runs PHP inside your project and can hold SSH passwords in memory, so security
reports are taken seriously.

## Reporting a vulnerability

Please do **not** open a public issue for a security problem. Use GitHub's private
vulnerability reporting:

**[Report a vulnerability](https://github.com/stealthpro/forthy-app/security/advisories/new)**
(the **Security** tab → **Report a vulnerability**).

Include:

- the Forthy version (the badge in the title bar or **About**) and your macOS version;
- the connection type involved (Local, Docker, SSH, Kubernetes);
- steps to reproduce and, when possible, a proof of concept;
- what you expected and what happened.

Never attach real passwords, private keys, `.env` files, database dumps or customer data.
A redacted example is enough.

## Scope

In scope: the Forthy application bundle, the embedded PHP bridge, the transports, the
connection-file import and the in-app updater (its manifest, signature verification and
install step). Out of scope: vulnerabilities in your own Laravel application or in
third-party packages it depends on, and reports against versions older than the latest
release.

Update archives are signed, and Forthy verifies the signature against the key compiled
into the app before installing. A report that an update can be installed without a valid
signature, or that the update feed can redirect an install to a different build, is in
scope.

## Supported versions

Only the latest published release receives security fixes. Upgrade to the newest version
from [Releases](https://github.com/stealthpro/forthy-app/releases/latest) before reporting,
unless the issue is version-independent.
