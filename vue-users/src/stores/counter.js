import { ref, computed } from "vue";
import { defineStore } from "pinia";
//저장소를 등록할때 쓰는 함수

export const useCounterStore = defineStore(
  "counter",
  () => {
    //선언할 때 use****Store 의 형식의 이름으로 선언함 ****안에는 id값을 넣음
    // 콜백 함수 안에 해당 저장소가 가지는 state, getters, actions 를 정의 함
    // state : ref 함수를 사용함
    const count = ref(0);
    // getters : computed 함수를 사용
    const doubleCount = computed(() => count.value * 2);
    // actions : 일반 함수로 정의
    function increment() {
      count.value++;
    }
    //return 안에 정의된 항목이 외부에 노출되는 항목
    return { count, doubleCount, increment };
  },
  {
    persist: true,
  }
);
