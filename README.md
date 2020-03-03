# PWA Boilerplate

Made for [Frontconf](https://frontconf.com/), open for everyone.

## manifest.webmanifest
* `manifest.webmanifest` over `manifest.json` - Reference to current [Manifest Working Draft:](https://w3c.github.io/manifest/#using-a-link-element-to-link-to-a-manifest)
> manifest.webmanifest or manifest.json?
The official file extension for the manifest is .webmanifest. Some web servers recognize this extension and transfer the file using the standardized MIME type for a manifest (application/manifest+json). Developers can also choose a different extension (e.g. .json) or none at all (e.g. /api/GetManifest), but are strongly encouraged to transfer the manifest using the application/manifest+json MIME type. 

* Only `name` and `icons` keyword is required. The rest of the keywords can be found here: https://developer.mozilla.org/en-US/docs/Web/Manifest#Members
* `display` - is standalone due to commonly needing an "app-like" experience (`fullscreen` completely hides any mobile UI like batter percentages.)
* `scope` - limits the access the user has to certain areas of the website when in manifest mode (meaning navigating the downloaded app.)
* `start_url` - can be relative or absolute.
* `icons` - can add new images for responsive needs. 

## service-worker.js
* Optimized for Single Page Application use
* Using WorkBox - please disable any other service worker implmentation before using this boilerplate. Strongly suggest avoiding use of `create-react-app`'s current service worker implementation - Single Page Applications don't handle Cache First (which is the CRA's implementation) well, especially if your app is constantly updating (even things like images). Network First approach is the best for SPAs due to the absence of reloading like in Multipage application. It also places the onus on users clearing their cache to get new information on the website, as opposed to making a prompt to reload the site. 

## index.html
* Loads the service-worker.js file. The only existing code revision you need to make to turn your application into a PWA.
