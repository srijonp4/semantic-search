import { HfInference } from '@huggingface/inference';
import * as dotenv from 'dotenv';
dotenv.config();
export const hf = new HfInference(process.env.HF_TOKEN);
