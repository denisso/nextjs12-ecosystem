import dynamic from "next/dynamic";
import { lazy, Suspense } from "react";
// const DynamicComponent = dynamic(() => import("../components/Component"),{
//     suspense: false,
// });

const DynamicComponent = lazy(() => import("../components/Component"));
const Page = ({ date }: any) => {
    return (
        <Suspense fallback={`Loading...`}>
            <DynamicComponent date={date} name="Page" path="/" />
        </Suspense>
    );
};

export default Page;

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
