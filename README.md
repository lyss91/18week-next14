# Pages Router

## http://localhost:3000

- /src/pages/index.tsx

```tsx
export default function Home() {
  return <h1>홈</h1>;
}
```

## http://localhost:3000/search?keyword=아이유

- 쿼리스트링 처리하기
- /src/pages/search.tsx

```tsx
// 앱 라우터버전 import { useRouter } from "next/navigation";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { keyword } = router.query;
  return (
    <div>
      검색 <b>{keyword}</b> 페이지
    </div>
  );
}
```

## http://localhost:3000/good/1

- params
- /src/pages/good/[id].tsx

```tsx
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <b>{id}</b>번 제품정보
    </div>
  );
}
```

## http://localhost:3000/nopage

- 없는 라우터로 이동시 Not Found 페이지
- /src/pages/404.tsx
- 파일명을 지키셔야 합니다.
