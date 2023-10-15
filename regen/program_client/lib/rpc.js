"use strict";
// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.getTransaction = exports.getOrderDocument = exports.getOrder = exports.getCurrency = exports.getAuctionWeightUnit = exports.getAuctionBid = exports.getAuction = exports.getShippingInformation = exports.getShippingAddress = exports.getCompany = exports.getUser = exports.getBadge = exports.purchaseAuctionSendAndConfirm = exports.purchaseAuction = exports.createAuctionBidSendAndConfirm = exports.createAuctionBid = exports.createAuctionSendAndConfirm = exports.createAuction = exports.createUnitSendAndConfirm = exports.createUnit = exports.createCurrencySendAndConfirm = exports.createCurrency = exports.createUserTypeSupplierSendAndConfirm = exports.createUserTypeSupplier = exports.createUserTypeBuyerSendAndConfirm = exports.createUserTypeBuyer = exports.RegenInstruction = exports.initializeClient = void 0;
var pda = require("./pda");
var T = require("./types");
var web3_js_1 = require("@solana/web3.js");
var borsh_1 = require("borsh");
var _programId;
var _connection;
var initializeClient = function (programId, connection) {
    _programId = programId;
    _connection = connection;
};
exports.initializeClient = initializeClient;
var RegenInstruction;
(function (RegenInstruction) {
    /**
     * Accounts:
     * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
     * 1. `[writable]` user: {@link User}
     * 2. `[writable]` company: {@link Company}
     * 3. `[writable]` shipping: {@link ShippingAddress}
     * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
     *
     * Data:
     * - user_id: {@link string}
     * - company_name: {@link string}
     * - registration_number: {@link string}
     * - address: {@link string}
     * - accreditations: {@link string | undefined}
     * - contact_number: {@link string | undefined}
     * - key_person: {@link string}
     * - key_person_role: {@link string}
     * - shipping_address: {@link string}
     * - shipping_label: {@link string}
     * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
     * - shipping_seed_company: {@link PublicKey} Auto-generated, from input shipping of type [ShippingAddress] set the seed named company, required by the type
     */
    RegenInstruction[RegenInstruction["CreateUserTypeBuyer"] = 0] = "CreateUserTypeBuyer";
    /**
     * Accounts:
     * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
     * 1. `[writable]` user: {@link User}
     * 2. `[writable]` company: {@link Company}
     * 3. `[writable]` shipping_information: {@link ShippingInformation}
     * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
     *
     * Data:
     * - user_id: {@link string}
     * - company_name: {@link string}
     * - registration_number: {@link string}
     * - address: {@link string}
     * - accreditations: {@link string | undefined}
     * - contact_number: {@link string | undefined}
     * - key_person: {@link string}
     * - key_person_role: {@link string}
     * - shipping_radius: {@link string}
     * - shipping_address: {@link string}
     * - shipping_method: {@link string}
     * - shipping_provider: {@link string}
     * - shipping_cost: {@link BigInt}
     * - shipping_currency: {@link string}
     * - shipping_insurance_provider: {@link string | undefined}
     * - shipping_insurance_charges: {@link BigInt | undefined}
     * - shipping_other_charges: {@link BigInt | undefined}
     * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
     * - shipping_information_seed_company: {@link PublicKey} Auto-generated, from input shipping_information of type [ShippingInformation] set the seed named company, required by the type
     */
    RegenInstruction[RegenInstruction["CreateUserTypeSupplier"] = 1] = "CreateUserTypeSupplier";
    /**
     * Accounts:
     * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
     * 1. `[writable]` currency: {@link Currency}
     * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
     *
     * Data:
     * - symbol: {@link string}
     * - name: {@link string}
     * - value: {@link number}
     */
    RegenInstruction[RegenInstruction["CreateCurrency"] = 2] = "CreateCurrency";
    /**
     * Accounts:
     * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
     * 1. `[writable]` unit: {@link AuctionWeightUnit}
     * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
     *
     * Data:
     * - name: {@link string}
     * - conversion_rate: {@link BigInt}
     */
    RegenInstruction[RegenInstruction["CreateUnit"] = 3] = "CreateUnit";
    /**
     * Accounts:
     * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
     * 1. `[]` company: {@link Company}
     * 2. `[]` currency: {@link Currency}
     * 3. `[]` unit: {@link AuctionWeightUnit}
     * 4. `[writable]` auction: {@link Auction}
     * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
     *
     * Data:
     * - name: {@link string}
     * - purity_level: {@link string}
     * - color_of_hydrogen: {@link string}
     * - weight: {@link number}
     * - thumbnail_image: {@link string | undefined}
     * - price: {@link number}
     * - end_date: {@link BigInt} Timestamp for the end date
     * - kind: {@link number}
     * - label: {@link number}
     * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
     * - currency_seed_symbol: {@link string} Auto-generated, from input currency of type [Currency] set the seed named symbol, required by the type
     * - unit_seed_name: {@link string} Auto-generated, from input unit of type [AuctionWeightUnit] set the seed named name, required by the type
     * - auction_seed_company: {@link PublicKey} Auto-generated, from input auction of type [Auction] set the seed named company, required by the type
     */
    RegenInstruction[RegenInstruction["CreateAuction"] = 4] = "CreateAuction";
    /**
     * Accounts:
     * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
     * 1. `[]` company: {@link Company}
     * 2. `[]` auction: {@link Auction}
     * 3. `[writable]` bid: {@link AuctionBid}
     * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
     *
     * Data:
     * - amount: {@link BigInt}
     * - is_anonymous: {@link boolean}
     * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
     * - auction_seed_company: {@link PublicKey} Auto-generated, from input auction of type [Auction] set the seed named company, required by the type
     * - bid_seed_auction: {@link PublicKey} Auto-generated, from input bid of type [AuctionBid] set the seed named auction, required by the type
     * - bid_seed_index: {@link number} Auto-generated, from input bid of type [AuctionBid] set the seed named index, required by the type
     */
    RegenInstruction[RegenInstruction["CreateAuctionBid"] = 5] = "CreateAuctionBid";
    /**
     * Accounts:
     * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
     * 1. `[]` company: {@link Company}
     * 2. `[writable]` auction: {@link Auction}
     * 3. `[writable]` bid: {@link AuctionBid}
     * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
     *
     * Data:
     * - amount: {@link BigInt}
     * - is_anonymous: {@link boolean}
     * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
     * - auction_seed_company: {@link PublicKey} Auto-generated, from input auction of type [Auction] set the seed named company, required by the type
     * - bid_seed_auction: {@link PublicKey} Auto-generated, from input bid of type [AuctionBid] set the seed named auction, required by the type
     * - bid_seed_index: {@link number} Auto-generated, from input bid of type [AuctionBid] set the seed named index, required by the type
     */
    RegenInstruction[RegenInstruction["PurchaseAuction"] = 6] = "PurchaseAuction";
})(RegenInstruction || (exports.RegenInstruction = RegenInstruction = {}));
/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` user: {@link User}
 * 2. `[writable]` company: {@link Company}
 * 3. `[writable]` shipping: {@link ShippingAddress}
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - user_id: {@link string}
 * - company_name: {@link string}
 * - registration_number: {@link string}
 * - address: {@link string}
 * - accreditations: {@link string | undefined}
 * - contact_number: {@link string | undefined}
 * - key_person: {@link string}
 * - key_person_role: {@link string}
 * - shipping_address: {@link string}
 * - shipping_label: {@link string}
 * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
 * - shipping_seed_company: {@link PublicKey} Auto-generated, from input shipping of type [ShippingAddress] set the seed named company, required by the type
 */
var createUserTypeBuyer = function (args) {
    var data = (0, borsh_1.serialize)({
        struct: {
            id: "u8",
            user_id: "string",
            company_name: "string",
            registration_number: "string",
            address: "string",
            accreditations: { option: "string" },
            contact_number: { option: "string" },
            key_person: "string",
            key_person_role: "string",
            shipping_address: "string",
            shipping_label: "string",
            company_seed_user: { array: { type: "u8", len: 32 } },
            shipping_seed_company: { array: { type: "u8", len: 32 } },
        },
    }, {
        id: RegenInstruction.CreateUserTypeBuyer,
        user_id: args.userId,
        company_name: args.companyName,
        registration_number: args.registrationNumber,
        address: args.address,
        accreditations: args.accreditations,
        contact_number: args.contactNumber,
        key_person: args.keyPerson,
        key_person_role: args.keyPersonRole,
        shipping_address: args.shippingAddress,
        shipping_label: args.shippingLabel,
        company_seed_user: args.companySeedUser.toBytes(),
        shipping_seed_company: args.shippingSeedCompany.toBytes(),
    });
    var userPubkey = pda.deriveUserPDA({
        id: args.userId,
    }, _programId)[0];
    var companyPubkey = pda.deriveCompanyPDA({
        user: args.companySeedUser,
    }, _programId)[0];
    var shippingPubkey = pda.deriveShippingAddressPDA({
        company: args.shippingSeedCompany,
    }, _programId)[0];
    return new web3_js_1.TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            { pubkey: args.feePayer, isSigner: true, isWritable: true },
            { pubkey: userPubkey, isSigner: false, isWritable: true },
            { pubkey: companyPubkey, isSigner: false, isWritable: true },
            { pubkey: shippingPubkey, isSigner: false, isWritable: true },
            { pubkey: new web3_js_1.PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false },
        ],
        programId: _programId,
    });
};
exports.createUserTypeBuyer = createUserTypeBuyer;
/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` user: {@link User}
 * 2. `[writable]` company: {@link Company}
 * 3. `[writable]` shipping: {@link ShippingAddress}
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - user_id: {@link string}
 * - company_name: {@link string}
 * - registration_number: {@link string}
 * - address: {@link string}
 * - accreditations: {@link string | undefined}
 * - contact_number: {@link string | undefined}
 * - key_person: {@link string}
 * - key_person_role: {@link string}
 * - shipping_address: {@link string}
 * - shipping_label: {@link string}
 * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
 * - shipping_seed_company: {@link PublicKey} Auto-generated, from input shipping of type [ShippingAddress] set the seed named company, required by the type
 */
