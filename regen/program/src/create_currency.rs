use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	Currency,
};


/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` currency: [Currency] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - symbol: [String] 
/// - name: [String] 
/// - value: [f64] 
pub fn create_currency(
	program_id: &Pubkey,
	currency: &mut AccountPDA<Currency>,
	symbol: String,
	name: String,
	value: f64,
) -> ProgramResult {
    currency.data.symbol = symbol;
    currency.data.name = name;
    currency.data.value = value;

    Ok(())
}