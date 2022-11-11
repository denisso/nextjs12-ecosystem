import type { NextApiRequest, NextApiResponse } from "next";
import { state } from "../../lib/state";
type Data = {
    state?: number;
    error?: true;
    message?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        return res.json({ state: state.var1 });
    } catch (err: any) {
        return res.status(500).send({ error: true, message: err.message });
    }
}