var createUserTypeBuyerSendAndConfirm = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var trx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                trx = new web3_js_1.Transaction();
                trx.add((0, exports.createUserTypeBuyer)(__assign(__assign({}, args), { feePayer: args.signers.feePayer.publicKey })));
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(_connection, trx, [args.signers.feePayer,])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createUserTypeBuyerSendAndConfirm = createUserTypeBuyerSendAndConfirm;
/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` user: {@link User}
 * 2. `[writable]` company: {@link Company}
 * 3. `[writable]` shipping_information: {@link ShippingInformation}
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - user_id: {@link string}
 * - company_name: {@link string}
 * - registration_number: {@link string}
 * - address: {@link string}
 * - accreditations: {@link string | undefined}
 * - contact_number: {@link string | undefined}
 * - key_person: {@link string}
 * - key_person_role: {@link string}
 * - shipping_radius: {@link string}
 * - shipping_address: {@link string}
 * - shipping_method: {@link string}
 * - shipping_provider: {@link string}
 * - shipping_cost: {@link BigInt}
 * - shipping_currency: {@link string}
 * - shipping_insurance_provider: {@link string | undefined}
 * - shipping_insurance_charges: {@link BigInt | undefined}
 * - shipping_other_charges: {@link BigInt | undefined}
 * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
 * - shipping_information_seed_company: {@link PublicKey} Auto-generated, from input shipping_information of type [ShippingInformation] set the seed named company, required by the type
 */
var createUserTypeSupplier = function (args) {
    var data = (0, borsh_1.serialize)({
        struct: {
            id: "u8",
            user_id: "string",
            company_name: "string",
            registration_number: "string",
            address: "string",
            accreditations: { option: "string" },
            contact_number: { option: "string" },
            key_person: "string",
            key_person_role: "string",
            shipping_radius: "string",
            shipping_address: "string",
            shipping_method: "string",
            shipping_provider: "string",
            shipping_cost: "u64",
            shipping_currency: "string",
            shipping_insurance_provider: { option: "string" },
            shipping_insurance_charges: { option: "u64" },
            shipping_other_charges: { option: "u64" },
            company_seed_user: { array: { type: "u8", len: 32 } },
            shipping_information_seed_company: { array: { type: "u8", len: 32 } },
        },
    }, {
        id: RegenInstruction.CreateUserTypeSupplier,
        user_id: args.userId,
        company_name: args.companyName,
        registration_number: args.registrationNumber,
        address: args.address,
        accreditations: args.accreditations,
        contact_number: args.contactNumber,
        key_person: args.keyPerson,
        key_person_role: args.keyPersonRole,
        shipping_radius: args.shippingRadius,
        shipping_address: args.shippingAddress,
        shipping_method: args.shippingMethod,
        shipping_provider: args.shippingProvider,
        shipping_cost: args.shippingCost,
        shipping_currency: args.shippingCurrency,
        shipping_insurance_provider: args.shippingInsuranceProvider,
        shipping_insurance_charges: args.shippingInsuranceCharges,
        shipping_other_charges: args.shippingOtherCharges,
        company_seed_user: args.companySeedUser.toBytes(),
        shipping_information_seed_company: args.shippingInformationSeedCompany.toBytes(),
    });
    var userPubkey = pda.deriveUserPDA({
        id: args.userId,
    }, _programId)[0];
    var companyPubkey = pda.deriveCompanyPDA({
        user: args.companySeedUser,
    }, _programId)[0];
    var shippingInformationPubkey = pda.deriveShippingInformationPDA({
        company: args.shippingInformationSeedCompany,
    }, _programId)[0];
    return new web3_js_1.TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            { pubkey: args.feePayer, isSigner: true, isWritable: true },
            { pubkey: userPubkey, isSigner: false, isWritable: true },
            { pubkey: companyPubkey, isSigner: false, isWritable: true },
            { pubkey: shippingInformationPubkey, isSigner: false, isWritable: true },
            { pubkey: new web3_js_1.PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false },
        ],
        programId: _programId,
    });
};
exports.createUserTypeSupplier = createUserTypeSupplier;
/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` user: {@link User}
 * 2. `[writable]` company: {@link Company}
 * 3. `[writable]` shipping_information: {@link ShippingInformation}
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - user_id: {@link string}
 * - company_name: {@link string}
 * - registration_number: {@link string}
 * - address: {@link string}
 * - accreditations: {@link string | undefined}
 * - contact_number: {@link string | undefined}
 * - key_person: {@link string}
 * - key_person_role: {@link string}
 * - shipping_radius: {@link string}
 * - shipping_address: {@link string}
 * - shipping_method: {@link string}
 * - shipping_provider: {@link string}
 * - shipping_cost: {@link BigInt}
 * - shipping_currency: {@link string}
 * - shipping_insurance_provider: {@link string | undefined}
 * - shipping_insurance_charges: {@link BigInt | undefined}
 * - shipping_other_charges: {@link BigInt | undefined}
 * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
 * - shipping_information_seed_company: {@link PublicKey} Auto-generated, from input shipping_information of type [ShippingInformation] set the seed named company, required by the type
 */
