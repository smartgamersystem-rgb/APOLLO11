// Conectar MetaMask
async function connectWallet() {
    if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log("Wallet connected:", await signer.getAddress());
        return signer;
    } else {
        alert("Please install MetaMask!");
    }
}

// Llamar a función del contrato
async function buyTokens(contractAddress, amount) {
    const signer = await connectWallet();
    const abi = [ "function buyTokens() payable" ]; // define función en Solidity
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract.buyTokens({ value: ethers.utils.parseEther(amount) });
    await tx.wait();
    alert("Tokens bought!");
}

