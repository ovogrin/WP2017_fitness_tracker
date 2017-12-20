let iCurrentPicture = 0;
let iCurrentQuote = 0;

const data = {
    pictures: [
        "bicycle.jpg",
        "burpees.jpg",
        "crunches.jpg",
        "lunges.jpg",
        "plank.jpg",
        "pushups.jpg",
        "running.jpeg",
        "squats.jpg",
        "swimming.jpg",
        "walking.jpeg"
    ],
    
    getNextPicture: () => data.pictures[iCurrentPicture++],

    quotes: [
        { text: "Bicycle" },
        { text: "Burpees" },
        { text: "Crunches" },
        { text: "Lunges" },
        { text: "Plank" },
        { text: "Pushups" },
        { text: "Running" },
        { text: "Squats" },
        { text: "Swimming" },
        { text: "Walking" },
    ],

    getNextQuote: () => data.quotes[iCurrentQuote++],

    app: {
        picture: "",
        quotes: []
    }

}

module.exports = data;