var createUserTypeSupplierSendAndConfirm = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var trx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                trx = new web3_js_1.Transaction();
                trx.add((0, exports.createUserTypeSupplier)(__assign(__assign({}, args), { feePayer: args.signers.feePayer.publicKey })));
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(_connection, trx, [args.signers.feePayer,])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createUserTypeSupplierSendAndConfirm = createUserTypeSupplierSendAndConfirm;
/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` currency: {@link Currency}
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - symbol: {@link string}
 * - name: {@link string}
 * - value: {@link number}
 */
var createCurrency = function (args) {
    var data = (0, borsh_1.serialize)({
        struct: {
            id: "u8",
            symbol: "string",
            name: "string",
            value: "f64",
        },
    }, {
        id: RegenInstruction.CreateCurrency,
        symbol: args.symbol,
        name: args.name,
        value: args.value,
    });
    var currencyPubkey = pda.deriveCurrencyPDA({
        symbol: args.symbol,
    }, _programId)[0];
    return new web3_js_1.TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            { pubkey: args.feePayer, isSigner: true, isWritable: true },
            { pubkey: currencyPubkey, isSigner: false, isWritable: true },
            { pubkey: new web3_js_1.PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false },
        ],
        programId: _programId,
    });
};
exports.createCurrency = createCurrency;
/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` currency: {@link Currency}
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - symbol: {@link string}
 * - name: {@link string}
 * - value: {@link number}
 */
