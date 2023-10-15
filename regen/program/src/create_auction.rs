use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	Auction,
	AuctionWeightUnit,
	Company,
	Currency,
};


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
pub fn create_auction(
	program_id: &Pubkey,
	company: &AccountPDA<Company>,
	currency: &AccountPDA<Currency>,
	unit: &AccountPDA<AuctionWeightUnit>,
	auction: &mut AccountPDA<Auction>,
	name: String,
	purity_level: String,
	color_of_hydrogen: String,
	weight: f64,
	thumbnail_image: Option<String>,
	price: f64,
	end_date: u64,
	kind: u8,
	label: u8,
) -> ProgramResult {
    auction.data.unit = *unit.info.key;
    auction.data.currency = *currency.info.key;
    auction.data.company = *company.info.key;
    auction.data.name = name;
    auction.data.purity_level = purity_level;
    auction.data.color_of_hydrogen = color_of_hydrogen;
    auction.data.weight = weight;
    auction.data.thumbnail_image = thumbnail_image;
    auction.data.price = price;
    auction.data.end_date = end_date;
    auction.data.kind = kind;
    auction.data.label = label;
    auction.data.starting_bid = weight * price;
    auction.data.status = 0;

    Ok(())
}