export function convertGetQuery(req: any, res: any, next): void {
    const query = JSON.parse(Buffer.from(req.query.q, 'base64').toString());
    req.query = query;
    next();
}
