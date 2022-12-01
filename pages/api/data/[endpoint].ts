import type { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const add = ({ key, value }: { key?: string; value?: string }) => {
    const data = serverRuntimeConfig.var1;
    if (Array.isArray(data) && typeof key === "string" && key !== "") {
        data.push({ [key]: value });
    }
    console.log(data);
    // if (key)  = value;
    // console.log("add", key, value);
    return data;
};

const remove = (key: string) => {
    // delete data[key];
    // return data;
    const data = serverRuntimeConfig.var1;
    console.log(data);
    return data;
};

const endpoints: { [key: string]: (...arg: any) => any } = {
    add,
    remove,
};

interface INextApiRequestEndpoint extends NextApiRequest {
    query: {
        endpoint: string;
    };
}

type Data = {
    query?: any;
    body?: any;
    data?: { [key: string]: any };
    error?: string | boolean;
    result?: any;
};

export default async function handler(
    req: INextApiRequestEndpoint,
    res: NextApiResponse<Data>
) {
    console.log("body:", req.body);
    let result: Array<string> = [];
    try {
        if (endpoints[req.query.endpoint] instanceof Function)
            result = endpoints[req.query.endpoint]({
                key: req.body.key,
                value: req.body.value,
            });
        return res.json({ query: req.query, body: req.body, result: result });
    } catch (err: any) {
        return res.status(500).send({
            error: err.message,
            query: req.query,
            body: req.body,
        });
    }
}
