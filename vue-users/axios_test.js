//vue-users/axios_test.js
import axios from "axios";

const fakeServer = "https://jsonplaceholder.typicode.com";
//URI : users

fetch(`${fakeServer}/users`)
  .then((res) => res.json) //content-type에 따른 parser를 결정함
  .then((result) => {
    console.log("fetch", result);
  })
  .catch((err) => console.log(err));

axios(`${fakeServer}/users`) // 기본 : JSON을 처리 함 => .then을 한번만 적음
  .then((result) => {
    // console.log("axios", result.data);
  })
  .catch((err) => console.log(err));
//-------------------------------------------//
fetch(`${fakeServer}/users`, {
  method: "post",
  headers: {
    "Content-type": "application/json", //json의 형태로 보낼때에는 필수적으로 적어야 함
  },
  body: JSON.stringify({
    name: "hong",
    email: "hong@google.com",
    phone: "010-1122-1234",
  }),
})
  .then((res) => res.json())
  .then((result) => {
    console.log("fetch", result);
  })
  .catch((err) => console.log(err));

//-------------------------------------------//
axios(`${fakeServer}/users`, {
  method: "post",
  data: {
    name: "hong",
    email: "hong@google.com",
    phone: "010-1122-1234",
  },
})
  .then((result) => {
    console.log("axios", result.data);
  })
  .catch((err) => console.log(err));
