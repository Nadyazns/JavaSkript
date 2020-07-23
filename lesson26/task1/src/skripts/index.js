import { tasks } from './storage.js';
import { renderListItems } from './tasksList.js';

document.addEventListener('DOMContentLoaded', () => {
    renderListItems(tasks);
});