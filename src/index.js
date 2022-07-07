function f() {}
function* g() {}
async function a() {}
module.exports = function (b) {
    return b.constructor === f.constructor ? 'function' : b.constructor === a.constructor ? 'asyncfunction' : b.constructor === g.constructor ? 'generator' : 'not a function';
};
