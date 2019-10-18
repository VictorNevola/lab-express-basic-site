let {path} = require('../path');

const home = (request, response) => {
    response.sendFile(path + '/views/home.html');
}
const about = (request, response) => {
    response.sendFile(path + '/views/about.html');
}
const gallery = (request, response) => {
    response.sendFile(path + '/views/gallery.html');
}
module.exports = {
    home,
    about,
    gallery
}