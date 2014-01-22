
var home = {},
    config=require('../config/config.js');

home.index = function(req, res){
   res.render('index',{title:config.webTitle});
    return;
}

home.tree=function(req,res) {
    res.render('tree');
}

home.tree1=function(req,res) {
    res.render('tree1');
}

home.getData=function(req,res) {
    res.render('json');
}
module.exports = home; 