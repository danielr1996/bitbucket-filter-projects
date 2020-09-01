# Bitbucket Filter Projects

## Build
To build the extension run 
```shell script
npm install
npx gulp
```
You now have an *unsigned* `*.xpi` in `dist/`that can be installed in development versions of firefox. 

Hower to install extensions in stable versions of firefox the extension needs to be signed. 
Insert your API keys in `src/sign.js` and then run
```shell script
node sign.js
```

## Known issues
Filtered Projects aren't updated when adding them, but you can just reload the site.
