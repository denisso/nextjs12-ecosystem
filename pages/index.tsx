import { Suspense } from "react";
import dynamic from "next/dynamic";
import { lazy } from "react";
// const DynamicComponent = dynamic(() => import("../components/Component"),{
//     suspense: false,
// });

const DynamicComponent = lazy(() => import("../components/Component"));

const Home = ({ date }: any) => {
    return (
        <Suspense fallback={`Loading...`}>
            <DynamicComponent date={date} name="Home" path="/page"/>
        </Suspense>
    );
};

export default Home;

/**
 * loading delay imitation
 * @returns
 */
const waitMe = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve(new Date().toUTCString()), 2000)
    );

export async function getServerSideProps() {
    return {
        props: { date: await waitMe() },
    };
}
