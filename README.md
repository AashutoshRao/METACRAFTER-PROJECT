# Metacrafter Summer Projects
All projects are covered in Metacrafter Summer Programme.

<img width="200" alt="image" src="https://pbs.twimg.com/profile_images/1541857386989846528/LAh06dc5_400x400.jpg">


## Description

The project centers on a smart contract named MyToken, developed using Solidity on the Ethereum blockchain. This contract represents a custom cryptocurrency with basic functionalities, adhering to the MIT license. It defines three public variables: tokenName, tokenAbbrv, and totalSupply, which store the name of the token, its abbreviation, and the total number of tokens in circulation, respectively. Additionally, it uses a mapping to keep track of the balance of each address, effectively functioning as a ledger.

The contract includes two primary functions: mint and burn. The mint function allows for the creation of new tokens. When called, it increases the total supply of tokens by a specified value and adds this value to the balance of a designated address. This function is essential for distributing tokens during initial offerings or rewarding users. Conversely, the burn function reduces the total supply of tokens by a specified amount, provided the address in question has a sufficient balance. It decreases both the total supply and the balance of the address, effectively destroying tokens. This function can be used to manage the token's supply and prevent inflation, ensuring the token retains value.

The MyToken contract is versatile and can be employed in various applications, such as creating loyalty points for businesses, establishing new cryptocurrencies for decentralized finance (DeFi) projects, or managing in-game currencies. Its simplicity and straightforward implementation make it an excellent starting point for developers looking to understand or build upon blockchain-based token systems.

## Getting Started
#### Installing
* Install a Solidity Development Environment: You need a development environment that supports Solidity. One of the most popular tools is **Remix IDE**, which is a web-based development environment.
Copy the provided MyToken smart contract code.
Create a new file with a **.sol** extension, for example **MyToken.sol**, and do the code into this file or you can download it.
* **Remix IDE:**

**1.** No specific modifications to files or folders are needed if you are using Remix IDE. Simply ensure your code is correctly pasted and saved in a .sol file.

**2.** After completing the code, compile the contract using the "Solidity Compiler" plugin, then deploy it using the "Deploy & Run Transactions" plugin.


### Executing program
* **Open Remix IDE:**

Go to Remix IDE.

* **Create a New File:**

In the left sidebar,
Click on the "+" icon to create a new file.
Name the file MyToken.sol. and code into the newly created MyToken.sol file in Remix

* **Compile the Contract**

Click on the "Solidity Compiler" plugin icon in the left sidebar.
Ensure the compiler version is set to 0.8.26.
Click the "Compile MyToken.sol" button.

* **Deploy the Contract**

Click on the "Deploy & Run Transactions" plugin icon in the left sidebar.
Make sure MyToken is selected in the "Contract" dropdown.
Click the "Deploy" button.

* **Interact with Deploy Contract**

After deployment, the contract will appear under "Deployed Contracts".
Expand the deployed MyToken contract interface to see the available functions (mint, burn, balances, etc.).
You can now call the mint and burn functions and check balances.

* **END**

By following these steps, you can compile, deploy, and interact with the **MyToken** smart contract on Remix IDE.

```
// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

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
```
## Author

Aashutosh Rao 
[@raoaashutosh4583@gmail.com,22BCS10228@cuchd.in]

## License

This contract is licensed under the MIT License. SPDX-License-Identifier: MIT.
