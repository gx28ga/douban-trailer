import Koa from "koa";

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = "yes";
  await next();
})

app.listen(9999)