// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

/*
       REQUIREMENTS
    1. Your contract will have public variables that store the details about your coin (Token Name, Token Abbrv., Total Supply)
    2. Your contract will have a mapping of addresses to balances (address => uint)
    3. You will have a mint function that takes two parameters: an address and a value. 
       The function then increases the total supply by that number and increases the balance 
       of the address by that amount
    4. Your contract will have a burn function, which works the opposite of the mint function, as it will destroy tokens. 
       It will take an address and value just like the mint functions. It will then deduct the value from the total supply 
       and from the balance of the address.
    5. Lastly, your burn function should have conditionals to make sure the balance of account is greater than or equal 
       to the amount that is supposed to be burned.
*/

contract MyToken {

    // 1. Public variables here
    string public tokenName = "CustomToken";
    string public tokenAbbrv = "CTK";
    uint public totalSupply = 0;

    // 2. Mapping variable here
    mapping(address => uint) public balances;

    // 3. Mint function
    function mint(address _to, uint _value) public {
        totalSupply += _value;
        balances[_to] += _value;
    }

    // 4. Burn function
    function burn(address _from, uint _value) public {
        // 5. Conditional statements to ensure sufficient balance
        require(balances[_from] >= _value, "Insufficient balance to burn");
        totalSupply -= _value;
        balances[_from] -= _value;
    }
}
