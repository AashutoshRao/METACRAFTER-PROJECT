/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

// print the total number of NFTs we have minted to the console
// call your functions below this line

let nfts = [];

function mintNFT(Name, Semester, Result, Year) {
    let nft = {
        Name: Name,
        Semester: Semester,
        Result: Result,
        Year: Year
    };
    nfts.push(nft);
}

function listNFT() {
    nfts.forEach((nft, index) => {
        console.log(`NFT ${index + 1}`);
        console.log("Name: " + nft.Name);
        console.log("Semester: " + nft.Semester);
        console.log("Result: " + nft.Result);
        console.log("Year: " + nft.Year);
        console.log("----------------------");
    });
}

function getTotalSupply() {
    return nfts.length; // Add return statement here
}

mintNFT("Aashutosh Rajput", "2", "pass", "2022");
mintNFT("Ansh Rajput", "3", "fail", "2023");
mintNFT("Vikram Rajput", "8", "pass", "2026");

listNFT();
console.log("Total number of NFTs Added: " + getTotalSupply());
