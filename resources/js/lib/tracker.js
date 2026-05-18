import axios from 'axios';

export function trackInteraction(type, entityId = null, entityType = null, metadata = {}) {
    axios.post('/interactions', {
        type,
        interactionable_id: entityId,
        interactionable_type: entityType,
        metadata
    }).catch(error => console.error('Tracking failed:', error));
}
