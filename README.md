# api 폴더의 이해

- api 용도입니다.
- http://localhost:3000/api/hello
- https://fakestoreapi.com/

## api 만들어보기

- /src/pages/api/getallgood.ts
- http://localhost:3000/api/getallgood

```ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await fetch("https://fakestoreapi.com/products");
  const json = await data.json();
  res.status(200).json(json);
}
```
