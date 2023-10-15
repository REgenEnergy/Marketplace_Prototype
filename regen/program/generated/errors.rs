// This file is auto-generated from the CIDL source.
// Editing this file directly is not recommended as it may be overwritten.

use num_derive::FromPrimitive;
use solana_program::decode_error::DecodeError;
use solana_program::msg;
use solana_program::program_error::{PrintProgramError, ProgramError};
use thiserror::Error;

#[derive(Error, FromPrimitive, Debug, Clone)]
pub enum RegenError {
    #[error("Invalid Instruction")]
    InvalidInstruction,

    #[error("Invalid Signer Permission")]
    InvalidSignerPermission,

    #[error("Not The Expected Account Address")]
    NotExpectedAddress,

    #[error("Wrong Account Owner")]
    WrongAccountOwner,

    #[error("Invalid Account Len")]
    InvalidAccountLen,

    #[error("Executable Account Expected")]
    ExecutableAccountExpected,

	#[error("AuctionIsNotOpen")]
	AuctionIsNotOpen
 
}

impl From<RegenError> for ProgramError {
    fn from(e: RegenError) -> Self {
        ProgramError::Custom(e as u32)
    }
}

impl<T> DecodeError<T> for RegenError {
    fn type_of() -> &'static str {
        "RegenError"
    }
}

impl PrintProgramError for RegenError {
    fn print<E>(&self)
    where
        E: 'static
            + std::error::Error
            + DecodeError<E>
            + PrintProgramError
            + num_traits::FromPrimitive,
    {
        match self {
            RegenError::InvalidInstruction => msg!("Error: Invalid instruction"),
            RegenError::InvalidSignerPermission => msg!("Error: The account is_signer value is not the expected one"),
            RegenError::NotExpectedAddress => {
                msg!("Error: Not the expected account address")
            }
            RegenError::WrongAccountOwner => msg!("Error: Wrong account owner"),
            RegenError::InvalidAccountLen => msg!("Error: Invalid account length"),
            RegenError::ExecutableAccountExpected => msg!("Error: Executable account expected"),
			RegenError::AuctionIsNotOpen => msg!("Error: Cannot create bid, auction not open"),
 
        }
    }
}