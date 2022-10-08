import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { fetchGQL } from "../lib/graphql";
import superjson from "superjson"
const Home: NextPage = ({data}: any) => {
    return <div>{superjson.stringify(data)}</div>;
};

export default Home;
export const getServerSideProps: GetServerSideProps = async () => {
    // ...
    const result = await fetchGQL.test()
    console.log("result", result)

    const data = superjson.parse(superjson.stringify(result))
    
    return {
        props: {data},
    };
};
