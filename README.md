# React Payments 용 모달

## 설치 방법

```
yarn add @gabrielyoon7/simple-modal
```

## 사용 방법

```
import { Modal } from '@gabrielyoon7/simple-modal';
```

```
<Modal
 modalOpen={/* 모달을 열고 닫는 기준이 될 boolean 상태 (필수) */}
 closeModal={/* 백드롭을 눌렀을 때 모달을 닫는 함수. (필수가 아님) */}
>
  /* 모달에 표시하고 싶은 엘리먼트 */
</Modal>
```

## 사용 예제

```
import React, { useState } from 'react';
import { Modal } from '@gabrielyoon7/simple-modal';

function App() {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <div className="App">
      <button onClick={openModal}>모달 열기</button>
      <Modal modalOpen={isOpen} closeModal={closeModal}>
        <div>하이</div>
      </Modal>
    </div>
  );
}

export default App;

```

## 참고사항

React.ReactPortal을 활용하여 구현하였으므로, React DOM에서 감지가 되지 않을 수 있습니다.

따라서 테스트 라이브러리에서 접근이 어려운 경우가 있습니다. 이 경우에는 HTML DOM으로 접근하면 문제 없이 사용이 가능합니다.
