"use strict";

module.exports = function(sequelize, DataTypes) {
    var advertisers = sequelize.define("advertisers", {
        ad_addr : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        agg_addr : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        updatetime : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        rssi : {
            type : DataTypes.INTEGER,
            allowNull : false,
        }
    }, { 
    timestamps: false
    } );
    advertisers.removeAttribute('id');
    return advertisers;
};
