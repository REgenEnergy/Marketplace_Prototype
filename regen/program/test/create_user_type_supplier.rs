#![cfg(feature = "test-sbf")]
mod create_user_type_supplier {
    use assert_matches::assert_matches;
    use solana_program::instruction::{AccountMeta, Instruction};
    use solana_program::pubkey::Pubkey;
    use solana_program::{system_instruction, system_program};
    use solana_rpc_client::rpc_client::RpcClient;
    use solana_sdk::signer::keypair::Keypair;
    use solana_sdk::signer::Signer;
    use solana_sdk::transaction::Transaction;
    use solana_validator::test_validator::*;
    use std::str::FromStr;

    use crate::generated::entrypoint::process_instruction;
    use crate::generated::instructions::{ RegenInstruction };
    use crate::test::create_account;

    #[test]
	fn test_transaction_is_ok() {
	    solana_logger::setup_with_default("solana_program_runtime=debug");
        let program_id = Pubkey::new_unique();

		let (test_validator, fee_payer_info) = TestValidatorGenesis::default()
			.add_program("regen", program_id)
			.start();
		let rpc_client = test_validator.get_rpc_client();

		let user_id: String = Default::default();
		let company_name: String = Default::default();
		let registration_number: String = Default::default();
		let address: String = Default::default();
		let accreditations: Option<String> = Default::default();
		let contact_number: Option<String> = Default::default();
		let key_person: String = Default::default();
		let key_person_role: String = Default::default();
		let shipping_radius: String = Default::default();
		let shipping_address: String = Default::default();
		let shipping_method: String = Default::default();
		let shipping_provider: String = Default::default();
		let shipping_cost: u64 = Default::default();
		let shipping_currency: String = Default::default();
		let shipping_insurance_provider: Option<String> = Default::default();
		let shipping_insurance_charges: Option<u64> = Default::default();
		let shipping_other_charges: Option<u64> = Default::default();
		let company_seed_user: Pubkey = Pubkey::new_unique();
		let shipping_information_seed_company: Pubkey = Pubkey::new_unique();

		let (user_pubkey, _) = Pubkey::find_program_address(
			&[b"user", user_id.as_bytes().as_ref()],
			&program_id,
		);
		let (company_pubkey, _) = Pubkey::find_program_address(
			&[b"company", company_seed_user.as_ref()],
			&program_id,
		);
		let (shipping_information_pubkey, _) = Pubkey::find_program_address(
			&[b"company_shipping_information", shipping_information_seed_company.as_ref()],
			&program_id,
		);
		let accounts = vec![
			AccountMeta::new(fee_payer_info.pubkey(), true),
			AccountMeta::new(user_pubkey, false),
			AccountMeta::new(company_pubkey, false),
			AccountMeta::new(shipping_information_pubkey, false),
			AccountMeta::new_readonly(system_program::id(), false),
		];
		let data = RegenInstruction::CreateUserTypeSupplier(crate::generated::instructions::CreateUserTypeSupplierArgs{
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
			company_seed_user,
			shipping_information_seed_company,
		});
		let signers = vec![
			&fee_payer_info,
        ];


        let instruction = Instruction::new_with_borsh(program_id, &data, accounts.to_vec());
		let recent_blockhash = rpc_client.get_latest_blockhash().unwrap();
        let mut transaction = Transaction::new_with_payer(
            &[instruction],
            Some(&fee_payer_info.pubkey()),
        );
        transaction.sign(&signers, recent_blockhash);

	    assert_matches!(rpc_client.send_and_confirm_transaction(&transaction), Ok(_));
    }
}