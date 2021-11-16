/** @format */

import { lazy, Suspense, useState, useEffect } from "react";
// fallbackui
import FallBackUi from "src/components/FallBackUi";
// css
import "src/App.css";
// utils
import db from "src/utils/Firebase";
import { runTransaction, doc } from "firebase/firestore";
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
    const [users, setUsers] = useState(0);

    useEffect(() => {
        const sfDocRef = doc(db, "users", "ksXFMoaxjsLJ5MwCqBj3");
        const fetchData = async () => {
            try {
                await runTransaction(db, async (transaction) => {
                    const sfDoc = await transaction.get(sfDocRef);
                    if (!sfDoc.exists()) {
                        return;
                    }

                    const newUsers = sfDoc.data().users + 1;
                    setUsers(newUsers);
                    transaction.update(sfDocRef, { users: newUsers });
                });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Suspense fallback={<FallBackUi />}>
                <MainDrawer />
                <Main />
                <About />
                <Project />
                <Skills />
                <Education />
                <Contact users={users} />
            </Suspense>
        </>
    );
};

export default App;
