import { Suspense } from "react";
import dynamic from "next/dynamic";

// const DynamicComponent = dynamic(() => import("../components/ComponentLazy"), {
    // loading: () => <>Loading</>,
    // ssr: true
    // suspense: true
// });

const DynamicComponent = dynamic<any>(
    () =>
        new Promise<any>((resolve) => {
            setTimeout(() => {
                import("../components/Hello").then((mod) => resolve(mod.Hello));
            }, 2000);
        })
);
const Home = () => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <DynamicComponent name="Home" path="/page" />
        </Suspense>
    );
};

export default Home;
