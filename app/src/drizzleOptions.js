import Web3 from "web3";
import UbrisToken from "./contracts/UbrisToken.json";

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [UbrisToken],
  events: {
  },
};

export default options;
