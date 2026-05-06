import { applyRules } from './ruleEngine.js';

export const processEvent = async (eventData) => {
    try {
        console.log('Received event:', eventData);

        const category =
            eventData.event?.columnValues?.category || 'unknown';
        console.log('Evaluating category:', category);

        await applyRules(category, eventData);
    } catch (err) {
        console.error('Error in processEvent:', err);
        throw err;
    }
};