var createCurrencySendAndConfirm = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var trx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                trx = new web3_js_1.Transaction();
                trx.add((0, exports.createCurrency)(__assign(__assign({}, args), { feePayer: args.signers.feePayer.publicKey })));
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(_connection, trx, [args.signers.feePayer,])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createCurrencySendAndConfirm = createCurrencySendAndConfirm;
/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` unit: {@link AuctionWeightUnit}
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - name: {@link string}
 * - conversion_rate: {@link BigInt}
 */
var createUnit = function (args) {
    var data = (0, borsh_1.serialize)({
        struct: {
            id: "u8",
            name: "string",
            conversion_rate: "u64",
        },
    }, {
        id: RegenInstruction.CreateUnit,
        name: args.name,
        conversion_rate: args.conversionRate,
    });
    var unitPubkey = pda.deriveAuctionWeightUnitPDA({
        name: args.name,
    }, _programId)[0];
    return new web3_js_1.TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            { pubkey: args.feePayer, isSigner: true, isWritable: true },
            { pubkey: unitPubkey, isSigner: false, isWritable: true },
            { pubkey: new web3_js_1.PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false },
        ],
        programId: _programId,
    });
};
exports.createUnit = createUnit;
/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[writable]` unit: {@link AuctionWeightUnit}
 * 2. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - name: {@link string}
 * - conversion_rate: {@link BigInt}
 */
