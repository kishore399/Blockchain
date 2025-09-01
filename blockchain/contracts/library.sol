// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Library {
    struct Transaction {
        string userId;
        string bookId;
        string action; // "borrow" or "return"
        uint256 timestamp;
    }

    Transaction[] public transactions;

    event BookAction(
        string indexed userId,
        string indexed bookId,
        string action,
        uint256 timestamp
    );

    function logTransaction(string memory _userId, string memory _bookId, string memory _action) public {
        Transaction memory newTx = Transaction({
            userId: _userId,
            bookId: _bookId,
            action: _action,
            timestamp: block.timestamp
        });

        transactions.push(newTx);

        emit BookAction(_userId, _bookId, _action, block.timestamp);
    }

    function getTransaction(uint256 index) public view returns (Transaction memory) {
        require(index < transactions.length, "Transaction does not exist");
        return transactions[index];
    }

    function getAllTransactions() public view returns (Transaction[] memory) {
        return transactions;
    }
}
