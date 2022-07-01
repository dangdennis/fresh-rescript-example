/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handlers: Handlers = {
  GET(req, ctx) {
    console.log("GET request", req);
    console.log("GET ctx", ctx);
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
  POST(req, ctx) {
    console.log("POST request", req);
    console.log("POST ctx", ctx);
    return new Response("hello");
  },
};
export default function Greet(props: PageProps) {
  console.log(props)
  return <div>Hello {props.params.name}</div>;
}
