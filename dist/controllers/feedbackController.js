import Feedback from '../models/feedback.js';
export const submitFeedback = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newFeedback = new Feedback({ name, email, message });
        await newFeedback.save();
        res.status(200).json({ message: 'Feedback submitted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error });
    }
};
//# sourceMappingURL=feedbackController.js.map