import { z } from "zod";

//schema de validação de produto

export const ProductSchema = z.object({
  id: z.number().positive().int(),
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  image: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;
