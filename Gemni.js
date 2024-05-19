//npm install @google/generative-ai

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyBelNC78JHbK2szV_V6ErVusxd0SbeSrE4');

async function generatePrompt(type, options) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    let prompt;

    switch (type) {
        case 'topics':
            prompt = `I want you to generate a list of topics to study for a boy named ${options.Name}, 
                      his self-described mindset is ${options.Mindset}, his language is ${options.Language}, and as 
                      an additional note, the user said ${options.Conditions}. Return a list of 200 subjects he may be 
                      interested in, in a CSV format separated by commas.`;
            break;
        case 'populate':
            prompt = `My Topic is ${options.Topic}, give me a video, a high-level overview in a CSV format.`;
            break;
        case 'videoQuiz':
            prompt = `${options.link} generate me a list of ten questions based on the video link I provided in a 
                       comma-separated format, for example (question:answer, question:answer).`;
            break;
        case 'quiz':
            prompt = `This is my topic ${options.topic}, generate me a list of questions and answers in a comma-separated list.`;
            break;
        case 'validateAnswer':
            prompt = `Determine if ${options.answer} is a valid response to the question: ${options.question}. Return either 'True' or 'False'.`;
            break;
        case 'talk':
            prompt = `${options.question}`;
            break;
        default:
            throw new Error('Invalid type');
    }

    const result = await model.generateContent(prompt);
    const response = result.response .text();
    console.log(response);
    return response;
}

generatePrompt('topics', { Name: 'John', Mindset: 'curious', LearningStyle: 'visual', Language: 'English', Conditions: 'none' });
// generatePrompt('populate', { Topic: 'Math', Mindset: 'analytical', LearningStyle: 'visual' });
// generatePrompt('videoQuiz', { link: 'https://example.com/video' });
// generatePrompt('quiz', { topic: 'Science' });
// generatePrompt('validateAnswer', { question: 'What is 2+2?', answer: '4' });
// generatePrompt('talk', { question: 'Tell me about the solar system.' });








