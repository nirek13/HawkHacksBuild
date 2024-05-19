const http = require('http');
const cors = require('cors');
const { Account } = require('near-api-js');
const { KeyPair, keyStores, connect } = require('near-api-js');
require('dotenv').config();

const NETWORK_ID = process.env.NETWORK_ID || 'testnet';
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const ftContractId = "super.bilalrashid.testnet";

const keyStore = new keyStores.InMemoryKeyStore();
const keyPair = KeyPair.fromString(PRIVATE_KEY);
const accountId = "bilalrashid.testnet";
keyStore.setKey(NETWORK_ID, accountId, keyPair);

async function registerRecipient(account, ftContractId, recipientAccountId) {
    try {
        console.log(`Registering ${recipientAccountId} with the FT contract`);
        const result = await account.functionCall({
            contractId: ftContractId,
            methodName: 'storage_deposit',
            args: {
                account_id: recipientAccountId,
            },
            gas: '30000000000000', // 30 Tgas
            attachedDeposit: '1000000000000000000000000', // 0.1 NEAR (adjust as needed)
        });
        console.log(`Registration result: ${result.transaction.hash}`);
    } catch (error) {
        console.error(`Failed to register ${recipientAccountId}:`, error);
    }
}

async function sendFungibleTokens(account, ftContractId, recipient) {
    try {
        console.log(`Sending ${recipient.amount} FT to ${recipient.accountId}`);
        const result = await account.functionCall({
            contractId: ftContractId,
            methodName: 'ft_transfer',
            args: {
                receiver_id: recipient.accountId,
                amount: recipient.amount,
                memo: 'Airdrop'
            },
            gas: '30000000000000', // 30 Tgas
            attachedDeposit: '1', // 1 yoctoNEAR
        });
        console.log(`Transaction hash: ${result.transaction.hash}`);

        for (const receipt of result.receipts_outcome) {
            console.log(`\tReceipt: ${receipt.id}`);
            for (const log of receipt.outcome.logs) {
                console.log(`\t\t${log}`);
            }
            if (receipt.outcome.status.Failure) {
                console.error(`\tFailure ${receipt.outcome.status.Failure}`);
            }
        }
    } catch (error) {
        console.error(`Failed to send FT to ${recipient.accountId}:`, error);
    }
}

const server = http.createServer(async (req, res) => {
    // Enable CORS for all routes
    cors()(req, res, async () => {
        if (req.method === 'POST') {
            let body = '';

            req.on('data', (chunk) => {
                body += chunk.toString();
            });

            req.on('end', async () => {
                const formData = JSON.parse(body);

                try {
                    const config = {
                        networkId: NETWORK_ID,
                        keyStore,
                        nodeUrl: `https://rpc.${NETWORK_ID}.near.org`,
                        walletUrl: `https://wallet.${NETWORK_ID}.near.org`,
                        helperUrl: `https://helper.${NETWORK_ID}.near.org`,
                        explorerUrl: `https://explorer.${NETWORK_ID}.near.org`,
                    };

                    const near = await connect(config);
                    const account = new Account(near.connection, accountId);

                    const recipient = {
                        accountId: formData.testnetId,
                        amount: formData.tokenAmount + "000000000000000000",
                    };

                    await registerRecipient(account, ftContractId, recipient.accountId);
                    await sendFungibleTokens(account, ftContractId, recipient);

                    console.log("Airdrop completed successfully!");

                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ message: 'Airdrop completed successfully' }));
                } catch (error) {
                    console.error("Error during airdrop:", error);
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: 'An error occurred during airdrop' }));
                }
            });
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
});

const port = 3000; // Choose a port number
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});