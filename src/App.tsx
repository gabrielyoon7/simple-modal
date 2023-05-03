import React, { useState } from 'react';
import Modal from "./lib/Modal";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>모달 열기</button>
      <Modal modalOpen={isOpen}>
        <div>하이</div>
      </Modal>
    </div>
  );
}

export default App;
