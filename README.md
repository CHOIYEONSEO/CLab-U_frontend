# CLab:U Frontend

## 실행 방법

```bash
npm i
npm run dev
```

## API 불러오기에 대하여

> 주의사항: 현재 스타일이 매우 고정적으로 짜여있습니다. 하지만 데이터를 가져와서 뿌려줘야 하는 순간, 기존 스타일을 유지하는 것은 불가능합니다. 스타일도 그에 맞게 동적으로 구성되어야 합니다. 대표적으로 아래서 확인하게될 lab 목록 가져오는 부분인데, 스타일까지 전부 뜯어고쳤습니다. 아쉽게도... 각오를 하셔야 합니다.

다음의 두 라이브러리를 적극적으로 활용합니다.

1. `axios`: 웹 기본 API인 fetch 함수와 유사하나, 조금 더 편리하게 사용할 수 있게 Wrapping한 라이브러리입니다.
2. `@tanstack-query/react`: `axios`를 통해 서버 데이터를 반응형으로 다룰 수 있게 해줍니다.

크게 두 가지 구역을 살펴보시면 되겠습니다.

### Lab 목록 가져오기

`http://[호스트 주소]/labs`에서 확인 가능합니다. 현재 서버에 들어있는 데이터도 별로 없고, 이미지가 서버에 없어 불러와지지 않기 때문에 처음 볼때는 이게 뭔가 싶을 겁니다. 조금 이쁜 걸 확인하고 싶으면 위의 `labs`를 없애고, 아래 주석처리된 `labs`를 주석 해제해주세요.

`src/features/labs/pages/LabList.jsx`를 확인하시면 다음 부분이 존재합니다.

```jsx
let [searchParams, setSearchParams] = useSearchParams();

const keyword = searchParams.get("keyword");

const { data: labs, isLoading } = useFetchLabs(keyword);
```

이 부분은 `/labs?keyword="소프트웨어"`처럼 search params(여기서는 `keyword="소프트웨어"`)를 붙여서 해당 주소로 이동했을 경우, `useFetchLabs(keyword)` 훅을 활용해 data를 `labs` 상태를 통해 가져옴과 동시에, `isLoading`이라는 현재 불러오는 중인지 알려주는 상태값을 함께 받아옵니다.

이는 아래 JSX에서 다음과 같이 활용합니다.

```jsx
{
  isLoading ? (
    <div>Loading</div>
  ) : (
    <div className={styles.grid}>
      {labs.map((lab) => (
        <Link key={lab.id} to={`/labs/${lab.id}`}>
          <img
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            alt=""
            src={lab.logoUrl}
          />
          <div>{lab.name}</div>
        </Link>
      ))}
    </div>
  );
}
```

보다시피 로딩 중이라면 `<div>Loading</div>`를 그렇지 않으면 아래에서 `labs`로부터 그리드를 만들어 냅니다.

`useFetchLabs` 훅이 어떻게 생겼는지 더 자세히 확인해보겠습니다. `src/features/labs/hooks/query.js`를 확인하시면 다음과 같습니다.

```jsx
export const useFetchLabs = (keyword) => {
  return useQuery({
    queryKey: ["labs", { keyword }],
    queryFn: () => api.labs.getList(keyword),
  });
};
```

`@tanstack-query/react`의 `useQuery` 훅을 활용해 가져옵니다.

- queryKey: 가장 기본적인 역할은, 캐싱입니다. 키 값이 바뀌면 새로 가져오고, 그렇지 않으면 기존 값을 가져옵니다. 정책에 따라 달라집니다.
- queryFn: 데이터를 가져오는 함수를 넣어주면 됩니다.

처음 보는 부분이겠지만, 정말 따라만 하면 되겠습니다. **기본적으로, 'GET' 메소드를 사용하는 api는 모두 동일한 구조를 사용하면 되겠습니다.**

저의 경우에는 `/src/api` 폴더에 모든 api 호출부를 넣어놓았습니다.

`/src/api/index.js`

```javascript
import * as labs from "./labs";
import * as chats from "./chats";

const api = {
  labs,
  chats,
};

export default api;
```

`/src/api/labs.js`

```javascript
import axios from "axios";

export const get = (id) => axios.get(`/api/labs/${id}`).then((res) => res.data);
export const getList = (keyword) => {
  return axios
    .get(`/api/labs`, { params: { keyword } })
    .then((res) => res.data);
};
```

보시다시피 `axios`를 사용해 가져옵니다.

이 구조를 전반적으로 유지해가며 데이터를 가져와주시면 되겠습니다.

### Chat 가져오기

Chat은 labs 정보 가져오는 것과는 다르게 `POST` 메소드를 사용해 데이터를 넘긴 후 결과를 받아옵니다.

`@tanstack-query/react`의 `useMutation` 훅을 사용하고, `axios.post` 함수를 사용합니다.

`src/features/chat/pages/Search.jsx`를 봅시다. 전반적으로 미리 데이터 가져오는 부분은 짜놓기는 했으나, UI 구현은 필요합니다.

브라우저 로그를 보시면 채팅 결과를 잘 가져오는 것을 확인하실 수 있을 거에요.

```jsx
...
const { mutate, isPending, isSuccess } = useChatMutation();
...

...
const sendChat = useCallback(
    (query) => {
        ...
        mutate(query, {
            onSuccess: (data) => {
                setHistory((prev) => [...prev, { sender: "ai", content: data }]);
            },
            onError: (error) => {
                setHistory((prev) => [...prev, { sender: "ai", content: error.message }]);
            },
        });
        ...
    },
    [mutate]
);
```

`mutate` 함수를 사용해 query에 담긴 프롬프트를 보내며, 뒤에 작성한 `onSuccess`, `onError` 콜백을 통해 결과가 `history` 상태에 저장되는 것을 보실 수 있습니다.

`useChatMutation`은 다음과 같이 구현되어 있습니다.

```js
import { useMutation } from "@tanstack/react-query";
import api from "../../../api";

export const useChatMutation = () =>
  useMutation({
    mutationFn: (query) => api.chats.chat(query),
  });
```

입력에 따라 달라지는 데이터를 매번 서버에서 불러와야 하므로, `useMutation`에는 `queryKey`를 사용하지 않습니다. `GET` 메소드가 아닌 `POST`, `PUT`, `PATCH`, `DELETE` 모두 요렇게 하시면 됩니다.

마지막으로 `src/api/chats.js`에 있는 `axios` 호출부를 확인합시다.

```js
import axios from "axios";

export const chat = (query) =>
  axios.post(`/api/chat/`, { query }).then((res) => res.data);
```

### 처음 시작하기

1. `LabList`를 이해해보면서, `ClubList`도 똑같이 따라 만들어보세요.

2. `Search` 부분의 UI를 구현해보세요.
