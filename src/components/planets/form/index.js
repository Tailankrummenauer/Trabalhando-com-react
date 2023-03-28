import React, { Fragment, useState } from "react";

const Form = (props) => {
    return (
        <Fragment>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" />
                </div>
            </form>
        </Fragment>
    )
}
export default Form;