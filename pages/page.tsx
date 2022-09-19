import dynamic from "next/dynamic";
import { Suspense } from "react";
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
const Page = () => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <DynamicComponent name="Page" path="/" />
        </Suspense>
    );
};

export default Page;
