import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";

const Container = () => {

    return (
        <div className="alcm__Container" style={{ marginTop: "66px", padding: "0px 20px" }} >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </div>
    );
};
export default Container