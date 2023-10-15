// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import * as pda from "./pda";
import * as T from "./types";
import {
    Commitment,
    Connection,
    GetAccountInfoConfig,
    Keypair,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction,
    TransactionInstruction,
    TransactionSignature,
} from "@solana/web3.js";
import {deserialize, serialize} from "borsh";


let _programId: PublicKey;
let _connection: Connection;

export const initializeClient = (
    programId: PublicKey,
    connection: Connection
) => {
    _programId = programId;
    _connection = connection;
};

export enum RegenInstruction {
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
    CreateUserTypeBuyer = 0,

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
    CreateUserTypeSupplier = 1,

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
    CreateCurrency = 2,

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
    CreateUnit = 3,

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
    CreateAuction = 4,

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
    CreateAuctionBid = 5,

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
    PurchaseAuction = 6,
}

export type CreateUserTypeBuyerArgs = {
    feePayer: PublicKey;
    userId: string;
    companyName: string;
    registrationNumber: string;
    address: string;
    accreditations: string | undefined;
    contactNumber: string | undefined;
    keyPerson: string;
    keyPersonRole: string;
    shippingAddress: string;
    shippingLabel: string;
    companySeedUser: PublicKey;
    shippingSeedCompany: PublicKey;
};


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
export const createUserTypeBuyer = (args: CreateUserTypeBuyerArgs): TransactionInstruction => {
    const data = serialize(
        {
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
        },
        {
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
        }
    );

    const [userPubkey] = pda.deriveUserPDA({
        id: args.userId,
    }, _programId);
    const [companyPubkey] = pda.deriveCompanyPDA({
        user: args.companySeedUser,
    }, _programId);
    const [shippingPubkey] = pda.deriveShippingAddressPDA({
        company: args.shippingSeedCompany,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: userPubkey, isSigner: false, isWritable: true},
            {pubkey: companyPubkey, isSigner: false, isWritable: true},
            {pubkey: shippingPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

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
export const createUserTypeBuyerSendAndConfirm = async (
    args: Omit<CreateUserTypeBuyerArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(createUserTypeBuyer({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type CreateUserTypeSupplierArgs = {
    feePayer: PublicKey;
    userId: string;
    companyName: string;
    registrationNumber: string;
    address: string;
    accreditations: string | undefined;
    contactNumber: string | undefined;
    keyPerson: string;
    keyPersonRole: string;
    shippingRadius: string;
    shippingAddress: string;
    shippingMethod: string;
    shippingProvider: string;
    shippingCost: bigint;
    shippingCurrency: string;
    shippingInsuranceProvider: string | undefined;
    shippingInsuranceCharges: bigint | undefined;
    shippingOtherCharges: bigint | undefined;
    companySeedUser: PublicKey;
    shippingInformationSeedCompany: PublicKey;
};


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
export const createUserTypeSupplier = (args: CreateUserTypeSupplierArgs): TransactionInstruction => {
    const data = serialize(
        {
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
        },
        {
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
        }
    );

    const [userPubkey] = pda.deriveUserPDA({
        id: args.userId,
    }, _programId);
    const [companyPubkey] = pda.deriveCompanyPDA({
        user: args.companySeedUser,
    }, _programId);
    const [shippingInformationPubkey] = pda.deriveShippingInformationPDA({
        company: args.shippingInformationSeedCompany,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: userPubkey, isSigner: false, isWritable: true},
            {pubkey: companyPubkey, isSigner: false, isWritable: true},
            {pubkey: shippingInformationPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

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
export const createUserTypeSupplierSendAndConfirm = async (
    args: Omit<CreateUserTypeSupplierArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(createUserTypeSupplier({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type CreateCurrencyArgs = {
    feePayer: PublicKey;
    symbol: string;
    name: string;
    value: number;
};


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
export const createCurrency = (args: CreateCurrencyArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                symbol: "string",
                name: "string",
                value: "f64",
            },
        },
        {
            id: RegenInstruction.CreateCurrency,
            symbol: args.symbol,
            name: args.name,
            value: args.value,
        }
    );

    const [currencyPubkey] = pda.deriveCurrencyPDA({
        symbol: args.symbol,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: currencyPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

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
export const createCurrencySendAndConfirm = async (
    args: Omit<CreateCurrencyArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(createCurrency({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type CreateUnitArgs = {
    feePayer: PublicKey;
    name: string;
    conversionRate: bigint;
};


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
export const createUnit = (args: CreateUnitArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                name: "string",
                conversion_rate: "u64",
            },
        },
        {
            id: RegenInstruction.CreateUnit,
            name: args.name,
            conversion_rate: args.conversionRate,
        }
    );

    const [unitPubkey] = pda.deriveAuctionWeightUnitPDA({
        name: args.name,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: unitPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

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
export const createUnitSendAndConfirm = async (
    args: Omit<CreateUnitArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(createUnit({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type CreateAuctionArgs = {
    feePayer: PublicKey;
    name: string;
    purityLevel: string;
    colorOfHydrogen: string;
    weight: number;
    thumbnailImage: string | undefined;
    price: number;
    endDate: bigint;
    kind: number;
    label: number;
    companySeedUser: PublicKey;
    currencySeedSymbol: string;
    unitSeedName: string;
    auctionSeedCompany: PublicKey;
};


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
export const createAuction = (args: CreateAuctionArgs): TransactionInstruction => {
    const data = serialize(
        {
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
        },
        {
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
        }
    );

    const [companyPubkey] = pda.deriveCompanyPDA({
        user: args.companySeedUser,
    }, _programId);
    const [currencyPubkey] = pda.deriveCurrencyPDA({
        symbol: args.currencySeedSymbol,
    }, _programId);
    const [unitPubkey] = pda.deriveAuctionWeightUnitPDA({
        name: args.unitSeedName,
    }, _programId);
    const [auctionPubkey] = pda.deriveAuctionPDA({
        company: args.auctionSeedCompany,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: companyPubkey, isSigner: false, isWritable: false},
            {pubkey: currencyPubkey, isSigner: false, isWritable: false},
            {pubkey: unitPubkey, isSigner: false, isWritable: false},
            {pubkey: auctionPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

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
export const createAuctionSendAndConfirm = async (
    args: Omit<CreateAuctionArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(createAuction({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type CreateAuctionBidArgs = {
    feePayer: PublicKey;
    amount: bigint;
    isAnonymous: boolean;
    companySeedUser: PublicKey;
    auctionSeedCompany: PublicKey;
    bidSeedAuction: PublicKey;
    bidSeedIndex: number;
};


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
export const createAuctionBid = (args: CreateAuctionBidArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                amount: "u64",
                is_anonymous: "bool",
                company_seed_user: { array: { type: "u8", len: 32 } },
                auction_seed_company: { array: { type: "u8", len: 32 } },
                bid_seed_auction: { array: { type: "u8", len: 32 } },
                bid_seed_index: "u32",
            },
        },
        {
            id: RegenInstruction.CreateAuctionBid,
            amount: args.amount,
            is_anonymous: args.isAnonymous,
            company_seed_user: args.companySeedUser.toBytes(),
            auction_seed_company: args.auctionSeedCompany.toBytes(),
            bid_seed_auction: args.bidSeedAuction.toBytes(),
            bid_seed_index: args.bidSeedIndex,
        }
    );

    const [companyPubkey] = pda.deriveCompanyPDA({
        user: args.companySeedUser,
    }, _programId);
    const [auctionPubkey] = pda.deriveAuctionPDA({
        company: args.auctionSeedCompany,
    }, _programId);
    const [bidPubkey] = pda.deriveAuctionBidPDA({
        auction: args.bidSeedAuction,
        index: args.bidSeedIndex,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: companyPubkey, isSigner: false, isWritable: false},
            {pubkey: auctionPubkey, isSigner: false, isWritable: false},
            {pubkey: bidPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

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
export const createAuctionBidSendAndConfirm = async (
    args: Omit<CreateAuctionBidArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(createAuctionBid({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

export type PurchaseAuctionArgs = {
    feePayer: PublicKey;
    amount: bigint;
    isAnonymous: boolean;
    companySeedUser: PublicKey;
    auctionSeedCompany: PublicKey;
    bidSeedAuction: PublicKey;
    bidSeedIndex: number;
};


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
export const purchaseAuction = (args: PurchaseAuctionArgs): TransactionInstruction => {
    const data = serialize(
        {
            struct: {
                id: "u8",
                amount: "u64",
                is_anonymous: "bool",
                company_seed_user: { array: { type: "u8", len: 32 } },
                auction_seed_company: { array: { type: "u8", len: 32 } },
                bid_seed_auction: { array: { type: "u8", len: 32 } },
                bid_seed_index: "u32",
            },
        },
        {
            id: RegenInstruction.PurchaseAuction,
            amount: args.amount,
            is_anonymous: args.isAnonymous,
            company_seed_user: args.companySeedUser.toBytes(),
            auction_seed_company: args.auctionSeedCompany.toBytes(),
            bid_seed_auction: args.bidSeedAuction.toBytes(),
            bid_seed_index: args.bidSeedIndex,
        }
    );

    const [companyPubkey] = pda.deriveCompanyPDA({
        user: args.companySeedUser,
    }, _programId);
    const [auctionPubkey] = pda.deriveAuctionPDA({
        company: args.auctionSeedCompany,
    }, _programId);
    const [bidPubkey] = pda.deriveAuctionBidPDA({
        auction: args.bidSeedAuction,
        index: args.bidSeedIndex,
    }, _programId);

    return new TransactionInstruction({
        data: Buffer.from(data),
        keys: [
            {pubkey: args.feePayer, isSigner: true, isWritable: true},
            {pubkey: companyPubkey, isSigner: false, isWritable: false},
            {pubkey: auctionPubkey, isSigner: false, isWritable: true},
            {pubkey: bidPubkey, isSigner: false, isWritable: true},
            {pubkey: new PublicKey("11111111111111111111111111111111"), isSigner: false, isWritable: false},
        ],
        programId: _programId,
    });
};

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
export const purchaseAuctionSendAndConfirm = async (
    args: Omit<PurchaseAuctionArgs, "feePayer"> & { 
        signers: { feePayer: Keypair, }
 }
): Promise<TransactionSignature> => {
    const trx = new Transaction();


    trx.add(purchaseAuction({
        ...args,
        feePayer: args.signers.feePayer.publicKey,
    }));

    return await sendAndConfirmTransaction(
        _connection,
        trx,
        [args.signers.feePayer, ]
    );
};

// Getters

export const getBadge = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Badge | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeBadge(deserialize(T.BadgeSchema, buffer.data) as Record<string, unknown>);
}

export const getUser = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.User | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeUser(deserialize(T.UserSchema, buffer.data) as Record<string, unknown>);
}

export const getCompany = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Company | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeCompany(deserialize(T.CompanySchema, buffer.data) as Record<string, unknown>);
}

export const getShippingAddress = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.ShippingAddress | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeShippingAddress(deserialize(T.ShippingAddressSchema, buffer.data) as Record<string, unknown>);
}

export const getShippingInformation = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.ShippingInformation | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeShippingInformation(deserialize(T.ShippingInformationSchema, buffer.data) as Record<string, unknown>);
}

export const getAuction = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Auction | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeAuction(deserialize(T.AuctionSchema, buffer.data) as Record<string, unknown>);
}

export const getAuctionBid = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.AuctionBid | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeAuctionBid(deserialize(T.AuctionBidSchema, buffer.data) as Record<string, unknown>);
}

export const getAuctionWeightUnit = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.AuctionWeightUnit | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeAuctionWeightUnit(deserialize(T.AuctionWeightUnitSchema, buffer.data) as Record<string, unknown>);
}

export const getCurrency = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Currency | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeCurrency(deserialize(T.CurrencySchema, buffer.data) as Record<string, unknown>);
}

export const getOrder = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Order | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeOrder(deserialize(T.OrderSchema, buffer.data) as Record<string, unknown>);
}

export const getOrderDocument = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.OrderDocument | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeOrderDocument(deserialize(T.OrderDocumentSchema, buffer.data) as Record<string, unknown>);
}

export const getTransaction = async (
    publicKey: PublicKey,
    commitmentOrConfig: Commitment | GetAccountInfoConfig | undefined = "processed"
): Promise<T.Transaction | undefined> => {
    const buffer = await _connection.getAccountInfo(publicKey, commitmentOrConfig);

    if (!buffer) {
        return undefined
    }

    if (buffer.data.length <= 0) {
        return undefined
    }

    return T.decodeTransaction(deserialize(T.TransactionSchema, buffer.data) as Record<string, unknown>);
}


// Websocket Events

