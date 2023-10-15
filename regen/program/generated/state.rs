// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::account_info::AccountInfo;
use solana_program::pubkey::Pubkey;

#[derive(Clone, Debug)]
pub struct Account<'a, 'b, T> {
    pub data: T,
    pub info: &'a AccountInfo<'b>,
}

#[derive(Clone, Debug)]
pub struct AccountPDA<'a, 'b, T> {
    pub data: T,
    pub info: &'a AccountInfo<'b>,
    pub bump: u8,
}

impl<'a, 'b, T> Account<'a, 'b, T> {
    pub fn new(info: &'a AccountInfo<'b>, data: T) -> Self {
        Self { data, info }
    }
}

impl<'a, 'b, T> AccountPDA<'a, 'b, T> {
    pub fn new(info: &'a AccountInfo<'b>, data: T, bump: u8) -> Self {
        Self { data, info, bump }
    }
}

/// TODO
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct Badge {
	pub name: String,
	pub description: Option<String>,
	pub points: u32,
	pub perks: String,
	pub image: String,
	pub kind: u8,
}

impl Badge {
	pub const LEN: usize = 600; 
	}

/// TODO
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct User {
	pub id: String,
	pub balance: u64,
	pub role: u8,
	pub company: Option<Pubkey>,
	pub points: u64,
	pub badge: Option<Pubkey>,
}

impl User {
	pub const LEN: usize = 119; 
	}

/// TODO
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct Company {
	pub name: String,
	pub registration_number: String,
	pub address: String,
	pub accreditations: Option<String>,
	pub contact_number: Option<String>,
	pub key_person: String,
	pub key_person_role: String,
	pub futures_enabled: bool,
	pub user: Pubkey,
}

impl Company {
	pub const LEN: usize = 735; 
	}

/// TODO
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct ShippingAddress {
	pub label: String,
	pub address: String,
	pub company: Pubkey,
}

impl ShippingAddress {
	pub const LEN: usize = 232; 
	}

/// TODO
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct ShippingInformation {
	pub radius: String,
	pub address: String,
	pub method: String,
	pub provider: String,
	pub cost: u64,
	pub currency: String,
	pub insurance_provider: Option<String>,
	pub insurance_charges: Option<u64>,
	pub other_charges: Option<u64>,
	pub company: Pubkey,
}

impl ShippingInformation {
	pub const LEN: usize = 567; 
	}

/// TODO
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct Auction {
	pub name: String,
	pub purity_level: String,
	pub color_of_hydrogen: String,
	pub weight: f64,
	pub thumbnail_image: Option<String>,
	pub unit: Pubkey,
	pub price: f64,
	pub end_date: u64,
	pub starting_bid: f64,
	pub currency: Pubkey,
	pub company: Pubkey,
	pub order: Option<Pubkey>,
	pub status: u8,
	pub kind: u8,
	pub label: u8,
}

impl Auction {
	pub const LEN: usize = 565; 
	}

/// TODO
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct AuctionBid {
	pub amount: u64,
	pub is_anonymous: bool,
}

impl AuctionBid {
	pub const LEN: usize = 9; 
	}

/// TODO
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct AuctionWeightUnit {
	pub name: String,
	pub conversion_rate: u64,
}

impl AuctionWeightUnit {
	pub const LEN: usize = 44; 
	}

/// TODO
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct Currency {
	pub symbol: String,
	pub name: String,
	pub value: f64,
}

impl Currency {
	pub const LEN: usize = 80; 
	}

/// TODO
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct Order {
	pub status: u8,
	pub shipment_status: u8,
	pub transaction_status: u8,
	pub transaction: Option<Pubkey>,
	pub shipment_signature: Option<String>,
	pub product_signature: Option<String>,
	pub is_shipment_verified: bool,
}

impl Order {
	pub const LEN: usize = 239; 
	}

/// TODO
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct OrderDocument {
	pub url: String,
	pub transaction_status: u8,
	pub order: Pubkey,
}

impl OrderDocument {
	pub const LEN: usize = 133; 
	}

/// TODO
#[derive(BorshSerialize, BorshDeserialize, Debug, Clone, Default)]
pub struct Transaction {
	pub amount: f64,
	pub currency: String,
	pub status: u8,
	pub kind: u8,
	pub order: Pubkey,
}

impl Transaction {
	pub const LEN: usize = 62; 
	}

