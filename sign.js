var { signAddon } = require('sign-addon');
signAddon({
    xpiPath: 'dist/bitbucket-filter-projects.xpi',
    version: require('./package.json').version,
    apiKey: 'user:16267063:647',
    apiSecret: '6d1dc1d3957fd513b62866e5f748212af8dc5f212a3c798530950fba316d5a36',
    downloadDir: 'dist',
})
    .then(function (result) {
        if (result.success) {
            console.log('The following signed files were downloaded:');
            console.log(result.downloadedFiles);
            console.log('Your extension ID is:');
            console.log(result.id);
        } else {
            console.error('Your add-on could not be signed!');
            console.error('Error code: ' + result.errorCode);
            console.error('Details: ' + result.errorDetails);
        }
        console.log(result.success ? 'SUCCESS' : 'FAIL');
    })
    .catch(function (error) {
        console.error('Signing error:', error);
    });
