// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;
use solana_program::pubkey::Pubkey;
use crate::generated::errors::RegenError;

#[derive(BorshSerialize, Debug)]
pub enum RegenInstruction {
/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` user: [User] 
/// 2. `[writable]` company: [Company] 
/// 3. `[writable]` shipping: [ShippingAddress] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - user_id: [String] 
/// - company_name: [String] 
/// - registration_number: [String] 
/// - address: [String] 
/// - accreditations: [Option<String>] 
/// - contact_number: [Option<String>] 
/// - key_person: [String] 
/// - key_person_role: [String] 
/// - shipping_address: [String] 
/// - shipping_label: [String] 
/// - company_seed_user: [Pubkey] Auto-generated, from input company of type [Company] set the seed named user, required by the type
/// - shipping_seed_company: [Pubkey] Auto-generated, from input shipping of type [ShippingAddress] set the seed named company, required by the type
	CreateUserTypeBuyer(CreateUserTypeBuyerArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` user: [User] 
/// 2. `[writable]` company: [Company] 
/// 3. `[writable]` shipping_information: [ShippingInformation] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - user_id: [String] 
/// - company_name: [String] 
/// - registration_number: [String] 
/// - address: [String] 
/// - accreditations: [Option<String>] 
/// - contact_number: [Option<String>] 
/// - key_person: [String] 
/// - key_person_role: [String] 
/// - shipping_radius: [String] 
/// - shipping_address: [String] 
/// - shipping_method: [String] 
/// - shipping_provider: [String] 
/// - shipping_cost: [u64] 
/// - shipping_currency: [String] 
/// - shipping_insurance_provider: [Option<String>] 
/// - shipping_insurance_charges: [Option<u64>] 
/// - shipping_other_charges: [Option<u64>] 
/// - company_seed_user: [Pubkey] Auto-generated, from input company of type [Company] set the seed named user, required by the type
/// - shipping_information_seed_company: [Pubkey] Auto-generated, from input shipping_information of type [ShippingInformation] set the seed named company, required by the type
	CreateUserTypeSupplier(CreateUserTypeSupplierArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` currency: [Currency] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - symbol: [String] 
/// - name: [String] 
/// - value: [f64] 
	CreateCurrency(CreateCurrencyArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` unit: [AuctionWeightUnit] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - name: [String] 
/// - conversion_rate: [u64] 
	CreateUnit(CreateUnitArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` company: [Company] 
/// 2. `[]` currency: [Currency] 
/// 3. `[]` unit: [AuctionWeightUnit] 
/// 4. `[writable]` auction: [Auction] 
/// 5. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - name: [String] 
/// - purity_level: [String] 
/// - color_of_hydrogen: [String] 
/// - weight: [f64] 
/// - thumbnail_image: [Option<String>] 
/// - price: [f64] 
/// - end_date: [u64] Timestamp for the end date
/// - kind: [u8] 
/// - label: [u8] 
/// - company_seed_user: [Pubkey] Auto-generated, from input company of type [Company] set the seed named user, required by the type
/// - currency_seed_symbol: [String] Auto-generated, from input currency of type [Currency] set the seed named symbol, required by the type
/// - unit_seed_name: [String] Auto-generated, from input unit of type [AuctionWeightUnit] set the seed named name, required by the type
/// - auction_seed_company: [Pubkey] Auto-generated, from input auction of type [Auction] set the seed named company, required by the type
	CreateAuction(CreateAuctionArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` company: [Company] 
/// 2. `[]` auction: [Auction] 
/// 3. `[writable]` bid: [AuctionBid] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - amount: [u64] 
/// - is_anonymous: [bool] 
/// - company_seed_user: [Pubkey] Auto-generated, from input company of type [Company] set the seed named user, required by the type
/// - auction_seed_company: [Pubkey] Auto-generated, from input auction of type [Auction] set the seed named company, required by the type
/// - bid_seed_auction: [Pubkey] Auto-generated, from input bid of type [AuctionBid] set the seed named auction, required by the type
/// - bid_seed_index: [u32] Auto-generated, from input bid of type [AuctionBid] set the seed named index, required by the type
	CreateAuctionBid(CreateAuctionBidArgs),

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[]` company: [Company] 
/// 2. `[writable]` auction: [Auction] 
/// 3. `[writable]` bid: [AuctionBid] 
/// 4. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - amount: [u64] 
/// - is_anonymous: [bool] 
/// - company_seed_user: [Pubkey] Auto-generated, from input company of type [Company] set the seed named user, required by the type
/// - auction_seed_company: [Pubkey] Auto-generated, from input auction of type [Auction] set the seed named company, required by the type
/// - bid_seed_auction: [Pubkey] Auto-generated, from input bid of type [AuctionBid] set the seed named auction, required by the type
/// - bid_seed_index: [u32] Auto-generated, from input bid of type [AuctionBid] set the seed named index, required by the type
	PurchaseAuction(PurchaseAuctionArgs),

}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateUserTypeBuyerArgs {
	pub user_id: String,
	pub company_name: String,
	pub registration_number: String,
	pub address: String,
	pub accreditations: Option<String>,
	pub contact_number: Option<String>,
	pub key_person: String,
	pub key_person_role: String,
	pub shipping_address: String,
	pub shipping_label: String,
	pub company_seed_user: Pubkey,
	pub shipping_seed_company: Pubkey,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateUserTypeSupplierArgs {
	pub user_id: String,
	pub company_name: String,
	pub registration_number: String,
	pub address: String,
	pub accreditations: Option<String>,
	pub contact_number: Option<String>,
	pub key_person: String,
	pub key_person_role: String,
	pub shipping_radius: String,
	pub shipping_address: String,
	pub shipping_method: String,
	pub shipping_provider: String,
	pub shipping_cost: u64,
	pub shipping_currency: String,
	pub shipping_insurance_provider: Option<String>,
	pub shipping_insurance_charges: Option<u64>,
	pub shipping_other_charges: Option<u64>,
	pub company_seed_user: Pubkey,
	pub shipping_information_seed_company: Pubkey,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateCurrencyArgs {
	pub symbol: String,
	pub name: String,
	pub value: f64,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateUnitArgs {
	pub name: String,
	pub conversion_rate: u64,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateAuctionArgs {
	pub name: String,
	pub purity_level: String,
	pub color_of_hydrogen: String,
	pub weight: f64,
	pub thumbnail_image: Option<String>,
	pub price: f64,
	pub end_date: u64,
	pub kind: u8,
	pub label: u8,
	pub company_seed_user: Pubkey,
	pub currency_seed_symbol: String,
	pub unit_seed_name: String,
	pub auction_seed_company: Pubkey,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct CreateAuctionBidArgs {
	pub amount: u64,
	pub is_anonymous: bool,
	pub company_seed_user: Pubkey,
	pub auction_seed_company: Pubkey,
	pub bid_seed_auction: Pubkey,
	pub bid_seed_index: u32,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct PurchaseAuctionArgs {
	pub amount: u64,
	pub is_anonymous: bool,
	pub company_seed_user: Pubkey,
	pub auction_seed_company: Pubkey,
	pub bid_seed_auction: Pubkey,
	pub bid_seed_index: u32,
}

impl RegenInstruction {
    pub fn unpack(input: &[u8]) -> Result<Self, ProgramError> {
        let (&variant, rest) = input.split_first().ok_or(RegenError::InvalidInstruction)?;

        Ok(match variant {
			0 => Self::CreateUserTypeBuyer(CreateUserTypeBuyerArgs::try_from_slice(rest).unwrap()),
			1 => Self::CreateUserTypeSupplier(CreateUserTypeSupplierArgs::try_from_slice(rest).unwrap()),
			2 => Self::CreateCurrency(CreateCurrencyArgs::try_from_slice(rest).unwrap()),
			3 => Self::CreateUnit(CreateUnitArgs::try_from_slice(rest).unwrap()),
			4 => Self::CreateAuction(CreateAuctionArgs::try_from_slice(rest).unwrap()),
			5 => Self::CreateAuctionBid(CreateAuctionBidArgs::try_from_slice(rest).unwrap()),
			6 => Self::PurchaseAuction(PurchaseAuctionArgs::try_from_slice(rest).unwrap()),
			_ => return Err(RegenError::InvalidInstruction.into())
        })
    }
}