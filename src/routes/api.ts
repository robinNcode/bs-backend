import { Router } from 'express';
import { submitFeedback } from '../controllers/feedbackController.js';
import { getVisitorCount, setVisitorCount } from '../controllers/visitorController.js';
import { submitScore, getLeaderboard } from '../controllers/scoreController.js';

const router = Router();

// Feedback
router.post('/feedback', submitFeedback);

// Visitor count (with IP+device dedup - max once per hour)
router.get('/visitor-count', getVisitorCount);
router.post('/visitor', setVisitorCount);

// Block coding leaderboard
router.post('/scores', submitScore);
router.get('/scores/leaderboard', getLeaderboard);

export default router;
