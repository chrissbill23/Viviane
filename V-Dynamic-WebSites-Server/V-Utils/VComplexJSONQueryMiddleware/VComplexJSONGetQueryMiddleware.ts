export function convertGetQuery(req: any, res: any, next): void {
    if (typeof req.query == 'string') {
        const query = JSON.parse(Buffer.from(req.query.q, 'base64').toString());
        req.query = query;
    }
    next();
}
