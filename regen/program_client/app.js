"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var faker_1 = require("@faker-js/faker");
var fs = require("fs/promises");
var path = require("path");
var os = require("os");
var index_1 = require("./index");
function main(feePayer) {
    return __awaiter(this, void 0, void 0, function () {
        var connection, progId, userId1, buyerUserPubKey, buyerCompanyPubKey, buyerCompanyShippingPubKey, buyerUser, buyerCompany, buyerCompanyShipping, userId2, supplierUserPubKey, supplierCompanyPubKey, supplierCompanyShippingPubKey, supplierUser, supplierCompany, supplierCompanyShipping, sym, currencyPubKey, currency, unitName, unitPubKey, unit, auctionPubKey, auction, firstBid, bidPubKey, bid1, secondBid, purchasePubKey, bid2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    connection = new web3_js_1.Connection("https://api.devnet.solana.com", {
                        commitment: "confirmed"
                    });
                    progId = new web3_js_1.PublicKey("DVvaRFwhqRmwfZ2PJ659tCLR98edRQvpdfkz6H9m966V");
                    (0, index_1.initializeClient)(progId, connection);
                    userId1 = faker_1.faker.string.uuid().substring(0, 32);
                    buyerUserPubKey = (0, index_1.deriveUserPDA)({
                        id: userId1
                    }, progId)[0];
                    buyerCompanyPubKey = (0, index_1.deriveCompanyPDA)({
                        user: buyerUserPubKey
                    }, progId)[0];
                    buyerCompanyShippingPubKey = (0, index_1.deriveShippingAddressPDA)({
                        company: buyerCompanyPubKey,
                    }, progId)[0];
                    return [4 /*yield*/, (0, index_1.createUserTypeBuyerSendAndConfirm)({
                            companyName: faker_1.faker.company.name(),
                            address: faker_1.faker.location.streetAddress(),
                            contactNumber: faker_1.faker.phone.number(),
                            keyPerson: faker_1.faker.person.fullName(),
                            keyPersonRole: faker_1.faker.person.jobTitle(),
                            registrationNumber: faker_1.faker.commerce.isbn(),
                            shippingAddress: faker_1.faker.location.streetAddress(),
                            shippingLabel: faker_1.faker.location.countryCode(),
                            accreditations: undefined,
                            userId: userId1,
                            companySeedUser: buyerUserPubKey,
                            shippingSeedCompany: buyerCompanyPubKey,
                            signers: {
                                feePayer: feePayer,
                            }
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, index_1.getUser)(buyerUserPubKey)];
                case 2:
                    buyerUser = _a.sent();
                    console.log("User type buyer");
                    console.log(buyerUser);
                    return [4 /*yield*/, (0, index_1.getCompany)(buyerCompanyPubKey)];
                case 3:
                    buyerCompany = _a.sent();
                    console.log("Compay of user type buyer");
                    console.log(buyerCompany);
                    return [4 /*yield*/, (0, index_1.getShippingAddress)(buyerCompanyShippingPubKey)];
                case 4:
                    buyerCompanyShipping = _a.sent();
                    console.log("Compay shpping address");
                    console.log(buyerCompanyShipping);
                    userId2 = faker_1.faker.string.uuid().substring(0, 32);
                    ;
                    supplierUserPubKey = (0, index_1.deriveUserPDA)({
                        id: userId2
                    }, progId)[0];
                    supplierCompanyPubKey = (0, index_1.deriveCompanyPDA)({
                        user: supplierUserPubKey
                    }, progId)[0];
                    supplierCompanyShippingPubKey = (0, index_1.deriveShippingInformationPDA)({
                        company: supplierCompanyPubKey
                    }, progId)[0];
                    return [4 /*yield*/, (0, index_1.createUserTypeSupplierSendAndConfirm)({
                            companyName: faker_1.faker.company.name(),
                            address: faker_1.faker.location.streetAddress(),
                            contactNumber: faker_1.faker.phone.number(),
                            keyPerson: faker_1.faker.person.fullName(),
                            keyPersonRole: faker_1.faker.person.jobTitle(),
                            registrationNumber: faker_1.faker.commerce.isbn(),
                            shippingAddress: faker_1.faker.location.streetAddress(),
                            shippingCost: BigInt(parseInt(faker_1.faker.commerce.price())),
                            shippingCurrency: faker_1.faker.finance.currencyCode(),
                            shippingMethod: faker_1.faker.lorem.slug(),
                            shippingProvider: faker_1.faker.company.name(),
                            shippingRadius: faker_1.faker.string.numeric(),
                            shippingInsuranceCharges: undefined,
                            shippingInsuranceProvider: undefined,
                            shippingOtherCharges: undefined,
                            accreditations: undefined,
                            userId: userId2,
                            companySeedUser: supplierUserPubKey,
                            shippingInformationSeedCompany: supplierCompanyPubKey,
                            signers: {
                                feePayer: feePayer,
                            }
                        })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, (0, index_1.getUser)(supplierUserPubKey)];
                case 6:
                    supplierUser = _a.sent();
                    console.log("User type supplier");
                    console.log(supplierUser);
                    return [4 /*yield*/, (0, index_1.getCompany)(supplierCompanyPubKey)];
                case 7:
                    supplierCompany = _a.sent();
                    console.log("Compay of user type supplier");
                    console.log(supplierCompany);
                    return [4 /*yield*/, (0, index_1.getShippingInformation)(supplierCompanyShippingPubKey)];
                case 8:
                    supplierCompanyShipping = _a.sent();
                    console.log("Compay shpping information");
                    console.log(supplierCompanyShipping);
                    sym = faker_1.faker.finance.currencyCode();
                    return [4 /*yield*/, (0, index_1.createCurrencySendAndConfirm)({
                            name: faker_1.faker.finance.currencyName(),
                            symbol: sym,
                            value: 100,
                            signers: {
                                feePayer: feePayer
                            }
                        })];
                case 9:
                    _a.sent();
                    currencyPubKey = (0, index_1.deriveCurrencyPDA)({
                        symbol: sym
                    }, progId)[0];
                    return [4 /*yield*/, (0, index_1.getCurrency)(currencyPubKey)];
                case 10:
                    currency = _a.sent();
                    console.log("Currency");
                    console.log(currency);
                    unitName = faker_1.faker.science.unit().name;
                    return [4 /*yield*/, (0, index_1.createUnitSendAndConfirm)({
                            name: unitName,
                            conversionRate: 300n,
                            signers: {
                                feePayer: feePayer
                            }
                        })];
                case 11:
                    _a.sent();
                    unitPubKey = (0, index_1.deriveAuctionWeightUnitPDA)({
                        name: unitName
                    }, progId)[0];
                    return [4 /*yield*/, (0, index_1.getAuctionWeightUnit)(unitPubKey)];
                case 12:
                    unit = _a.sent();
                    console.log("Unit");
                    console.log(unit);
                    /**
                     * Create auction
                     */
                    return [4 /*yield*/, (0, index_1.createAuctionSendAndConfirm)({
                            colorOfHydrogen: faker_1.faker.color.human(),
                            companySeedUser: supplierUserPubKey,
                            unitSeedName: unitName,
                            currencySeedSymbol: sym,
                            name: faker_1.faker.commerce.productName(),
                            endDate: BigInt(faker_1.faker.date.anytime().getTime()),
                            kind: 0,
                            label: 0,
                            price: parseFloat(faker_1.faker.commerce.price()),
                            weight: faker_1.faker.number.float(),
                            purityLevel: faker_1.faker.lorem.word(),
                            thumbnailImage: faker_1.faker.image.urlLoremFlickr({ category: "abstract" }),
                            auctionSeedCompany: supplierCompanyPubKey,
                            signers: {
                                feePayer: feePayer
                            }
                        })];
                case 13:
                    /**
                     * Create auction
                     */
                    _a.sent();
                    auctionPubKey = (0, index_1.deriveAuctionPDA)({
                        company: supplierCompanyPubKey
                    }, progId)[0];
                    return [4 /*yield*/, (0, index_1.getAuction)(auctionPubKey)];
                case 14:
                    auction = _a.sent();
                    console.log("Auction");
                    console.log(auction);
                    firstBid = 0;
                    return [4 /*yield*/, (0, index_1.createAuctionBidSendAndConfirm)({
                            amount: faker_1.faker.number.bigInt(),
                            companySeedUser: supplierUserPubKey,
                            isAnonymous: faker_1.faker.datatype.boolean({ probability: 0.5 }),
                            bidSeedIndex: firstBid,
                            auctionSeedCompany: supplierCompanyPubKey,
                            bidSeedAuction: auctionPubKey,
                            signers: {
                                feePayer: feePayer
                            }
                        })];
                case 15:
                    _a.sent();
                    bidPubKey = (0, index_1.deriveAuctionBidPDA)({
                        auction: auctionPubKey,
                        index: firstBid
                    }, progId)[0];
                    return [4 /*yield*/, (0, index_1.getAuctionBid)(bidPubKey)];
                case 16:
                    bid1 = _a.sent();
                    console.log("Bid");
                    console.log(bid1);
                    secondBid = 1;
                    return [4 /*yield*/, (0, index_1.purchaseAuctionSendAndConfirm)({
                            amount: faker_1.faker.number.bigInt(),
                            companySeedUser: supplierUserPubKey,
                            isAnonymous: faker_1.faker.datatype.boolean({ probability: 0.5 }),
                            bidSeedIndex: secondBid,
                            auctionSeedCompany: supplierCompanyPubKey,
                            bidSeedAuction: auctionPubKey,
                            signers: {
                                feePayer: feePayer
                            }
                        })];
                case 17:
                    _a.sent();
                    purchasePubKey = (0, index_1.deriveAuctionBidPDA)({
                        auction: auctionPubKey,
                        index: secondBid,
                    }, progId)[0];
                    return [4 /*yield*/, (0, index_1.getAuctionBid)(purchasePubKey)];
                case 18:
                    bid2 = _a.sent();
                    console.log("Bid - Purshased");
                    console.log(bid2);
                    return [2 /*return*/];
            }
        });
    });
}
fs.readFile(path.join(os.homedir(), ".config/solana/id.json"))
    .then(function (file) { return main(web3_js_1.Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))); });
