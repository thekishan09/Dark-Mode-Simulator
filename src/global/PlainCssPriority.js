import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cache = createCache({
  key: "css",
  prepend: true,
});

export default function PlainCssPriority({ children }) {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
