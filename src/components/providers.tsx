import React, { Fragment, useState } from "react";
import './Providers.css';

let Providers = ({ bppProviders }) => {

    return (

        <Fragment>
            <div className="provider-card">



                {bppProviders.map((provider) =>

                    <table className="provider-table">

                        <tbody>
                            <tr>

                                <th className="provider-name">{provider.descriptor.name}
                                </th>

                                <th className="provider-img" ><img src={provider.descriptor.symbol} alt="symbol" width="100" height="100" />
                                </th>

                            </tr>


                            <tr>
                                <td>ADDRESS</td>
                            </tr>
                            <tr>
                                <td>{


                                    provider.locations.map((location) => {
                                        return <table className="p-table">

                                            <thead>

                                                <tr>
                                                    <th>city</th>
                                                    <th>street</th>
                                                    <th>area code</th>
                                                    <th>state</th>
                                                </tr>


                                            </thead>
                                            <tbody>
                                                <tr>

                                                    <td>{location.address.city}</td>
                                                    <td>{location.address.street}</td>
                                                    <td>{location.address.area_code}</td>
                                                    <td>{location.address.state}</td>

                                                </tr>
                                            </tbody>
                                        </table>


                                    })

                                }</td>
                            </tr>



                            <tr>
                                <td>FULFILLMENTS</td>
                            </tr>

                            <tr>
                                <td>
                                    {
                                        provider.fulfillments.map((fulfillment) => {
                                            return <table className="p-table">
                                                <thead>

                                                    <tr>
                                                        <th>type</th>
                                                        <th>city</th>
                                                        <th>building</th>
                                                        <th>area code</th>
                                                        <th>state</th>


                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>{fulfillment.type}</td>
                                                        <td>{fulfillment.start.location.address.city}</td>
                                                        <td>{fulfillment.start.location.address.building}</td>
                                                        <td>{fulfillment.start.location.address.area_code}</td>
                                                        <td>{fulfillment.start.location.address.state}</td>


                                                    </tr>
                                                </tbody>
                                            </table>

                                        })



                                    }
                                </td>
                            </tr>

                            <tr>
                                <td>ITEMS</td>
                            </tr>


                            <tr>
                                <td>{


                                    provider.items.map((item) => {
                                        return <table className="item-table">

                                            <thead>

                                                <tr>
                                                    <th>Name</th>
                                                    <th>image</th>
                                                    <th>desc</th>
                                                    <th>symbol</th>
                                                    <th>currency</th>
                                                    <th>value</th>
                                                    <th>listed price</th>
                                                    <th>maximum_value</th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                <tr>

                                                    <td>{item.descriptor.name}</td>
                                                    <td>{<img src={item.descriptor.images} alt="symbol" width="30" height="30" />}</td>
                                                    <td>{item.descriptor.long_desc}</td>
                                                    <td>{<img src={item.descriptor.symbol} alt="symbol" width="30" height="30" />}</td>
                                                    <td>{item.price.currency}</td>
                                                    <td>{item.price.value}</td>
                                                    <td>{item.price.listed_price}</td>
                                                    <td>{item.price.maximum_value}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        console.log(item.price.value);
                                    })

                                }</td>


                            </tr>


                        </tbody>
                    </table>



                )}
            </div>
        </Fragment>
    );
}

export default Providers;