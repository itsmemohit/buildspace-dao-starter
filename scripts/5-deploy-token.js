import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x1B6FF668e25286984D0C340502F10372Ed2252B4");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "MohitDAO Governance Token",
            symbol: "SKRRT",
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();