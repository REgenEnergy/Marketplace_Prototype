"use strict";
// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.
Object.defineProperty(exports, "__esModule", { value: true });
exports.deriveTransactionPDA = exports.deriveOrderDocumentPDA = exports.deriveOrderPDA = exports.deriveCurrencyPDA = exports.deriveAuctionWeightUnitPDA = exports.deriveAuctionBidPDA = exports.deriveAuctionPDA = exports.deriveShippingInformationPDA = exports.deriveShippingAddressPDA = exports.deriveCompanyPDA = exports.deriveUserPDA = exports.deriveBadgePDA = void 0;
var web3_js_1 = require("@solana/web3.js");
var deriveBadgePDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("badge"),
        Buffer.from(seeds.name, "utf8"),
    ], programId);
};
exports.deriveBadgePDA = deriveBadgePDA;
var deriveUserPDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("user"),
        Buffer.from(seeds.id, "utf8"),
    ], programId);
};
exports.deriveUserPDA = deriveUserPDA;
var deriveCompanyPDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("company"),
        seeds.user.toBuffer(),
    ], programId);
};
exports.deriveCompanyPDA = deriveCompanyPDA;
var deriveShippingAddressPDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("company_shipping_address"),
        seeds.company.toBuffer(),
    ], programId);
};
exports.deriveShippingAddressPDA = deriveShippingAddressPDA;
var deriveShippingInformationPDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("company_shipping_information"),
        seeds.company.toBuffer(),
    ], programId);
};
exports.deriveShippingInformationPDA = deriveShippingInformationPDA;
var deriveAuctionPDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("auction"),
        seeds.company.toBuffer(),
    ], programId);
};
exports.deriveAuctionPDA = deriveAuctionPDA;
var deriveAuctionBidPDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("auction_bid"),
        seeds.auction.toBuffer(),
        Buffer.from(Uint32Array.from([seeds.index]).buffer),
    ], programId);
};
exports.deriveAuctionBidPDA = deriveAuctionBidPDA;
var deriveAuctionWeightUnitPDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("auction_weight_unit"),
        Buffer.from(seeds.name, "utf8"),
    ], programId);
};
exports.deriveAuctionWeightUnitPDA = deriveAuctionWeightUnitPDA;
var deriveCurrencyPDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("currrency"),
        Buffer.from(seeds.symbol, "utf8"),
    ], programId);
};
exports.deriveCurrencyPDA = deriveCurrencyPDA;
var deriveOrderPDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("order"),
        seeds.auction.toBuffer(),
    ], programId);
};
exports.deriveOrderPDA = deriveOrderPDA;
var deriveOrderDocumentPDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("order_document"),
        seeds.order.toBuffer(),
    ], programId);
};
exports.deriveOrderDocumentPDA = deriveOrderDocumentPDA;
var deriveTransactionPDA = function (seeds, programId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("transaction"),
        seeds.order.toBuffer(),
    ], programId);
};
exports.deriveTransactionPDA = deriveTransactionPDA;
