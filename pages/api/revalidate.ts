// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    revalidated?: boolean;
    error?: true;
    message?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id } = req.query || req.body;

    try {
        await res.revalidate(`/test/${id}`);
        return res.json({ revalidated: true });
    } catch (err: any) {
        return res.status(500).send({ error: true, message: err.message });
    }
}
