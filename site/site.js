(function () {
  "use strict";

  var nodes = document.querySelectorAll("[data-version]");
  if (!nodes.length || typeof fetch !== "function") return;

  fetch("https://api.github.com/repos/stealthpro/forthy-app/releases/latest", {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then(function (response) {
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    })
    .then(function (release) {
      var tag = String(release && release.tag_name ? release.tag_name : "").replace(/^v/, "");
      if (!/^\d+\.\d+\.\d+$/.test(tag)) return;
      nodes.forEach(function (node) {
        node.textContent = tag;
      });
    })
    .catch(function () {
      /* The static version from the last release stays in place. */
    });
})();