var createUnitSendAndConfirm = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var trx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                trx = new web3_js_1.Transaction();
                trx.add((0, exports.createUnit)(__assign(__assign({}, args), { feePayer: args.signers.feePayer.publicKey })));
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(_connection, trx, [args.signers.feePayer,])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createUnitSendAndConfirm = createUnitSendAndConfirm;
/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` company: {@link Company}
 * 2. `[]` currency: {@link Currency}
 * 3. `[]` unit: {@link AuctionWeightUnit}
 * 4. `[writable]` auction: {@link Auction}
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - name: {@link string}
 * - purity_level: {@link string}
 * - color_of_hydrogen: {@link string}
 * - weight: {@link number}
 * - thumbnail_image: {@link string | undefined}
 * - price: {@link number}
 * - end_date: {@link BigInt} Timestamp for the end date
 * - kind: {@link number}
 * - label: {@link number}
 * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
 * - currency_seed_symbol: {@link string} Auto-generated, from input currency of type [Currency] set the seed named symbol, required by the type
 * - unit_seed_name: {@link string} Auto-generated, from input unit of type [AuctionWeightUnit] set the seed named name, required by the type
 * - auction_seed_company: {@link PublicKey} Auto-generated, from input auction of type [Auction] set the seed named company, required by the type
 */
var createAuction = function (args) {
    var data = (0, borsh_1.serialize)({
        struct: {
            id: "u8",
            name: "string",
            purity_level: "string",
            color_of_hydrogen: "string",
            weight: "f64",
            thumbnail_image: { option: "string" },
            price: "f64",
            end_date: "u64",
            kind: "u8",
            label: "u8",
            company_seed_user: { array: { type: "u8", len: 32 } },
            currency_seed_symbol: "string",
            unit_seed_name: "string",
            auction_seed_company: { array: { type: "u8", len: 32 } },
        },
    }, {
        id: RegenInstruction.CreateAuction,
        name: args.name,
        purity_level: args.purityLevel,
        color_of_hydrogen: args.colorOfHydrogen,
        weight: args.weight,
        thumbnail_image: args.thumbnailImage,
        price: args.price,
        end_date: args.endDate,
        kind: args.kind,
        label: args.label,
        company_seed_user: args.companySeedUser.toBytes(),
        currency_seed_symbol: args.currencySeedSymbol,
        unit_seed_name: args.unitSeedName,
        auction_seed_company: args.auctionSeedCompany.toBytes(),
    });
    var companyPubkey = pda.deriveCompanyPDA({
        user: args.companySeedUser,
    }, _programId)[0];
    var currencyPubkey = pda.deriveCurrencyPDA({
        symbol: args.currencySeedSymbol,
    }, _programId)[0];
    var unitPubkey = pda.deriveAuctionWeightUnitPDA({
        name: args.unitSeedName,
    }, _programId)[0];
    var auctionPubkey = pda.deriveAuctionPDA({
        company: args.auctionSeedCompany,
    }, _programId)[0];
    return new web3_js_1.TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            { pubkey: args.feePayer, isSigner: true, isWritable: true },
            { pubkey: companyPubkey, isSigner: false, isWritable: false },
            { pubkey: currencyPubkey, isSigner: false, isWritable: false },
            { pubkey: unitPubkey, isSigner: false, isWritable: false },
            { pubkey: auctionPubkey, isSigner: false, isWritable: true },
            { pubkey: new web3_js_1.PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false },
        ],
        programId: _programId,
    });
};
exports.createAuction = createAuction;
/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` company: {@link Company}
 * 2. `[]` currency: {@link Currency}
 * 3. `[]` unit: {@link AuctionWeightUnit}
 * 4. `[writable]` auction: {@link Auction}
 * 5. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - name: {@link string}
 * - purity_level: {@link string}
 * - color_of_hydrogen: {@link string}
 * - weight: {@link number}
 * - thumbnail_image: {@link string | undefined}
 * - price: {@link number}
 * - end_date: {@link BigInt} Timestamp for the end date
 * - kind: {@link number}
 * - label: {@link number}
 * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
 * - currency_seed_symbol: {@link string} Auto-generated, from input currency of type [Currency] set the seed named symbol, required by the type
 * - unit_seed_name: {@link string} Auto-generated, from input unit of type [AuctionWeightUnit] set the seed named name, required by the type
 * - auction_seed_company: {@link PublicKey} Auto-generated, from input auction of type [Auction] set the seed named company, required by the type
 */
