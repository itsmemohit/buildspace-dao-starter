import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
    "0x1B6FF668e25286984D0C340502F10372Ed2252B4",
);

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            name: "MohitDAO's Epic Proposals",
            votingTokenAddress: "0xd34f28646F5375F64BE1d43CA01dcEFEccC6A9F2",
            proposalStartWaitTimeInSeconds: 0,
            proposalVotingTimeInSeconds: 24 * 60 * 60,
            votingQuorumFraction: 0,
            minimumNumberOfTokensNeededToPropose: "0",
        });

        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
        );
    } catch (err) {
        console.error("Failed to deploy vote module", err);
    }
})();