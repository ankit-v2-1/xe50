import React, { Fragment } from "react";
import './Descriptor.css';

let Descriptor = ({ bppDescriptor }) => {


    return (

        <Fragment> <div className="descriptor-card">

            <table className="descriptor-table">




                <tbody >

                    <tr>
                        <td><img src={bppDescriptor.symbol} alt="symbol" width="85" height="80" /></td>


                    </tr>
                    <tr className="name">
                        <td>{bppDescriptor.name}</td>
                    </tr>
                    <tr>
                        <td>{bppDescriptor.long_desc}</td>
                    </tr>
                    <tr>

                    </tr>
                </tbody>

            </table>



        </div>
        </Fragment>
    );
}

export default Descriptor;