var createAuctionSendAndConfirm = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var trx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                trx = new web3_js_1.Transaction();
                trx.add((0, exports.createAuction)(__assign(__assign({}, args), { feePayer: args.signers.feePayer.publicKey })));
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(_connection, trx, [args.signers.feePayer,])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createAuctionSendAndConfirm = createAuctionSendAndConfirm;
/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` company: {@link Company}
 * 2. `[]` auction: {@link Auction}
 * 3. `[writable]` bid: {@link AuctionBid}
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - amount: {@link BigInt}
 * - is_anonymous: {@link boolean}
 * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
 * - auction_seed_company: {@link PublicKey} Auto-generated, from input auction of type [Auction] set the seed named company, required by the type
 * - bid_seed_auction: {@link PublicKey} Auto-generated, from input bid of type [AuctionBid] set the seed named auction, required by the type
 * - bid_seed_index: {@link number} Auto-generated, from input bid of type [AuctionBid] set the seed named index, required by the type
 */
var createAuctionBid = function (args) {
    var data = (0, borsh_1.serialize)({
        struct: {
            id: "u8",
            amount: "u64",
            is_anonymous: "bool",
            company_seed_user: { array: { type: "u8", len: 32 } },
            auction_seed_company: { array: { type: "u8", len: 32 } },
            bid_seed_auction: { array: { type: "u8", len: 32 } },
            bid_seed_index: "u32",
        },
    }, {
        id: RegenInstruction.CreateAuctionBid,
        amount: args.amount,
        is_anonymous: args.isAnonymous,
        company_seed_user: args.companySeedUser.toBytes(),
        auction_seed_company: args.auctionSeedCompany.toBytes(),
        bid_seed_auction: args.bidSeedAuction.toBytes(),
        bid_seed_index: args.bidSeedIndex,
    });
    var companyPubkey = pda.deriveCompanyPDA({
        user: args.companySeedUser,
    }, _programId)[0];
    var auctionPubkey = pda.deriveAuctionPDA({
        company: args.auctionSeedCompany,
    }, _programId)[0];
    var bidPubkey = pda.deriveAuctionBidPDA({
        auction: args.bidSeedAuction,
        index: args.bidSeedIndex,
    }, _programId)[0];
    return new web3_js_1.TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            { pubkey: args.feePayer, isSigner: true, isWritable: true },
            { pubkey: companyPubkey, isSigner: false, isWritable: false },
            { pubkey: auctionPubkey, isSigner: false, isWritable: false },
            { pubkey: bidPubkey, isSigner: false, isWritable: true },
            { pubkey: new web3_js_1.PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false },
        ],
        programId: _programId,
    });
};
exports.createAuctionBid = createAuctionBid;
/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` company: {@link Company}
 * 2. `[]` auction: {@link Auction}
 * 3. `[writable]` bid: {@link AuctionBid}
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - amount: {@link BigInt}
 * - is_anonymous: {@link boolean}
 * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
 * - auction_seed_company: {@link PublicKey} Auto-generated, from input auction of type [Auction] set the seed named company, required by the type
 * - bid_seed_auction: {@link PublicKey} Auto-generated, from input bid of type [AuctionBid] set the seed named auction, required by the type
 * - bid_seed_index: {@link number} Auto-generated, from input bid of type [AuctionBid] set the seed named index, required by the type
 */
