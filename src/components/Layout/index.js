import React from "react";

import Navigation from "../Navigation";
import Footer from "../Footer";

export default ({ location, title, children, classes, lang }) => {
    return (
        <>
            <div className="wrapper min-vh-100">
                <Navigation></Navigation>
                <section>
                    {children}
                </section>
            </div>
            <Footer></Footer>
        </>
    )
}
