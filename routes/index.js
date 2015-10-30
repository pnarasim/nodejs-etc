/*
 * GET home page.
 */

var models = require("../models");
var Sequelize = require('sequelize');

exports.index = function(req, res) {
    console.log("AHA index");
    res.render("index", {title: 'BLE advertisers Index' });
};

exports.getadvertisers = function(req, res) {
    console.log("AHA get advs");
        models.advertisers.findAll({
        group: ['ad_addr']
        }
    ).then(function(result){
    //console.log(result);
    ///console.log(result.rows);
    res.render("index", {title: 'BLE advertisers', result: result});
    //res.json(result); 
    
    });
};

exports.gettimeseen = function(req, res) {
    console.log("AHA get time seen");
    var advs = req.body.selectAdvs;
    console.log("Got post request with advertiser: " + advs);
    models.advertisers.findAll({
        group: ['updatetime'],
        where: {
            ad_addr: advs
        }
        }
    ).then(function(result){
        //console.log(result);
        //res.json(result); 
        //res.end();
        res.render("seenat", {title: 'BLE Times', result: result  
        });
    });
    };


exports.getaggregators = function(req, res) {
    console.log("AHA get aggregators");
    var time = req.body.selectTime;
    var adv = req.body.adv;
    console.log("Got post request with time: " + time + " and advertiser: " + adv);
    models.advertisers.findAll({
        group: ['agg_addr'],
        where: {
            updatetime: time,
            ad_addr: adv
        }
        }
    ).then(function(result){
        console.log(result);
        //res.json(result); 
        //res.end();
        res.render("aggs", {title: 'BLE Aggregators', result: result  
        });
    });
};



