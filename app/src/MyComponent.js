import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  async function isApproved() {
    let result = await drizzle.contracts.UbrisToken.methods.allowance(drizzleState.accounts[0], "0x187d9e970D4acDF0A1471f2F681C6005C1154427").call();
    console.log(result);
    return result > 100;
  }

  return (
    <div className="App">
        <h3>Send Tokens</h3>
        <ContractForm
          drizzle={drizzle}
          contract="UbrisToken"
          method="transfer"
          labels={["To Address", "Amount to Send"]}
        />

        <h3>Faucet</h3>
        <ContractForm
          drizzle={drizzle}
          contract="UbrisToken"
          method="faucet"
        />

        <h1>Staking</h1>
        <h3>Approve</h3>
        <ContractForm
            drizzle={drizzle}
            contract="UbrisToken"
            method="approve"
            sendArgs={{from:drizzleState.accounts[0]}}
        />
        <strong>Harvestable: </strong>
        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="UbrisToken"
            method="getHarvestable"
        />
        <ContractForm
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="UbrisToken"
            method="harvest"
        />

        <h3>Stack in</h3>
        <ContractForm
            drizzle={drizzle}
            contract="UbrisToken"
            method="stackIn"
            sendArgs={{from:drizzleState.accounts[0], gas: 1000000}}
            labels={["Amount"]}
        />
        <h3>Stack out</h3>
        <ContractForm
            drizzle={drizzle}
            contract="UbrisToken"
            method="stackOut"
            sendArgs={{from:drizzleState.accounts[0], gas: 1000000}}
        />

    </div>
  );
};
