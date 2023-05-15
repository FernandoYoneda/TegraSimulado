import Koa from "koa";
import Router from "@koa/router";
import ProductsRoutes from "./domain/products/routes";
import cors from "@koa/cors";
import bodyparser from "koa-bodyparser";
import { setUpi18n } from "./schemas";

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = { message: "Status ok " };
});

setUpi18n();

app
  .use(cors())
  .use(bodyparser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(ProductsRoutes.routes())
  .use(ProductsRoutes.allowedMethods());

app.listen(5000, () => {
  console.log("Server up");
});
