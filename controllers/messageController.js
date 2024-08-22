import moment from 'moment';
import { getUserMessages, insertUsername, getSingleMessages } from '../db/queries.js';

// Controller to handle getting the messages and rendering the home page
async function getMessages(req, res) {
    const messages = await getUserMessages();
    console.log(messages);
    res.render('index', {
        title: 'Mini Message Board',
        // messages: messages.reverse(),
        messages: messages,
        moment: moment // Pass moment to the view
    });
}

// Controller to handle rendering the form for a new message
function newMessageForm(req, res) {
    res.render('new', { title: 'Add a new message' });
}

// Controller to handle posting a new message
function addNewMessage(req, res) {
    const { username, text } = req.body;
    insertUsername(username, text);
    // messages.push({ text: text, user: user, added: new Date() });
    res.redirect('/');
}

const blog_details = async (req, res) => {
    const id = req.params.id;
    const idAsNumber = parseInt(id, 10) + 1;
    console.log('ID:', idAsNumber)
    const result = await getSingleMessages(idAsNumber);
    console.log('result:', result);
    if (result) {
        res.render('details', { message: result, title: 'Message Details', moment });
    } else {
        res.status(404).send('Message not found'); // Handle the case where the ID is invalid
    }

}


export default {
    getMessages,
    newMessageForm,
    addNewMessage,
    blog_details
};