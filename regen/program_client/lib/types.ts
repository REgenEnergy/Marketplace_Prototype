// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

import type {Schema} from 'borsh';
import type {Decoded} from "./utils";
import {PublicKey} from "@solana/web3.js";
import { deserialize } from "borsh";

/// TODO
export interface Badge {
  name: string;
  description: string | undefined;
  points: number;
  perks: string;
  image: string;
  kind: number;
}

export const decodeBadge = (decoded: Decoded): Badge => ({
    name: decoded["name"] as string,
    description: decoded["description"] as string | undefined,
    points: decoded["points"] as number,
    perks: decoded["perks"] as string,
    image: decoded["image"] as string,
    kind: decoded["kind"] as number,
});

export const BadgeSchema: Schema =  {
    struct: {
        name: "string",
        description: { option: "string" },
        points: "u32",
        perks: "string",
        image: "string",
        kind: "u8",
    }
};

/// TODO
export interface User {
  id: string;
  balance: bigint;
  role: number;
  company: PublicKey | undefined;
  points: bigint;
  badge: PublicKey | undefined;
}

export const decodeUser = (decoded: Decoded): User => ({
    id: decoded["id"] as string,
    balance: decoded["balance"] as bigint,
    role: decoded["role"] as number,
    company: decoded["company"] ? new PublicKey(decoded["company"]) : undefined,
    points: decoded["points"] as bigint,
    badge: decoded["badge"] ? new PublicKey(decoded["badge"]) : undefined,
});

export const UserSchema: Schema =  {
    struct: {
        id: "string",
        balance: "u64",
        role: "u8",
        company: { option: { array: { type: "u8", len: 32 } } },
        points: "u64",
        badge: { option: { array: { type: "u8", len: 32 } } },
    }
};

/// TODO
export interface Company {
  name: string;
  registrationNumber: string;
  address: string;
  accreditations: string | undefined;
  contactNumber: string | undefined;
  keyPerson: string;
  keyPersonRole: string;
  futuresEnabled: boolean;
  user: PublicKey;
}

export const decodeCompany = (decoded: Decoded): Company => ({
    name: decoded["name"] as string,
    registrationNumber: decoded["registration_number"] as string,
    address: decoded["address"] as string,
    accreditations: decoded["accreditations"] as string | undefined,
    contactNumber: decoded["contact_number"] as string | undefined,
    keyPerson: decoded["key_person"] as string,
    keyPersonRole: decoded["key_person_role"] as string,
    futuresEnabled: decoded["futures_enabled"] as boolean,
    user: new PublicKey(decoded["user"] as Uint8Array),
});

