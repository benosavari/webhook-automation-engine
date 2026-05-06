import { createTicket, logEvent} from './actions.js';

export const applyRules = async (category, eventData) => {
    try {
        console.log('Evalaing category:', category);

        if (category === 'bug') {
            await createTicket(eventData);
        } else if (category === 'feature') {
            await logEvent(eventData);
        } else {
            console.log("No rule matched");
        }
    } catch (err) {
        console.error('Error in applyRules:', err);
        throw err;
    }

};