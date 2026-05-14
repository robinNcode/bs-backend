import { Request, Response } from 'express';
import Score from '../models/score.js';

export const submitScore = async (req: Request, res: Response) => {
    try {
        const { playerName, score, badges, challengesCompleted } = req.body;

        if (!playerName || typeof score !== 'number') {
            return res.status(400).json({ message: 'playerName and score are required.' });
        }

        const newScore = new Score({
            playerName: String(playerName).slice(0, 30),
            score,
            badges: badges || [],
            challengesCompleted: challengesCompleted || 0,
        });

        await newScore.save();
        return res.status(201).json({ message: 'Score saved!', data: newScore });
    } catch (error) {
        console.error('Error saving score:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

export const getLeaderboard = async (req: Request, res: Response) => {
    try {
        const topScores = await Score.find()
            .sort({ score: -1, createdAt: 1 })
            .limit(10)
            .select('playerName score badges challengesCompleted createdAt');
        return res.status(200).json({ leaderboard: topScores });
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};
