import type { NextApiRequest, NextApiResponse } from "next";

const add = ({ key, value }: { key?: string; value?: string }) => {
    if (!Array.isArray(process.env.VAR1)) {
        try {
            process.env.VAR1 = "[]";
        } catch (err: any) {
            console.log(`JSON.stringify("[]")`, err.message);
        }
    }
    let data = null;
    try {
        console.log("process.env.VAR1", process.env.VAR1);
        if (process.env.VAR1) data = JSON.parse(process.env.VAR1);
    } catch (err: any) {
        console.log(`JSON.parse(process.env.VAR1 || "")`, err.message);
    }

    if (Array.isArray(data) && typeof key === "string" && key !== "") {
        data.push({ [key]: value });
    }
    console.log(data);
    try {
        process.env.VAR1 = JSON.stringify(data);
    } catch (err: any) {
        console.log(`process.env.VAR1 = JSON.stringify(data)`);
    }
    return data;
};

const remove = (key: string) => {
    // delete data[key];
    // return data;
    const data = process.env.VAR1;
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
