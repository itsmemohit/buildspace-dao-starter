import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
    "0xd34f28646F5375F64BE1d43CA01dcEFEccC6A9F2",
);

(async () => {
    try {
        const amount = 1_000_000_000;
        const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
        await tokenModule.mint(amountWith18Decimals);
        const totalSupply = await tokenModule.totalSupply();

        console.log(
            "✅ There now is",
            ethers.utils.formatUnits(totalSupply, 18),
            "$SKRRT in circulation",
        );
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();