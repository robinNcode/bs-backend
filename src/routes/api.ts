import { Router } from 'express';
import { submitFeedback } from '../controllers/feedbackController';
//import { getVisitorCount, setVisitorCount } from '../controllers/visitorController';

const router = Router();

// Endpoint to submit feedback
router.post('/feedback', submitFeedback);

// Endpoint to get visitor count
//router.get('/visitor-count', getVisitorCount);

// Endpoint to set visitor count (for admin use)
//router.post('/visitor', setVisitorCount);

export default router;
