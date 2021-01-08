import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    Overview
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        Your balance :&nbsp;
                        <ContractData
                            drizzle={drizzle}
                            drizzleState={drizzleState}
                            contract="UbrisToken"
                            method="balanceOf"
                            methodArgs={[drizzleState.accounts[0]]}
                        /> UBS
                    </h5>
                    <p className="card-text">
                        Harvest available :&nbsp;
                        <ContractData
                            drizzle={drizzle}
                            drizzleState={drizzleState}
                            contract="UbrisToken"
                            method="getHarvestable"
                        /> UBS
                    </p>
                    <a href="#" className="btn btn-primary">Stack more !</a>
                </div>
            </div>
        </div>
    );
};
