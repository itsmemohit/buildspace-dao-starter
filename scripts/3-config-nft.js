import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x06bEb8984287d693CefAb34351401E54A4552F4D",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "",
                description: "This NFT will give you access to MohitDAO",
                image: readFileSync("scripts/assets/Sick Car.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()