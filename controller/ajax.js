/**
 * --------------------------------------------------------
 * 功能描述
 * @Version 0.1
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-1-17 下午12:26
 * --------------------------------------------------------
 */

var home = {},
    config=require('../config/config.js');

home.index = function(req, res){
    var name=parseFloat(req.body.name)+1;
    res.render('ajax',{name:name});
    return;
}

module.exports = home;