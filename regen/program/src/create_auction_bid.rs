use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::{state::{
	AccountPDA,
	Auction,
	AuctionBid,
	Company,
}, errors::RegenError};


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
pub fn create_auction_bid(
	program_id: &Pubkey,
	company: &AccountPDA<Company>,
	auction: &AccountPDA<Auction>,
	bid: &mut AccountPDA<AuctionBid>,
	amount: u64,
	is_anonymous: bool,
) -> ProgramResult {
    if auction.data.status != 0 {
        return Err(RegenError::AuctionIsNotOpen.into());
    }

    bid.data.amount = amount;
    bid.data.is_anonymous = is_anonymous;

    Ok(())
}