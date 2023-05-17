import Router from "@koa/router";
import { ProductSchema } from "./schemas";
import { fromZodError } from "zod-validation-error";
import { getProducts, insertProduct, updateProduct } from "./database";

const router = new Router();

router.get("/produtos", async (ctx) => {
  ctx.body = await getProducts();
});

router.post("/produtos", async (ctx) => {
  const body = ctx.request.body;
  const product = ProductSchema.safeParse(body);

  if (!product.success) {
    ctx.status = 400;
    ctx.body = fromZodError(product.error).details;
    return;
  }

  ctx.body = await insertProduct(product.data);
});

router.put("/produtos/:id", async (ctx) => {
  const body = ctx.request.body;
  const product = ProductSchema.safeParse(body);
  const id = parseInt(ctx.params.id);

  if (!product.success) {
    ctx.status = 400;
    ctx.body = fromZodError(product.error).details;
    return;
  }
  if (!id) {
    ctx.status = 400;
    ctx.body = [
      {
        code: "invalid_type",
        expected: "number",
        path: ["id"],
        message: "O dado deve ser do tipo number",
      },
    ];
    return;
  }

  const updated = await updateProduct(product.data, id);
  if (!updated) {
    ctx.status = 400;
    ctx.body = [
      {
        message: "O id do produto não existe",
      },
    ];
    return;
  }
  ctx.status = 200;
});
export default router;
