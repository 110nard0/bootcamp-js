const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log("SUBMITTED");

    // const userInput = document.querySelectorAll('input')[0].value;
    // const tweetInput = document.querySelectorAll('input')[1].value;

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const boldTag = document.createElement('b');

    boldTag.append(username);
    newTweet.append(boldTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}
