const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const contractAddress = "0x1234abcd..."; // from deploy step
  const Library = await hre.ethers.getContractFactory("Library");
  const library = Library.attach(contractAddress);

  // Log a borrow event
  let tx = await library.logTransaction("user_001", "book_101", "borrow");
  await tx.wait();
  console.log("Borrow transaction sent:", tx.hash);

  // Fetch all transactions
  const allTxs = await library.getAllTransactions();
  console.log("All Transactions:", allTxs);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
