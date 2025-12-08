<!-- layouts/ModalLayout.vue-->
<!--모달창 같은 경우는 레이아웃을 따로 만듦-->

<template>
  <div class="container">
    <header>
      <slot name="header">
        <span style="float: right">X</span>
        <!--콜백컨텐츠: 부모가 요소를 안주면 자체적으로 정의 해둔 요소를 값으로 쓰겠다라고 정한 디폴트 값임-->
      </slot>
    </header>

    <main>
      <slot></slot>
      <!--이름이 없는 슬롯은 디폴트라고 함-->
    </main>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<!---------------------------------------------------------------->
<style scoped>
.container {
  width: 400px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  animation: fadeIn 0.25s ease;
}

/* Header */
.container header {
  padding: 15px;
  background: #f6f6f6;
  border-bottom: 1px solid #ddd;
  font-weight: 600;
  position: relative;
}

/* 메인 콘텐츠 */
.container main {
  padding: 20px;
  font-size: 15px;
  color: #333;
}

/* Footer */
.container footer {
  padding: 12px 15px;
  background: #f6f6f6;
  border-top: 1px solid #ddd;
  text-align: right;
}

/* 닫기 버튼(X) 스타일 개선 */
.container header span {
  cursor: pointer;
  font-size: 18px;
  color: #666;
}

.container header span:hover {
  color: #000;
}

/* 간단한 등장 애니메이션 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
