import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule(
    "0xC939B96DE19a6EbB7b3e1c755E224eb7079Af492",
);

const tokenModule = sdk.getTokenModule(
    "0xd34f28646F5375F64BE1d43CA01dcEFEccC6A9F2",
);

(async () => {
    try {
        await tokenModule.grantRole("minter", voteModule.address);
        console.log(
            "Successfully gave vote module permissions to act on token module"
        );
    } catch (error) {
        console.error(
            "failed to grant vote module permission on token module",
            error
        );
        process.exit(1);
    }

    try {
        const ownedTokenBalance = await tokenModule.balanceOf(
            process.env.WALLET_ADDRESS
        );

        const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
        const percent49 = ownedAmount.div(100).mul(49);

        await tokenModule.transfer(
            voteModule.address,
            percent49
        );

        console.log("✅ Successfully transferred tokens to vote module");
    } catch (err) {
        console.error("failed to transfer tokens to vote module", err);
    }
})();