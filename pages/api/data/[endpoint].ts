import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../data/data";

const add = ({ key, value }: { key?: string; value?: string }) => {
    if (key) data[key] = value;
    console.log("add", key, value);
    return data;
};

const remove = (key: string) => {
    delete data[key];
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
    error?: boolean;
    message?: string;
};

export default async function handler(
    req: INextApiRequestEndpoint,
    res: NextApiResponse<Data>
) {
    console.log("body:", req.body);
    try {
        if (endpoints[req.query.endpoint])
            endpoints[req.query.endpoint]({ key: req.body.key, value: req.body.value });
        return res.json({ query: req.query, body: req.body, data });
    } catch (err: any) {
        return res.status(500).send({
            error: true,
            message: err.message,
            query: req.query,
            body: req.body,
        });
    }
}
