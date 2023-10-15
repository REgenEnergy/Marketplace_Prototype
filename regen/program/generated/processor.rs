// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use std::str::FromStr;
use borsh::BorshSerialize;
use solana_program::account_info::{AccountInfo, next_account_info, next_account_infos};
use solana_program::borsh0_10::try_from_slice_unchecked;
use solana_program::entrypoint::ProgramResult;
use solana_program::program::{invoke, invoke_signed};
use solana_program::pubkey::Pubkey;
use solana_program::rent::Rent;
use solana_program::system_instruction::create_account;
use solana_program::{msg, system_program};
use solana_program::sysvar::Sysvar;
use solana_program::program_pack::Pack;
use crate::generated::errors::RegenError;
use crate::generated::instructions::RegenInstruction;

use crate::generated::state::{
	Account,
	AccountPDA,
	Badge,
	User,
	Company,
	ShippingAddress,
	ShippingInformation,
	Auction,
	AuctionBid,
	AuctionWeightUnit,
	Currency,
	Order,
	OrderDocument,
	Transaction,
};
use crate::src::*;

pub struct Processor;

impl Processor {
    pub fn process(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        data: &[u8],
    ) -> ProgramResult {
        let instruction = RegenInstruction::unpack(data)?;

        match instruction {
			RegenInstruction::CreateUserTypeBuyer(args) => {
				msg!("Instruction: CreateUserTypeBuyer");
				Self::process_create_user_type_buyer(
					program_id,
					accounts, 
					args.user_id,
					args.company_name,
					args.registration_number,
					args.address,
					args.accreditations,
					args.contact_number,
					args.key_person,
					args.key_person_role,
					args.shipping_address,
					args.shipping_label,
					args.company_seed_user,
					args.shipping_seed_company,
				)
			}
			RegenInstruction::CreateUserTypeSupplier(args) => {
				msg!("Instruction: CreateUserTypeSupplier");
				Self::process_create_user_type_supplier(
					program_id,
					accounts, 
					args.user_id,
					args.company_name,
					args.registration_number,
					args.address,
					args.accreditations,
					args.contact_number,
					args.key_person,
					args.key_person_role,
					args.shipping_radius,
					args.shipping_address,
					args.shipping_method,
					args.shipping_provider,
					args.shipping_cost,
					args.shipping_currency,
					args.shipping_insurance_provider,
					args.shipping_insurance_charges,
					args.shipping_other_charges,
					args.company_seed_user,
					args.shipping_information_seed_company,
				)
			}
			RegenInstruction::CreateCurrency(args) => {
				msg!("Instruction: CreateCurrency");
				Self::process_create_currency(
					program_id,
					accounts, 
					args.symbol,
					args.name,
					args.value,
				)
			}
			RegenInstruction::CreateUnit(args) => {
				msg!("Instruction: CreateUnit");
				Self::process_create_unit(
					program_id,
					accounts, 
					args.name,
					args.conversion_rate,
				)
			}
			RegenInstruction::CreateAuction(args) => {
				msg!("Instruction: CreateAuction");
				Self::process_create_auction(
					program_id,
					accounts, 
					args.name,
					args.purity_level,
					args.color_of_hydrogen,
					args.weight,
					args.thumbnail_image,
					args.price,
					args.end_date,
					args.kind,
					args.label,
					args.company_seed_user,
					args.currency_seed_symbol,
					args.unit_seed_name,
					args.auction_seed_company,
				)
			}
			RegenInstruction::CreateAuctionBid(args) => {
				msg!("Instruction: CreateAuctionBid");
				Self::process_create_auction_bid(
					program_id,
					accounts, 
					args.amount,
					args.is_anonymous,
					args.company_seed_user,
					args.auction_seed_company,
					args.bid_seed_auction,
					args.bid_seed_index,
				)
			}
			RegenInstruction::PurchaseAuction(args) => {
				msg!("Instruction: PurchaseAuction");
				Self::process_purchase_auction(
					program_id,
					accounts, 
					args.amount,
					args.is_anonymous,
					args.company_seed_user,
					args.auction_seed_company,
					args.bid_seed_auction,
					args.bid_seed_index,
				)
			}
        }
    }

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
	pub fn process_create_user_type_buyer(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
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
		company_seed_user: Pubkey,
		shipping_seed_company: Pubkey,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let user_info = next_account_info(account_info_iter)?;
		let company_info = next_account_info(account_info_iter)?;
		let shipping_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (user_pubkey, user_bump) = Pubkey::find_program_address(
			&[b"user", user_id.as_bytes().as_ref()],
			program_id,
		);
		let (company_pubkey, company_bump) = Pubkey::find_program_address(
			&[b"company", company_seed_user.as_ref()],
			program_id,
		);
		let (shipping_pubkey, shipping_bump) = Pubkey::find_program_address(
			&[b"company_shipping_address", shipping_seed_company.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(RegenError::InvalidSignerPermission.into());
		}

		if *user_info.key != user_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *company_info.key != company_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *shipping_info.key != shipping_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = User::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&user_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), user_info.clone()],
			&[&[b"user", user_id.as_bytes().as_ref(), &[user_bump]]],
		)?;

		let space = Company::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&company_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), company_info.clone()],
			&[&[b"company", company_seed_user.as_ref(), &[company_bump]]],
		)?;

		let space = ShippingAddress::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&shipping_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), shipping_info.clone()],
			&[&[b"company_shipping_address", shipping_seed_company.as_ref(), &[shipping_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::WrongAccountOwner.into());
		}

		if user_info.data_len() != User::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}

		if company_info.data_len() != Company::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}

		if shipping_info.data_len() != ShippingAddress::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let user = &mut AccountPDA::new(
			&user_info,
			try_from_slice_unchecked::<User>(&user_info.data.borrow()).unwrap(),
			user_bump,
		);
		let company = &mut AccountPDA::new(
			&company_info,
			try_from_slice_unchecked::<Company>(&company_info.data.borrow()).unwrap(),
			company_bump,
		);
		let shipping = &mut AccountPDA::new(
			&shipping_info,
			try_from_slice_unchecked::<ShippingAddress>(&shipping_info.data.borrow()).unwrap(),
			shipping_bump,
		);

		// Calling STUB
		create_user_type_buyer::create_user_type_buyer(
			program_id,
			user,
			company,
			shipping,
			user_id,
			company_name,
			registration_number,
			address,
			accreditations,
			contact_number,
			key_person,
			key_person_role,
			shipping_address,
			shipping_label,
		)?;

		// Accounts Serialization
		user.data.serialize(&mut &mut user_info.data.borrow_mut()[..])?;		company.data.serialize(&mut &mut company_info.data.borrow_mut()[..])?;		shipping.data.serialize(&mut &mut shipping_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

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
	pub fn process_create_user_type_supplier(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
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
		company_seed_user: Pubkey,
		shipping_information_seed_company: Pubkey,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let user_info = next_account_info(account_info_iter)?;
		let company_info = next_account_info(account_info_iter)?;
		let shipping_information_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (user_pubkey, user_bump) = Pubkey::find_program_address(
			&[b"user", user_id.as_bytes().as_ref()],
			program_id,
		);
		let (company_pubkey, company_bump) = Pubkey::find_program_address(
			&[b"company", company_seed_user.as_ref()],
			program_id,
		);
		let (shipping_information_pubkey, shipping_information_bump) = Pubkey::find_program_address(
			&[b"company_shipping_information", shipping_information_seed_company.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(RegenError::InvalidSignerPermission.into());
		}

		if *user_info.key != user_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *company_info.key != company_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *shipping_information_info.key != shipping_information_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = User::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&user_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), user_info.clone()],
			&[&[b"user", user_id.as_bytes().as_ref(), &[user_bump]]],
		)?;

		let space = Company::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&company_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), company_info.clone()],
			&[&[b"company", company_seed_user.as_ref(), &[company_bump]]],
		)?;

		let space = ShippingInformation::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&shipping_information_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), shipping_information_info.clone()],
			&[&[b"company_shipping_information", shipping_information_seed_company.as_ref(), &[shipping_information_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::WrongAccountOwner.into());
		}

		if user_info.data_len() != User::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}

		if company_info.data_len() != Company::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}

		if shipping_information_info.data_len() != ShippingInformation::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let user = &mut AccountPDA::new(
			&user_info,
			try_from_slice_unchecked::<User>(&user_info.data.borrow()).unwrap(),
			user_bump,
		);
		let company = &mut AccountPDA::new(
			&company_info,
			try_from_slice_unchecked::<Company>(&company_info.data.borrow()).unwrap(),
			company_bump,
		);
		let shipping_information = &mut AccountPDA::new(
			&shipping_information_info,
			try_from_slice_unchecked::<ShippingInformation>(&shipping_information_info.data.borrow()).unwrap(),
			shipping_information_bump,
		);

		// Calling STUB
		create_user_type_supplier::create_user_type_supplier(
			program_id,
			user,
			company,
			shipping_information,
			user_id,
			company_name,
			registration_number,
			address,
			accreditations,
			contact_number,
			key_person,
			key_person_role,
			shipping_radius,
			shipping_address,
			shipping_method,
			shipping_provider,
			shipping_cost,
			shipping_currency,
			shipping_insurance_provider,
			shipping_insurance_charges,
			shipping_other_charges,
		)?;

		// Accounts Serialization
		user.data.serialize(&mut &mut user_info.data.borrow_mut()[..])?;		company.data.serialize(&mut &mut company_info.data.borrow_mut()[..])?;		shipping_information.data.serialize(&mut &mut shipping_information_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` currency: [Currency] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - symbol: [String] 
/// - name: [String] 
/// - value: [f64] 
	pub fn process_create_currency(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		symbol: String,
		name: String,
		value: f64,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let currency_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (currency_pubkey, currency_bump) = Pubkey::find_program_address(
			&[b"currrency", symbol.as_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(RegenError::InvalidSignerPermission.into());
		}

		if *currency_info.key != currency_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = Currency::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&currency_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), currency_info.clone()],
			&[&[b"currrency", symbol.as_bytes().as_ref(), &[currency_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::WrongAccountOwner.into());
		}

		if currency_info.data_len() != Currency::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let currency = &mut AccountPDA::new(
			&currency_info,
			try_from_slice_unchecked::<Currency>(&currency_info.data.borrow()).unwrap(),
			currency_bump,
		);

		// Calling STUB
		create_currency::create_currency(
			program_id,
			currency,
			symbol,
			name,
			value,
		)?;

		// Accounts Serialization
		currency.data.serialize(&mut &mut currency_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

/// Accounts:
/// 0. `[writable, signer]` fee_payer: [AccountInfo] Auto-generated, default fee payer
/// 1. `[writable]` unit: [AuctionWeightUnit] 
/// 2. `[]` system_program: [AccountInfo] Auto-generated, for account initialization
///
/// Data:
/// - name: [String] 
/// - conversion_rate: [u64] 
	pub fn process_create_unit(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		name: String,
		conversion_rate: u64,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let unit_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (unit_pubkey, unit_bump) = Pubkey::find_program_address(
			&[b"auction_weight_unit", name.as_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(RegenError::InvalidSignerPermission.into());
		}

		if *unit_info.key != unit_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = AuctionWeightUnit::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&unit_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), unit_info.clone()],
			&[&[b"auction_weight_unit", name.as_bytes().as_ref(), &[unit_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::WrongAccountOwner.into());
		}

		if unit_info.data_len() != AuctionWeightUnit::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let unit = &mut AccountPDA::new(
			&unit_info,
			try_from_slice_unchecked::<AuctionWeightUnit>(&unit_info.data.borrow()).unwrap(),
			unit_bump,
		);

		// Calling STUB
		create_unit::create_unit(
			program_id,
			unit,
			name,
			conversion_rate,
		)?;

		// Accounts Serialization
		unit.data.serialize(&mut &mut unit_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

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
	pub fn process_create_auction(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		name: String,
		purity_level: String,
		color_of_hydrogen: String,
		weight: f64,
		thumbnail_image: Option<String>,
		price: f64,
		end_date: u64,
		kind: u8,
		label: u8,
		company_seed_user: Pubkey,
		currency_seed_symbol: String,
		unit_seed_name: String,
		auction_seed_company: Pubkey,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let company_info = next_account_info(account_info_iter)?;
		let currency_info = next_account_info(account_info_iter)?;
		let unit_info = next_account_info(account_info_iter)?;
		let auction_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (company_pubkey, company_bump) = Pubkey::find_program_address(
			&[b"company", company_seed_user.as_ref()],
			program_id,
		);
		let (currency_pubkey, currency_bump) = Pubkey::find_program_address(
			&[b"currrency", currency_seed_symbol.as_bytes().as_ref()],
			program_id,
		);
		let (unit_pubkey, unit_bump) = Pubkey::find_program_address(
			&[b"auction_weight_unit", unit_seed_name.as_bytes().as_ref()],
			program_id,
		);
		let (auction_pubkey, auction_bump) = Pubkey::find_program_address(
			&[b"auction", auction_seed_company.as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(RegenError::InvalidSignerPermission.into());
		}

		if *company_info.key != company_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *currency_info.key != currency_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *unit_info.key != unit_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *auction_info.key != auction_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = Auction::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&auction_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), auction_info.clone()],
			&[&[b"auction", auction_seed_company.as_ref(), &[auction_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::WrongAccountOwner.into());
		}

		if company_info.data_len() != Company::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}

		if currency_info.data_len() != Currency::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}

		if unit_info.data_len() != AuctionWeightUnit::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}

		if auction_info.data_len() != Auction::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let company = AccountPDA::new(
			&company_info,
			try_from_slice_unchecked::<Company>(&company_info.data.borrow()).unwrap(),
			company_bump,
		);
		let currency = AccountPDA::new(
			&currency_info,
			try_from_slice_unchecked::<Currency>(&currency_info.data.borrow()).unwrap(),
			currency_bump,
		);
		let unit = AccountPDA::new(
			&unit_info,
			try_from_slice_unchecked::<AuctionWeightUnit>(&unit_info.data.borrow()).unwrap(),
			unit_bump,
		);
		let auction = &mut AccountPDA::new(
			&auction_info,
			try_from_slice_unchecked::<Auction>(&auction_info.data.borrow()).unwrap(),
			auction_bump,
		);

		// Calling STUB
		create_auction::create_auction(
			program_id,
			&company,
			&currency,
			&unit,
			auction,
			name,
			purity_level,
			color_of_hydrogen,
			weight,
			thumbnail_image,
			price,
			end_date,
			kind,
			label,
		)?;

		// Accounts Serialization
		auction.data.serialize(&mut &mut auction_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

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
	pub fn process_create_auction_bid(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		amount: u64,
		is_anonymous: bool,
		company_seed_user: Pubkey,
		auction_seed_company: Pubkey,
		bid_seed_auction: Pubkey,
		bid_seed_index: u32,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let company_info = next_account_info(account_info_iter)?;
		let auction_info = next_account_info(account_info_iter)?;
		let bid_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (company_pubkey, company_bump) = Pubkey::find_program_address(
			&[b"company", company_seed_user.as_ref()],
			program_id,
		);
		let (auction_pubkey, auction_bump) = Pubkey::find_program_address(
			&[b"auction", auction_seed_company.as_ref()],
			program_id,
		);
		let (bid_pubkey, bid_bump) = Pubkey::find_program_address(
			&[b"auction_bid", bid_seed_auction.as_ref(), bid_seed_index.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(RegenError::InvalidSignerPermission.into());
		}

		if *company_info.key != company_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *auction_info.key != auction_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *bid_info.key != bid_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = AuctionBid::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&bid_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), bid_info.clone()],
			&[&[b"auction_bid", bid_seed_auction.as_ref(), bid_seed_index.to_le_bytes().as_ref(), &[bid_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::WrongAccountOwner.into());
		}

		if company_info.data_len() != Company::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}

		if auction_info.data_len() != Auction::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}

		if bid_info.data_len() != AuctionBid::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let company = AccountPDA::new(
			&company_info,
			try_from_slice_unchecked::<Company>(&company_info.data.borrow()).unwrap(),
			company_bump,
		);
		let auction = AccountPDA::new(
			&auction_info,
			try_from_slice_unchecked::<Auction>(&auction_info.data.borrow()).unwrap(),
			auction_bump,
		);
		let bid = &mut AccountPDA::new(
			&bid_info,
			try_from_slice_unchecked::<AuctionBid>(&bid_info.data.borrow()).unwrap(),
			bid_bump,
		);

		// Calling STUB
		create_auction_bid::create_auction_bid(
			program_id,
			&company,
			&auction,
			bid,
			amount,
			is_anonymous,
		)?;

		// Accounts Serialization
		bid.data.serialize(&mut &mut bid_info.data.borrow_mut()[..])?;
		
		Ok(())
	}

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
	pub fn process_purchase_auction(
		program_id: &Pubkey,
		accounts: &[AccountInfo],
		amount: u64,
		is_anonymous: bool,
		company_seed_user: Pubkey,
		auction_seed_company: Pubkey,
		bid_seed_auction: Pubkey,
		bid_seed_index: u32,
	) -> ProgramResult {
		let account_info_iter = &mut accounts.iter();
		let fee_payer_info = next_account_info(account_info_iter)?;
		let company_info = next_account_info(account_info_iter)?;
		let auction_info = next_account_info(account_info_iter)?;
		let bid_info = next_account_info(account_info_iter)?;
		let system_program_info = next_account_info(account_info_iter)?;

		// Derive PDAs
		let (company_pubkey, company_bump) = Pubkey::find_program_address(
			&[b"company", company_seed_user.as_ref()],
			program_id,
		);
		let (auction_pubkey, auction_bump) = Pubkey::find_program_address(
			&[b"auction", auction_seed_company.as_ref()],
			program_id,
		);
		let (bid_pubkey, bid_bump) = Pubkey::find_program_address(
			&[b"auction_bid", bid_seed_auction.as_ref(), bid_seed_index.to_le_bytes().as_ref()],
			program_id,
		);

		// Security Checks
		if fee_payer_info.is_signer != true {
			return Err(RegenError::InvalidSignerPermission.into());
		}

		if *company_info.key != company_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *auction_info.key != auction_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *bid_info.key != bid_pubkey {
			return Err(RegenError::NotExpectedAddress.into());
		}

		if *system_program_info.key != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::NotExpectedAddress.into());
		}


		// Accounts Initializations
		let space = AuctionBid::LEN;
		let rent = Rent::get()?;
		let rent_minimum_balance = rent.minimum_balance(space);

		invoke_signed(
			&create_account(
				&fee_payer_info.key,
				&bid_info.key,
				rent_minimum_balance,
				space as u64,
				program_id,
			),
			&[fee_payer_info.clone(), bid_info.clone()],
			&[&[b"auction_bid", bid_seed_auction.as_ref(), bid_seed_index.to_le_bytes().as_ref(), &[bid_bump]]],
		)?;


		// Security Checks
		if *fee_payer_info.owner != Pubkey::from_str("11111111111111111111111111111111").unwrap() {
			return Err(RegenError::WrongAccountOwner.into());
		}

		if company_info.data_len() != Company::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}

		if auction_info.data_len() != Auction::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}

		if bid_info.data_len() != AuctionBid::LEN {
			return Err(RegenError::InvalidAccountLen.into());
		}


		// Accounts Deserialization
		let company = AccountPDA::new(
			&company_info,
			try_from_slice_unchecked::<Company>(&company_info.data.borrow()).unwrap(),
			company_bump,
		);
		let auction = &mut AccountPDA::new(
			&auction_info,
			try_from_slice_unchecked::<Auction>(&auction_info.data.borrow()).unwrap(),
			auction_bump,
		);
		let bid = &mut AccountPDA::new(
			&bid_info,
			try_from_slice_unchecked::<AuctionBid>(&bid_info.data.borrow()).unwrap(),
			bid_bump,
		);

		// Calling STUB
		purchase_auction::purchase_auction(
			program_id,
			&company,
			auction,
			bid,
			amount,
			is_anonymous,
		)?;

		// Accounts Serialization
		auction.data.serialize(&mut &mut auction_info.data.borrow_mut()[..])?;		bid.data.serialize(&mut &mut bid_info.data.borrow_mut()[..])?;
		
		Ok(())
	}
}