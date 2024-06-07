import { ethers } from "ethers";
import tokenContractAbi from "./tokenAbi.json";

// Token Contract - mainnet
export const contractTokenContract =
  "0x97b36243Eff508d296676321b0aF5A58b79fE528";

export const NeuronClumpTokenContract =
  "0x97b36243Eff508d296676321b0aF5A58b79fE528";

// NFT Contract /testnet
export const ContractNFTCollection =
  "0xe68C0fdcD264BE35BfBEb5067a7062Fc912e747f";

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

export const mintNFT = async (_amount: any) => {
  try {
    console.log("minting nft", _amount);

    // const amountInWei = ethers.utils.parseEther((0.042 * _amount).toString());

    // console.log("amountInWei", amountInWei);

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // // Get the signer
    // const signer = provider.getSigner();

    // // Contract main
    // const contractInstance = new ethers.Contract(
    //   ContractNFTCollection,
    //   tokenContractAbi,
    //   signer
    // );

    // await contractInstance.mint(_amount, {
    //   value: amountInWei,
    //   gasLimit: 300000,
    // });
  } catch (error) {
    console.log(error);
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
