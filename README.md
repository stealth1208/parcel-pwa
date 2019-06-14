# DEMO PWA Manifest file + Service worker work offline and Push notification

##  Install
1. Install yarn
2. Install parcel: ```yarn global add parcel-bundler```
3. ```yarn install```


## Run on dev
```yarn dev```

## Build static files
```yarn build```
### Test on phone
```npx serve dist/```

**Notes**: parcel(bug) always parse *manifest.json* to manifest.js, so the manifest file MUST be *manifest.webmanifest*(or anything without  .json)