import Koa from "koa";
import views from "koa-views";
import { resolve } from "path";
const app = new Koa();

app
  .use(views(resolve(__dirname, "./views"), {
    extension: "pug"
  }))
  .use(async (ctx, next) => {
    await ctx.render("index", {
      "title":"百合电影"
    })
  })
  .listen(9999);