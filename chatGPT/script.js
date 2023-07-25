import { config } from "dotenv";
config(); // setting up the config file 

import { Configuration,OpenAIApi } from "openai";

console.log(process.env.API_KEY)

const openai=new OpenAIApi( new Configuration({
    apiKey:process.env.API_KEY
}))

openai.createChatCompletion({
    model:"gpt-3.5-turbo",
    messages:[{role:"user", content:"Hello ChatGPT"}]
})
.then((res)=>{
    console.log(res.data.choices)
})