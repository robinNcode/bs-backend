import { Request, Response } from 'express';
import Visitor from '../models/visitor.js';

// Get real IP address, handling reverse proxies
function getClientIp(req: Request): string {
    const forwarded = req.headers['x-forwarded-for'];
    if (forwarded) {
        return (typeof forwarded === 'string' ? forwarded : forwarded[0]).split(',')[0].trim();
    }
    return req.ip || 'unknown';
}

export const setVisitorCount = async (req: Request, res: Response) => {
    try {
        const ip = getClientIp(req);
        const userAgent = req.headers['user-agent'] || 'Unknown';

        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

        // Check if the same IP + device visited within the last 1 hour
        const existing = await Visitor.findOne({
            ip,
            userAgent,
            lastVisit: { $gt: oneHourAgo },
        });

        if (existing) {
            // Already counted within the past hour, skip
            return res.status(200).json({ message: 'Already counted.', counted: false });
        }

        // Upsert: update lastVisit if record exists, otherwise create a new one
        await Visitor.findOneAndUpdate(
            { ip, userAgent },
            { $set: { lastVisit: new Date(), userAgent }, $setOnInsert: { createdAt: new Date() } },
            { upsert: true, new: true }
        );

        return res.status(201).json({ message: 'Visitor recorded.', counted: true });
    } catch (error) {
        console.error('Error recording visitor data:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

export const getVisitorCount = async (req: Request, res: Response) => {
    try {
        const count = await Visitor.countDocuments();
        return res.status(200).json({ count });
    } catch (error) {
        console.error('Error getting visitor count:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};
