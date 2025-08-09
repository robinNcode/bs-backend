import Visitor from '../models/visitor.js';
export const setVisitorCount = async (req, res) => {
    try {
        const ip = req.ip; // Get IP address
        const browser = req.headers['user-agent'] || 'Unknown'; // Get browser details
        const newVisitor = new Visitor({
            ip,
            browser,
        });
        await newVisitor.save();
        res.status(201).json({ message: 'Visitor data recorded successfully.' });
    }
    catch (error) {
        console.error('Error recording visitor data:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};
export const getVisitorCount = async (req, res) => {
    try {
        const count = await Visitor.countDocuments();
        res.status(200).json({ count });
    }
    catch (error) {
        console.error('Error getting visitor count:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};
//# sourceMappingURL=visitorController.js.map