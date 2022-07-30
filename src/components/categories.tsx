import React, { Fragment } from "react";
import './Categories.css';

let Categories = ({ bppCategories }) => {

    return (

        <Fragment>
            <div className="categorie-card">

                {bppCategories.map((categorie) =>



                    <table className="categorie-table">

                        <tbody>
                            <tr>
                                <td>{categorie.descriptor.name}</td>
                            </tr>
                            <tr>
                                <td>{categorie.descriptor.short_desc}</td>
                            </tr>
                        </tbody>
                    </table>


                )}
            </div>

        </Fragment>
    );
}

export default Categories;