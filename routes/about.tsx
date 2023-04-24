import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(req, ctx) {
      const resp = await ctx.render();
      resp.headers.set("X-Custom-Header", "Hello");
      return resp;
    },
};

export default function AboutPage() {
    const date = new Date().toGMTString();
    return (
      <main>
        <h1>About</h1>
        <p>This is the about page.</p>
        <p>{date}</p>
      </main>
    );
}