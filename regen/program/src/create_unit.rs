use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	AuctionWeightUnit,
};


/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` unit: [AuctionWeightUnit] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - name: [String] 
/// - conversion_rate: [u64] 
pub fn create_unit(
	program_id: &Pubkey,
	unit: &mut AccountPDA<AuctionWeightUnit>,
	name: String,
	conversion_rate: u64,
) -> ProgramResult {
    unit.data.name = name;
    unit.data.conversion_rate = conversion_rate;

    Ok(())
}