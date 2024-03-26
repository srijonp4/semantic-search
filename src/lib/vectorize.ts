import { openai } from './openai';
import { hf } from '@/lib/huggingface';
// export const vectorize_openai = async (input: string): Promise<number[]> => {
//   const embeddingResponse = await openai.embeddings.create({
//     input,
//     model: 'text-embedding-ada-002',
//   });

//   const vector = embeddingResponse.data[0].embedding;
//   return vector;
// };

export const vectorize = async (input: string): Promise<number[]> => {
  const vector = await hf.featureExtraction({
    // model: 'sentence-transformers/all-MiniLM-L6-v2',
    model: 'mixedbread-ai/mxbai-embed-large-v1',
    inputs: `${input}`,
  });

  return vector as number[];
};
