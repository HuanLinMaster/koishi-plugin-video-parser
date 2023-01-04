import { Context } from "koishi";

export default async (ctx: Context, url: String) => {
  const axios = ctx.http.axios;
  const res = await axios(`https://tenapi.cn/video/?url=${url}`);
  if (res.data.code != 200) {
    return "err:" + res.data.msg;
  } else {
    return res.data.url;
  }
};
