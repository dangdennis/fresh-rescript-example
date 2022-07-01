/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import Counter from "../islands/Counter.tsx";
import Button from "../islands/Button.tsx";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

interface Data {
  results: string[];
  query: string;
}

export const handlers: Handlers = {
  async GET(req, ctx) {
    console.log("GET request", req);
    console.log("GET ctx", ctx);
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/dangdennis`);
    console.log("resp", resp);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
  POST(req, ctx) {
    console.log("POST request", req);
    console.log("POST ctx", ctx);
    return new Response("hello");
  },
};
export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <Button></Button>
    </div>
  );
}
