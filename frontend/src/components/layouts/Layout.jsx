/* eslint-disable react/prop-types */

import Header from './Header'
import Footer from "./Footer";
import  MainContent  from "./MainContent";

export function Layout({children}) {
    return (
        <div className="layout">
            <Header/>
            <MainContent>
                {children}
            </MainContent>
            <Footer/>
        </div>
    );
}