/** @format */

import { lazy, Suspense } from "react";
// fallbackui
import FallBackUi from "src/components/FallBackUi";
// css
import "src/App.css";
// containers
const Main = lazy(() => import("src/containers/Main"));
const About = lazy(() => import("src/containers/About"));
const Project = lazy(() => import("src/containers/Projects"));
const Skills = lazy(() => import("src/containers/Skills"));
const Education = lazy(() => import("src/containers/Education"));
const Contact = lazy(() => import("src/containers/Contact"));
// components
const MainDrawer = lazy(() => import("src/components/MainDrawer"));

const App = () => {
    return (
        <>
            <Suspense fallback={<FallBackUi />}>
                <MainDrawer />
                <Main />
                <About />
                <Project />
                <Skills />
                <Education />
                <Contact />
            </Suspense>
        </>
    );
};

export default App;
