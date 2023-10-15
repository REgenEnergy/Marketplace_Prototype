use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	Company,
	ShippingAddress,
	User,
};


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
pub fn create_user_type_buyer(
	program_id: &Pubkey,
	user: &mut AccountPDA<User>,
	company: &mut AccountPDA<Company>,
	shipping: &mut AccountPDA<ShippingAddress>,
	user_id: String,
	company_name: String,
	registration_number: String,
	address: String,
	accreditations: Option<String>,
	contact_number: Option<String>,
	key_person: String,
	key_person_role: String,
	shipping_address: String,
	shipping_label: String,
) -> ProgramResult {
    user.data.id = user_id;
    user.data.role = 2; // Buyer
    user.data.company = Some(*company.info.key);

    company.data.name = company_name;
    company.data.registration_number = registration_number;
    company.data.address = address;
    company.data.accreditations = accreditations;
    company.data.contact_number = contact_number;
    company.data.key_person = key_person;
    company.data.key_person_role = key_person_role;
    company.data.user = *user.info.key;

    shipping.data.address = shipping_address;
    shipping.data.label = shipping_label;

    Ok(())
}