var createAuctionBidSendAndConfirm = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var trx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                trx = new web3_js_1.Transaction();
                trx.add((0, exports.createAuctionBid)(__assign(__assign({}, args), { feePayer: args.signers.feePayer.publicKey })));
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(_connection, trx, [args.signers.feePayer,])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createAuctionBidSendAndConfirm = createAuctionBidSendAndConfirm;
/**
 * ### Returns a {@link TransactionInstruction}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` company: {@link Company}
 * 2. `[writable]` auction: {@link Auction}
 * 3. `[writable]` bid: {@link AuctionBid}
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - amount: {@link BigInt}
 * - is_anonymous: {@link boolean}
 * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
 * - auction_seed_company: {@link PublicKey} Auto-generated, from input auction of type [Auction] set the seed named company, required by the type
 * - bid_seed_auction: {@link PublicKey} Auto-generated, from input bid of type [AuctionBid] set the seed named auction, required by the type
 * - bid_seed_index: {@link number} Auto-generated, from input bid of type [AuctionBid] set the seed named index, required by the type
 */
var purchaseAuction = function (args) {
    var data = (0, borsh_1.serialize)({
        struct: {
            id: "u8",
            amount: "u64",
            is_anonymous: "bool",
            company_seed_user: { array: { type: "u8", len: 32 } },
            auction_seed_company: { array: { type: "u8", len: 32 } },
            bid_seed_auction: { array: { type: "u8", len: 32 } },
            bid_seed_index: "u32",
        },
    }, {
        id: RegenInstruction.PurchaseAuction,
        amount: args.amount,
        is_anonymous: args.isAnonymous,
        company_seed_user: args.companySeedUser.toBytes(),
        auction_seed_company: args.auctionSeedCompany.toBytes(),
        bid_seed_auction: args.bidSeedAuction.toBytes(),
        bid_seed_index: args.bidSeedIndex,
    });
    var companyPubkey = pda.deriveCompanyPDA({
        user: args.companySeedUser,
    }, _programId)[0];
    var auctionPubkey = pda.deriveAuctionPDA({
        company: args.auctionSeedCompany,
    }, _programId)[0];
    var bidPubkey = pda.deriveAuctionBidPDA({
        auction: args.bidSeedAuction,
        index: args.bidSeedIndex,
    }, _programId)[0];
    return new web3_js_1.TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            { pubkey: args.feePayer, isSigner: true, isWritable: true },
            { pubkey: companyPubkey, isSigner: false, isWritable: false },
            { pubkey: auctionPubkey, isSigner: false, isWritable: true },
            { pubkey: bidPubkey, isSigner: false, isWritable: true },
            { pubkey: new web3_js_1.PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false },
        ],
        programId: _programId,
    });
};
exports.purchaseAuction = purchaseAuction;
/**
 * ### Returns a {@link TransactionSignature}
 * Accounts:
 * 0. `[writable, signer]` fee_payer: {@link PublicKey} Auto-generated, default fee payer
 * 1. `[]` company: {@link Company}
 * 2. `[writable]` auction: {@link Auction}
 * 3. `[writable]` bid: {@link AuctionBid}
 * 4. `[]` system_program: {@link PublicKey} Auto-generated, for account initialization
 *
 * Data:
 * - amount: {@link BigInt}
 * - is_anonymous: {@link boolean}
 * - company_seed_user: {@link PublicKey} Auto-generated, from input company of type [Company] set the seed named user, required by the type
 * - auction_seed_company: {@link PublicKey} Auto-generated, from input auction of type [Auction] set the seed named company, required by the type
 * - bid_seed_auction: {@link PublicKey} Auto-generated, from input bid of type [AuctionBid] set the seed named auction, required by the type
 * - bid_seed_index: {@link number} Auto-generated, from input bid of type [AuctionBid] set the seed named index, required by the type
 */
