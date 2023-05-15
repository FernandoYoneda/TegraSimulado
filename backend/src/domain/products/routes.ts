import Router from "@koa/router";
import Products from "./products.json";
import { ProductSchema } from "./schemas";
import { fromZodError } from "zod-validation-error";

const router = new Router();

router.get("/produtos", (ctx) => {
  ctx.body = Products;
});
router.post("/produtos", (ctx) => {
  const body = ctx.request.body;
  const product = ProductSchema.safeParse(body);

  if (!product.success) {
    ctx.status = 400;
    ctx.body = fromZodError(product.error).details;
    return;
  }

  ctx.body = body;
});

export default router;
