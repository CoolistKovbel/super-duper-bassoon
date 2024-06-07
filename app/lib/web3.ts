import { ethers } from "ethers";
import tokenContractAbi from "./tokenAbi.json";
import NFTContractAbi from "./nftAbi.json";

// Token Contract - mainnet
export const contractTokenContract =
  "0x97b36243Eff508d296676321b0aF5A58b79fE528";

export const NeuronClumpTokenContract =
  "0x97b36243Eff508d296676321b0aF5A58b79fE528";

// NFT Contract /testnet
export const ContractNFTCollection =
  "0x8a5d1733Ee162915A85253604192465c97b43eBb";

export const EkudoParkCollection = "0x933a0aA2A3188B79f839094e5E9b560c8BbA4152";



export const getEthereumObject = () => {
  return typeof window !== "undefined" ? window.ethereum : null;
};

export const getEthereumAccount = async () => {
  try {
    const ethereum: Window = getEthereumObject();

    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      return account;
    } else {
      alert("connect your metamask account....");

      // Setup another alert
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const readPriceFromContract = async () => {
  try {
    // Initialize provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer
    const signer = provider.getSigner();

    // Connect to the contract
    const contractInstance = new ethers.Contract(
      ContractNFTCollection,
      NFTContractAbi,
      signer
    );

    // Call the readPrice function
    const price = await contractInstance.readPrice();
    
    // Convert the price from wei to ether
    const priceInEther = ethers.utils.formatEther(price);

    console.log("Price in Ether:", priceInEther);
    
    return priceInEther;
  } catch (error) {
    console.error("Error reading price:", error);
  }
};

// Example function to mint an NFT
export const mintNFT = async (_amount:1) => {
  try {
    console.log("Minting NFT", _amount);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contractInstance = new ethers.Contract(
      ContractNFTCollection,
      NFTContractAbi,
      signer
    );

    // Read the current price from the contract
    const priceInWei = await contractInstance.readPrice();
    const totalCost = priceInWei.mul(_amount);

    console.log("Total cost in Wei:", totalCost.toString());

    // Mint the NFT(s)
    const tx = await contractInstance.mint(_amount, {
      value: totalCost,
      gasLimit: 600000,
    });

    console.log("Transaction:", tx);
  } catch (error) {
    console.error("Error minting NFT:", error);
  }
};

export const swapToken = async (_amount: any) => {
  try {
    console.log("swapping token");

    const amountInWei = ethers.utils.parseEther(_amount.toString());

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      contractTokenContract,
      tokenContractAbi,
      signer
    );

    await contractInstance.swapEtherForTokens({
      value: amountInWei,
      gasLimit: 600000,
    });


    
  } catch (error) {
    console.log(error);
  }
};

export const userOwns = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();
    const user = signer.getAddress();

    // Contract main
    const contractInstance = new ethers.Contract(
      ContractNFTCollection,
      tokenContractAbi,
      signer
    );

    const gg = await contractInstance.ownerToToken(user);

    return gg;
  } catch (error) {
    console.log(error);
  }
};
