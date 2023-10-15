"use strict";
// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSchema = exports.decodeTransaction = exports.OrderDocumentSchema = exports.decodeOrderDocument = exports.OrderSchema = exports.decodeOrder = exports.CurrencySchema = exports.decodeCurrency = exports.AuctionWeightUnitSchema = exports.decodeAuctionWeightUnit = exports.AuctionBidSchema = exports.decodeAuctionBid = exports.AuctionSchema = exports.decodeAuction = exports.ShippingInformationSchema = exports.decodeShippingInformation = exports.ShippingAddressSchema = exports.decodeShippingAddress = exports.CompanySchema = exports.decodeCompany = exports.UserSchema = exports.decodeUser = exports.BadgeSchema = exports.decodeBadge = void 0;
var web3_js_1 = require("@solana/web3.js");
var decodeBadge = function (decoded) { return ({
    name: decoded["name"],
    description: decoded["description"],
    points: decoded["points"],
    perks: decoded["perks"],
    image: decoded["image"],
    kind: decoded["kind"],
}); };
exports.decodeBadge = decodeBadge;
exports.BadgeSchema = {
    struct: {
        name: "string",
        description: { option: "string" },
        points: "u32",
        perks: "string",
        image: "string",
        kind: "u8",
    }
};
var decodeUser = function (decoded) { return ({
    id: decoded["id"],
    balance: decoded["balance"],
    role: decoded["role"],
    company: decoded["company"] ? new web3_js_1.PublicKey(decoded["company"]) : undefined,
    points: decoded["points"],
    badge: decoded["badge"] ? new web3_js_1.PublicKey(decoded["badge"]) : undefined,
}); };
exports.decodeUser = decodeUser;
exports.UserSchema = {
    struct: {
        id: "string",
        balance: "u64",
        role: "u8",
        company: { option: { array: { type: "u8", len: 32 } } },
        points: "u64",
        badge: { option: { array: { type: "u8", len: 32 } } },
    }
};
var decodeCompany = function (decoded) { return ({
    name: decoded["name"],
    registrationNumber: decoded["registration_number"],
    address: decoded["address"],
    accreditations: decoded["accreditations"],
    contactNumber: decoded["contact_number"],
    keyPerson: decoded["key_person"],
    keyPersonRole: decoded["key_person_role"],
    futuresEnabled: decoded["futures_enabled"],
    user: new web3_js_1.PublicKey(decoded["user"]),
}); };
exports.decodeCompany = decodeCompany;
exports.CompanySchema = {
    struct: {
        name: "string",
        registration_number: "string",
        address: "string",
        accreditations: { option: "string" },
        contact_number: { option: "string" },
        key_person: "string",
        key_person_role: "string",
        futures_enabled: "bool",
        user: { array: { type: "u8", len: 32 } },
    }
};
var decodeShippingAddress = function (decoded) { return ({
    label: decoded["label"],
    address: decoded["address"],
    company: new web3_js_1.PublicKey(decoded["company"]),
}); };
exports.decodeShippingAddress = decodeShippingAddress;
exports.ShippingAddressSchema = {
    struct: {
        label: "string",
        address: "string",
        company: { array: { type: "u8", len: 32 } },
    }
};
var decodeShippingInformation = function (decoded) { return ({
    radius: decoded["radius"],
    address: decoded["address"],
    method: decoded["method"],
    provider: decoded["provider"],
    cost: decoded["cost"],
    currency: decoded["currency"],
    insuranceProvider: decoded["insurance_provider"],
    insuranceCharges: decoded["insurance_charges"],
    otherCharges: decoded["other_charges"],
    company: new web3_js_1.PublicKey(decoded["company"]),
}); };
exports.decodeShippingInformation = decodeShippingInformation;
exports.ShippingInformationSchema = {
    struct: {
        radius: "string",
        address: "string",
        method: "string",
        provider: "string",
        cost: "u64",
        currency: "string",
        insurance_provider: { option: "string" },
        insurance_charges: { option: "u64" },
        other_charges: { option: "u64" },
        company: { array: { type: "u8", len: 32 } },
    }
};
var decodeAuction = function (decoded) { return ({
    name: decoded["name"],
    purityLevel: decoded["purity_level"],
    colorOfHydrogen: decoded["color_of_hydrogen"],
    weight: decoded["weight"],
    thumbnailImage: decoded["thumbnail_image"],
    unit: new web3_js_1.PublicKey(decoded["unit"]),
    price: decoded["price"],
    endDate: decoded["end_date"],
    startingBid: decoded["starting_bid"],
    currency: new web3_js_1.PublicKey(decoded["currency"]),
    company: new web3_js_1.PublicKey(decoded["company"]),
    order: decoded["order"] ? new web3_js_1.PublicKey(decoded["order"]) : undefined,
    status: decoded["status"],
    kind: decoded["kind"],
    label: decoded["label"],
}); };
exports.decodeAuction = decodeAuction;
exports.AuctionSchema = {
    struct: {
        name: "string",
        purity_level: "string",
        color_of_hydrogen: "string",
        weight: "f64",
        thumbnail_image: { option: "string" },
        unit: { array: { type: "u8", len: 32 } },
        price: "f64",
        end_date: "u64",
        starting_bid: "f64",
        currency: { array: { type: "u8", len: 32 } },
        company: { array: { type: "u8", len: 32 } },
        order: { option: { array: { type: "u8", len: 32 } } },
        status: "u8",
        kind: "u8",
        label: "u8",
    }
};
var decodeAuctionBid = function (decoded) { return ({
    amount: decoded["amount"],
    isAnonymous: decoded["is_anonymous"],
}); };
exports.decodeAuctionBid = decodeAuctionBid;
exports.AuctionBidSchema = {
    struct: {
        amount: "u64",
        is_anonymous: "bool",
    }
};
var decodeAuctionWeightUnit = function (decoded) { return ({
    name: decoded["name"],
    conversionRate: decoded["conversion_rate"],
}); };
exports.decodeAuctionWeightUnit = decodeAuctionWeightUnit;
exports.AuctionWeightUnitSchema = {
    struct: {
        name: "string",
        conversion_rate: "u64",
    }
};
var decodeCurrency = function (decoded) { return ({
    symbol: decoded["symbol"],
    name: decoded["name"],
    value: decoded["value"],
}); };
exports.decodeCurrency = decodeCurrency;
exports.CurrencySchema = {
    struct: {
        symbol: "string",
        name: "string",
        value: "f64",
    }
};
var decodeOrder = function (decoded) { return ({
    status: decoded["status"],
    shipmentStatus: decoded["shipment_status"],
    transactionStatus: decoded["transaction_status"],
    transaction: decoded["transaction"] ? new web3_js_1.PublicKey(decoded["transaction"]) : undefined,
    shipmentSignature: decoded["shipment_signature"],
    productSignature: decoded["product_signature"],
    isShipmentVerified: decoded["is_shipment_verified"],
}); };
exports.decodeOrder = decodeOrder;
exports.OrderSchema = {
    struct: {
        status: "u8",
        shipment_status: "u8",
        transaction_status: "u8",
        transaction: { option: { array: { type: "u8", len: 32 } } },
        shipment_signature: { option: "string" },
        product_signature: { option: "string" },
        is_shipment_verified: "bool",
    }
};
var decodeOrderDocument = function (decoded) { return ({
    url: decoded["url"],
    transactionStatus: decoded["transaction_status"],
    order: new web3_js_1.PublicKey(decoded["order"]),
}); };
exports.decodeOrderDocument = decodeOrderDocument;
exports.OrderDocumentSchema = {
    struct: {
        url: "string",
        transaction_status: "u8",
        order: { array: { type: "u8", len: 32 } },
    }
};
var decodeTransaction = function (decoded) { return ({
    amount: decoded["amount"],
    currency: decoded["currency"],
    status: decoded["status"],
    kind: decoded["kind"],
    order: new web3_js_1.PublicKey(decoded["order"]),
}); };
exports.decodeTransaction = decodeTransaction;
exports.TransactionSchema = {
    struct: {
        amount: "f64",
        currency: "string",
        status: "u8",
        kind: "u8",
        order: { array: { type: "u8", len: 32 } },
    }
};
