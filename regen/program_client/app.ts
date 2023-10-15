import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { faker } from '@faker-js/faker';
import * as fs from "fs/promises";
import * as path from "path";
import * as os from "os";
import {
    createAuctionBidSendAndConfirm,
    createAuctionSendAndConfirm,
    createCurrencySendAndConfirm,
    createUnitSendAndConfirm,
    createUserTypeBuyerSendAndConfirm,
    createUserTypeSupplierSendAndConfirm,
    deriveAuctionBidPDA,
    deriveAuctionPDA,
    deriveAuctionWeightUnitPDA,
    deriveCompanyPDA,
    deriveCurrencyPDA,
    deriveShippingAddressPDA,
    deriveShippingInformationPDA,
    deriveUserPDA,
    getAuction,
    getAuctionBid,
    getAuctionWeightUnit,
    getCompany,
    getCurrency,
    getShippingAddress,
    getShippingInformation,
    getUser,
    initializeClient,
    purchaseAuctionSendAndConfirm,
} from "./index";

async function main(feePayer: Keypair) {
    const connection = new Connection("https://api.devnet.solana.com", {
        commitment: "confirmed"
    });
    // TODO: Specify the smart contract Program Id we saved from when we deploy the smart contract
    const progId = new PublicKey("DVvaRFwhqRmwfZ2PJ659tCLR98edRQvpdfkz6H9m966V");

    initializeClient(progId, connection);

    /**
     * Create user type buyer with a company
     */
    const userId1 = faker.string.uuid().substring(0, 32);
    const [buyerUserPubKey] = deriveUserPDA({
        id: userId1
    }, progId);
    const [buyerCompanyPubKey] = deriveCompanyPDA({
        user: buyerUserPubKey
    }, progId);
    const [buyerCompanyShippingPubKey] = deriveShippingAddressPDA({
        company: buyerCompanyPubKey,
    }, progId)

    await createUserTypeBuyerSendAndConfirm({
        companyName: faker.company.name(),
        address: faker.location.streetAddress(),
        contactNumber: faker.phone.number(),
        keyPerson: faker.person.fullName(),
        keyPersonRole: faker.person.jobTitle(),
        registrationNumber: faker.commerce.isbn(),
        shippingAddress: faker.location.streetAddress(),
        shippingLabel: faker.location.countryCode(),
        accreditations: undefined,
        userId: userId1,
        companySeedUser: buyerUserPubKey,
        shippingSeedCompany: buyerCompanyPubKey,
        signers: {
            feePayer,
        }
    });

    const buyerUser = await getUser(buyerUserPubKey);
    console.log("User type buyer")
    console.log(buyerUser);

    const buyerCompany = await getCompany(buyerCompanyPubKey);
    console.log("Compay of user type buyer")
    console.log(buyerCompany);

    const buyerCompanyShipping = await getShippingAddress(buyerCompanyShippingPubKey);
    console.log("Compay shpping address")
    console.log(buyerCompanyShipping)

    /**
     * Create user type supplier with a company
     */
    const userId2 = faker.string.uuid().substring(0, 32);;
    const [supplierUserPubKey] = deriveUserPDA({
        id: userId2
    }, progId);
    const [supplierCompanyPubKey] = deriveCompanyPDA({
        user: supplierUserPubKey
    }, progId);
    const [supplierCompanyShippingPubKey] = deriveShippingInformationPDA({
        company: supplierCompanyPubKey
    }, progId);

    await createUserTypeSupplierSendAndConfirm({
        companyName: faker.company.name(),
        address: faker.location.streetAddress(),
        contactNumber: faker.phone.number(),
        keyPerson: faker.person.fullName(),
        keyPersonRole: faker.person.jobTitle(),
        registrationNumber: faker.commerce.isbn(),
        shippingAddress: faker.location.streetAddress(),
        shippingCost: BigInt(parseInt(faker.commerce.price())),
        shippingCurrency: faker.finance.currencyCode(),
        shippingMethod: faker.lorem.slug(),
        shippingProvider: faker.company.name(),
        shippingRadius: faker.string.numeric(),
        shippingInsuranceCharges: undefined,
        shippingInsuranceProvider: undefined,
        shippingOtherCharges: undefined,
        accreditations: undefined,
        userId: userId2,
        companySeedUser: supplierUserPubKey,
        shippingInformationSeedCompany: supplierCompanyPubKey,
        signers: {
            feePayer,
        }
    });

    const supplierUser = await getUser(supplierUserPubKey);
    console.log("User type supplier")
    console.log(supplierUser);

    const supplierCompany = await getCompany(supplierCompanyPubKey);
    console.log("Compay of user type supplier")
    console.log(supplierCompany);

    const supplierCompanyShipping = await getShippingInformation(supplierCompanyShippingPubKey);
    console.log("Compay shpping information")
    console.log(supplierCompanyShipping);

    /**
     * Create currency
     */
    const sym = faker.finance.currencyCode();

    await createCurrencySendAndConfirm({
        name: faker.finance.currencyName(),
        symbol: sym,
        value: 100,
        signers: {
            feePayer
        }
    })

    const [currencyPubKey] = deriveCurrencyPDA({
        symbol: sym
    }, progId);
    const currency = await getCurrency(currencyPubKey);
    console.log("Currency")
    console.log(currency);

    /**
     * Create unit
     */
    const unitName = faker.science.unit().name;

    await createUnitSendAndConfirm({
        name: unitName,
        conversionRate: 300n,
        signers: {
            feePayer
        }
    });

    const [unitPubKey] = deriveAuctionWeightUnitPDA({
        name: unitName
    }, progId);
    const unit = await getAuctionWeightUnit(unitPubKey);
    console.log("Unit")
    console.log(unit);

    /**
     * Create auction
     */
    await createAuctionSendAndConfirm({
        colorOfHydrogen: faker.color.human(),
        companySeedUser: supplierUserPubKey,
        unitSeedName: unitName,
        currencySeedSymbol: sym,
        name: faker.commerce.productName(),
        endDate: BigInt(faker.date.anytime().getTime()),
        kind: 0,
        label: 0,
        price: parseFloat(faker.commerce.price()),
        weight: faker.number.float(),
        purityLevel: faker.lorem.word(),
        thumbnailImage: faker.image.urlLoremFlickr({ category: "abstract" }),
        auctionSeedCompany: supplierCompanyPubKey,
        signers: {
            feePayer
        }
    });

    const [auctionPubKey] = deriveAuctionPDA({
        company: supplierCompanyPubKey
    }, progId);
    const auction = await getAuction(auctionPubKey);
    console.log("Auction")
    console.log(auction);

    /**
     * Create bid
     */
    const firstBid = 0;

    await createAuctionBidSendAndConfirm({
        amount: faker.number.bigInt(),
        companySeedUser: supplierUserPubKey,
        isAnonymous: faker.datatype.boolean({ probability: 0.5 }),
        bidSeedIndex: firstBid,
        auctionSeedCompany: supplierCompanyPubKey,
        bidSeedAuction: auctionPubKey,
        signers: {
            feePayer
        }
    });

    const [bidPubKey] = deriveAuctionBidPDA({
        auction: auctionPubKey,
        index: firstBid
    }, progId)
    const bid1 = await getAuctionBid(bidPubKey);
    console.log("Bid")
    console.log(bid1);


    /**
     * Create purchase
     */
    const secondBid = 1;

    await purchaseAuctionSendAndConfirm({
        amount: faker.number.bigInt(),
        companySeedUser: supplierUserPubKey,
        isAnonymous: faker.datatype.boolean({ probability: 0.5 }),
        bidSeedIndex: secondBid,
        auctionSeedCompany: supplierCompanyPubKey,
        bidSeedAuction: auctionPubKey,
        signers: {
            feePayer
        }
    });

    const [purchasePubKey] = deriveAuctionBidPDA({
        auction: auctionPubKey,
        index: secondBid,
    }, progId)
    const bid2 = await getAuctionBid(purchasePubKey);
    console.log("Bid - Purshased")
    console.log(bid2);
}

fs.readFile(path.join(os.homedir(), ".config/solana/id.json"))
    .then(file => main(Keypair.fromSecretKey(new Uint8Array(JSON.parse(file.toString())))));
