import { z } from "zod";

//schema de validação de produto

export const ProductSchema = z.object({
  id: z.number().positive().int().optional(),
  name: z.string().min(3).max(50),
  description: z.string().min(3).max(100).optional(),
  price: z.number().positive(),
  category: z.string().min(3).max(50),
  image: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;
