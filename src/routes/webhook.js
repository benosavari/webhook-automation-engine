import express from 'express';
import {authMiddleware} from '../middleware/auth.js';
import {processEvent} from '../services/eventProcessor.js';

const router = express.Router();

router.post("/monday", authMiddleware, async (req, res) => {
    try {
        const eventData = req.body;

        if (eventData.challenge) {
            return res.json({challenge: eventData.challenge});
        }

        await processEvent(eventData);
        res.status(200).json({status: 'processed'});

    } catch (err) {
        console.error('Error processing event:', err);
        res.status(500).json({error: 'Internal server error'});
    }
    });

export default router;