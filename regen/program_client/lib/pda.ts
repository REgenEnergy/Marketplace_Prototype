// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import {PublicKey} from "@solana/web3.js";

export type BadgeSeeds = {
    name: string, 
};

export const deriveBadgePDA = (
    seeds: BadgeSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("badge"),
            Buffer.from(seeds.name, "utf8"),
        ],
        programId,
    )
};

export type UserSeeds = {
    id: string, 
};

export const deriveUserPDA = (
    seeds: UserSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("user"),
            Buffer.from(seeds.id, "utf8"),
        ],
        programId,
    )
};

export type CompanySeeds = {
    user: PublicKey, 
};

export const deriveCompanyPDA = (
    seeds: CompanySeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("company"),
            seeds.user.toBuffer(),
        ],
        programId,
    )
};

export type ShippingAddressSeeds = {
    company: PublicKey, 
};

export const deriveShippingAddressPDA = (
    seeds: ShippingAddressSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("company_shipping_address"),
            seeds.company.toBuffer(),
        ],
        programId,
    )
};

export type ShippingInformationSeeds = {
    company: PublicKey, 
};

export const deriveShippingInformationPDA = (
    seeds: ShippingInformationSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("company_shipping_information"),
            seeds.company.toBuffer(),
        ],
        programId,
    )
};

export type AuctionSeeds = {
    company: PublicKey, 
};

export const deriveAuctionPDA = (
    seeds: AuctionSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("auction"),
            seeds.company.toBuffer(),
        ],
        programId,
    )
};

export type AuctionBidSeeds = {
    auction: PublicKey, 
    index: number, 
};

export const deriveAuctionBidPDA = (
    seeds: AuctionBidSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("auction_bid"),
            seeds.auction.toBuffer(),
            Buffer.from(Uint32Array.from([seeds.index]).buffer),
        ],
        programId,
    )
};

export type AuctionWeightUnitSeeds = {
    name: string, 
};

export const deriveAuctionWeightUnitPDA = (
    seeds: AuctionWeightUnitSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("auction_weight_unit"),
            Buffer.from(seeds.name, "utf8"),
        ],
        programId,
    )
};

export type CurrencySeeds = {
    symbol: string, 
};

export const deriveCurrencyPDA = (
    seeds: CurrencySeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("currrency"),
            Buffer.from(seeds.symbol, "utf8"),
        ],
        programId,
    )
};

export type OrderSeeds = {
    auction: PublicKey, 
};

export const deriveOrderPDA = (
    seeds: OrderSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("order"),
            seeds.auction.toBuffer(),
        ],
        programId,
    )
};

export type OrderDocumentSeeds = {
    order: PublicKey, 
};

export const deriveOrderDocumentPDA = (
    seeds: OrderDocumentSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("order_document"),
            seeds.order.toBuffer(),
        ],
        programId,
    )
};

export type TransactionSeeds = {
    order: PublicKey, 
};

export const deriveTransactionPDA = (
    seeds: TransactionSeeds,
    programId: PublicKey
): [PublicKey, number] => {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("transaction"),
            seeds.order.toBuffer(),
        ],
        programId,
    )
};

