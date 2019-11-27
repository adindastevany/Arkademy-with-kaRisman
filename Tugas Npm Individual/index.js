// foo.js
const pathExists = require('path-exists');
 
(async () => {
    console.log(await pathExists('foo.js'));
    //=> true
})();