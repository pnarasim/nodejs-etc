/*
 * GET home page.
 */

var models = require("../models");
var Sequelize = require('sequelize');


exports.index = function(req, res) {
    console.log("AHA index");
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


exports.dosetup = function(req, res) {
    console.log("AHA setup");
    res.render("setup", {title: 'BLE Setup' });
};

exports.domarkaggs = function(req, res) {
    console.log("AHA markaggs");
    var roomx = req.body.roomxval;
    var roomy = req.body.roomyval;
    var numaggs = req.body.numaggs;

    res.render("markaggs", {title: 'Location', roomx: roomx, roomy: roomy, numaggs: numaggs});
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
    var roomx = req.body.roomxval;
    var roomy = req.body.roomyval;

    console.log("Got post request with advertiser: " + advs + " and room size = " + roomx + " x " + roomy);
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
        res.render("seenat", {title: 'BLE Times', result: result , roomx: roomx, roomy: roomy
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


exports.mapit = function(req, res) {
    console.log("AHA map it");
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
        res.render("mapit", {title: 'BLE Advertiser Location', result: result  
        });
    });
};

