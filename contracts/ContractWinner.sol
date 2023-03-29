//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
// 
// // Uncomment this line to use console.log
// // import "hardhat/console.sol";
// 
// contract Winner {
//     uint public x;
//     
//     function changeWinner(uint _x) external {
//         x = _x;
//     }
// }

interface TxnOrigin{
    function attempt() external;
}

contract ContractWinner{
    function seeTheWinner(address theWinner) external {
        TxnOrigin(theWinner).attempt();
    }
}