import { useRouter } from "next/router";
import React from "react";

const Index = () => {
    const router = useRouter();
    const [query, setQuery] = React.useState("");
    React.useEffect(() => {
        if (!router.isReady) return;
        setQuery(JSON.stringify(router.query));
    }, [router.isReady, router.query, setQuery]);

    return <>Posts Index query: {query}</>;
};

export default Index;
