import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  openAIApiKey: "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",
  temperatures: 0.9,
});

const res = await model.invoke(
  "What would be a good company name for a company that makes colorful socks?"
);

console.log(res);