var purchaseAuctionSendAndConfirm = function (args) { return __awaiter(void 0, void 0, void 0, function () {
    var trx;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                trx = new web3_js_1.Transaction();
                trx.add((0, exports.purchaseAuction)(__assign(__assign({}, args), { feePayer: args.signers.feePayer.publicKey })));
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(_connection, trx, [args.signers.feePayer,])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.purchaseAuctionSendAndConfirm = purchaseAuctionSendAndConfirm;
// Getters
var getBadge = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeBadge((0, borsh_1.deserialize)(T.BadgeSchema, buffer.data))];
            }
        });
    });
};
exports.getBadge = getBadge;
var getUser = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeUser((0, borsh_1.deserialize)(T.UserSchema, buffer.data))];
            }
        });
    });
};
exports.getUser = getUser;
var getCompany = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeCompany((0, borsh_1.deserialize)(T.CompanySchema, buffer.data))];
            }
        });
    });
};
exports.getCompany = getCompany;
var getShippingAddress = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeShippingAddress((0, borsh_1.deserialize)(T.ShippingAddressSchema, buffer.data))];
            }
        });
    });
};
exports.getShippingAddress = getShippingAddress;
var getShippingInformation = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeShippingInformation((0, borsh_1.deserialize)(T.ShippingInformationSchema, buffer.data))];
            }
        });
    });
};
exports.getShippingInformation = getShippingInformation;
var getAuction = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeAuction((0, borsh_1.deserialize)(T.AuctionSchema, buffer.data))];
            }
        });
    });
};
exports.getAuction = getAuction;
var getAuctionBid = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeAuctionBid((0, borsh_1.deserialize)(T.AuctionBidSchema, buffer.data))];
            }
        });
    });
};
exports.getAuctionBid = getAuctionBid;
var getAuctionWeightUnit = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeAuctionWeightUnit((0, borsh_1.deserialize)(T.AuctionWeightUnitSchema, buffer.data))];
            }
        });
    });
};
exports.getAuctionWeightUnit = getAuctionWeightUnit;
var getCurrency = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeCurrency((0, borsh_1.deserialize)(T.CurrencySchema, buffer.data))];
            }
        });
    });
};
exports.getCurrency = getCurrency;
var getOrder = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeOrder((0, borsh_1.deserialize)(T.OrderSchema, buffer.data))];
            }
        });
    });
};
exports.getOrder = getOrder;
var getOrderDocument = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeOrderDocument((0, borsh_1.deserialize)(T.OrderDocumentSchema, buffer.data))];
            }
        });
    });
};
exports.getOrderDocument = getOrderDocument;
var getTransaction = function (publicKey, commitmentOrConfig) {
    if (commitmentOrConfig === void 0) { commitmentOrConfig = "processed"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _connection.getAccountInfo(publicKey, commitmentOrConfig)];
                case 1:
                    buffer = _a.sent();
                    if (!buffer) {
                        return [2 /*return*/, undefined];
                    }
                    if (buffer.data.length <= 0) {
                        return [2 /*return*/, undefined];
                    }
                    return [2 /*return*/, T.decodeTransaction((0, borsh_1.deserialize)(T.TransactionSchema, buffer.data))];
            }
        });
    });
};
exports.getTransaction = getTransaction;
// Websocket Events
