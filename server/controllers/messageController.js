import moment from 'moment';

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

// Controller to handle getting the messages and rendering the home page
function getMessages(req, res) {
    res.render('index', {
        title: 'Mini Message Board',
        messages: messages.reverse(),
        moment: moment // Pass moment to the view
    });
}

// Controller to handle rendering the form for a new message
function newMessageForm(req, res) {
    res.render('new', { title: 'Add a new message' });
}

// Controller to handle posting a new message
function addNewMessage(req, res) {
    const { user, text } = req.body;
    messages.push({ text: text, user: user, added: new Date() });
    res.redirect('/');
}

export default {
    getMessages,
    newMessageForm,
    addNewMessage
};