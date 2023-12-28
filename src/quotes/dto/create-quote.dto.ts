// export class CreateQuoteDto {
//   text: string;
//   author: string;
// }

import { z } from 'zod';

export const CreateQuoteSchema = z
  .object({
    text: z.string(),
    author: z.string(),
  })
  .required();

export type CreateQuoteDto = z.infer<typeof CreateQuoteSchema>;
