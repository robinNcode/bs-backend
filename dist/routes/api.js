import { Router } from 'express';
import { submitFeedback } from '../controllers/feedbackController.js';
import { getVisitorCount, setVisitorCount } from '../controllers/visitorController.js';
const router = Router();
// Endpoint to submit feedback
router.post('/feedback', submitFeedback);
// Endpoint to get visitor count
router.get('/visitor-count', getVisitorCount);
// Endpoint to set visitor count (for admin use)
router.post('/visitor', setVisitorCount);
export default router;
//# sourceMappingURL=api.js.map