export const CompanySchema: Schema =  {
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

/// TODO
export interface ShippingAddress {
  label: string;
  address: string;
  company: PublicKey;
}

export const decodeShippingAddress = (decoded: Decoded): ShippingAddress => ({
    label: decoded["label"] as string,
    address: decoded["address"] as string,
    company: new PublicKey(decoded["company"] as Uint8Array),
});

export const ShippingAddressSchema: Schema =  {
    struct: {
        label: "string",
        address: "string",
        company: { array: { type: "u8", len: 32 } },
    }
};

/// TODO
export interface ShippingInformation {
  radius: string;
  address: string;
  method: string;
  provider: string;
  cost: bigint;
  currency: string;
  insuranceProvider: string | undefined;
  insuranceCharges: bigint | undefined;
  otherCharges: bigint | undefined;
  company: PublicKey;
}

export const decodeShippingInformation = (decoded: Decoded): ShippingInformation => ({
    radius: decoded["radius"] as string,
    address: decoded["address"] as string,
    method: decoded["method"] as string,
    provider: decoded["provider"] as string,
    cost: decoded["cost"] as bigint,
    currency: decoded["currency"] as string,
    insuranceProvider: decoded["insurance_provider"] as string | undefined,
    insuranceCharges: decoded["insurance_charges"] as bigint | undefined,
    otherCharges: decoded["other_charges"] as bigint | undefined,
    company: new PublicKey(decoded["company"] as Uint8Array),
});

export const ShippingInformationSchema: Schema =  {
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

/// TODO
export interface Auction {
  name: string;
  purityLevel: string;
  colorOfHydrogen: string;
  weight: number;
  thumbnailImage: string | undefined;
  unit: PublicKey;
  price: number;
  endDate: bigint;
  startingBid: number;
  currency: PublicKey;
  company: PublicKey;
  order: PublicKey | undefined;
  status: number;
  kind: number;
  label: number;
}

export const decodeAuction = (decoded: Decoded): Auction => ({
    name: decoded["name"] as string,
    purityLevel: decoded["purity_level"] as string,
    colorOfHydrogen: decoded["color_of_hydrogen"] as string,
    weight: decoded["weight"] as number,
    thumbnailImage: decoded["thumbnail_image"] as string | undefined,
    unit: new PublicKey(decoded["unit"] as Uint8Array),
    price: decoded["price"] as number,
    endDate: decoded["end_date"] as bigint,
    startingBid: decoded["starting_bid"] as number,
    currency: new PublicKey(decoded["currency"] as Uint8Array),
    company: new PublicKey(decoded["company"] as Uint8Array),
    order: decoded["order"] ? new PublicKey(decoded["order"]) : undefined,
    status: decoded["status"] as number,
    kind: decoded["kind"] as number,
    label: decoded["label"] as number,
});

export const AuctionSchema: Schema =  {
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

/// TODO
export interface AuctionBid {
  amount: bigint;
  isAnonymous: boolean;
}

export const decodeAuctionBid = (decoded: Decoded): AuctionBid => ({
    amount: decoded["amount"] as bigint,
    isAnonymous: decoded["is_anonymous"] as boolean,
});

export const AuctionBidSchema: Schema =  {
    struct: {
        amount: "u64",
        is_anonymous: "bool",
    }
};

/// TODO
export interface AuctionWeightUnit {
  name: string;
  conversionRate: bigint;
}

export const decodeAuctionWeightUnit = (decoded: Decoded): AuctionWeightUnit => ({
    name: decoded["name"] as string,
    conversionRate: decoded["conversion_rate"] as bigint,
});

export const AuctionWeightUnitSchema: Schema =  {
    struct: {
        name: "string",
        conversion_rate: "u64",
    }
};

/// TODO
export interface Currency {
  symbol: string;
  name: string;
  value: number;
}

export const decodeCurrency = (decoded: Decoded): Currency => ({
    symbol: decoded["symbol"] as string,
    name: decoded["name"] as string,
    value: decoded["value"] as number,
});

export const CurrencySchema: Schema =  {
    struct: {
        symbol: "string",
        name: "string",
        value: "f64",
    }
};

/// TODO
export interface Order {
  status: number;
  shipmentStatus: number;
  transactionStatus: number;
  transaction: PublicKey | undefined;
  shipmentSignature: string | undefined;
  productSignature: string | undefined;
  isShipmentVerified: boolean;
}

export const decodeOrder = (decoded: Decoded): Order => ({
    status: decoded["status"] as number,
    shipmentStatus: decoded["shipment_status"] as number,
    transactionStatus: decoded["transaction_status"] as number,
    transaction: decoded["transaction"] ? new PublicKey(decoded["transaction"]) : undefined,
    shipmentSignature: decoded["shipment_signature"] as string | undefined,
    productSignature: decoded["product_signature"] as string | undefined,
    isShipmentVerified: decoded["is_shipment_verified"] as boolean,
});

export const OrderSchema: Schema =  {
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

/// TODO
export interface OrderDocument {
  url: string;
  transactionStatus: number;
  order: PublicKey;
}

export const decodeOrderDocument = (decoded: Decoded): OrderDocument => ({
    url: decoded["url"] as string,
    transactionStatus: decoded["transaction_status"] as number,
    order: new PublicKey(decoded["order"] as Uint8Array),
});

export const OrderDocumentSchema: Schema =  {
    struct: {
        url: "string",
        transaction_status: "u8",
        order: { array: { type: "u8", len: 32 } },
    }
};

/// TODO
export interface Transaction {
  amount: number;
  currency: string;
  status: number;
  kind: number;
  order: PublicKey;
}

export const decodeTransaction = (decoded: Decoded): Transaction => ({
    amount: decoded["amount"] as number,
    currency: decoded["currency"] as string,
    status: decoded["status"] as number,
    kind: decoded["kind"] as number,
    order: new PublicKey(decoded["order"] as Uint8Array),
});

export const TransactionSchema: Schema =  {
    struct: {
        amount: "f64",
        currency: "string",
        status: "u8",
        kind: "u8",
        order: { array: { type: "u8", len: 32 } },
    }
};



