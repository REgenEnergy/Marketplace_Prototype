use solana_program::account_info::AccountInfo;
use solana_program::entrypoint::ProgramResult;
use solana_program::pubkey::Pubkey;

use crate::generated::state::{
	AccountPDA,
	Company,
	ShippingInformation,
	User,
};


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
pub fn create_user_type_supplier(
	program_id: &Pubkey,
	user: &mut AccountPDA<User>,
	company: &mut AccountPDA<Company>,
	shipping_information: &mut AccountPDA<ShippingInformation>,
	user_id: String,
	company_name: String,
	registration_number: String,
	address: String,
	accreditations: Option<String>,
	contact_number: Option<String>,
	key_person: String,
	key_person_role: String,
	shipping_radius: String,
	shipping_address: String,
	shipping_method: String,
	shipping_provider: String,
	shipping_cost: u64,
	shipping_currency: String,
	shipping_insurance_provider: Option<String>,
	shipping_insurance_charges: Option<u64>,
	shipping_other_charges: Option<u64>,
) -> ProgramResult {
    user.data.id = user_id;
    user.data.role = 1; // Suplier
    user.data.company = Some(*company.info.key);

    company.data.name = company_name;
    company.data.registration_number = registration_number;
    company.data.address = address;
    company.data.accreditations = accreditations;
    company.data.contact_number = contact_number;
    company.data.key_person = key_person;
    company.data.key_person_role = key_person_role;
    company.data.user = *user.info.key;

    shipping_information.data.radius = shipping_radius;
    shipping_information.data.address = shipping_address;
    shipping_information.data.method = shipping_method;
    shipping_information.data.provider = shipping_provider;
    shipping_information.data.cost = shipping_cost;
    shipping_information.data.currency = shipping_currency;
    shipping_information.data.insurance_provider = shipping_insurance_provider;
    shipping_information.data.insurance_charges = shipping_insurance_charges;
    shipping_information.data.other_charges = shipping_other_charges;
    shipping_information.data.company = *company.info.key;

    Ok(())
}