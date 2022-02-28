import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x1B6FF668e25286984D0C340502F10372Ed2252B4");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "MohitDAO Membership",
            description: "A DAO for supporters of Mohit.",
            image: readFileSync("scripts/assets/Mohit.png"),
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
        );
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()