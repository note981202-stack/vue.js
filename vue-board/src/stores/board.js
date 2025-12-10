//stores/board.js//
//컴포넌트의 기능을 한 곳에 모아두기 위함

import { defineStore } from "pinia";
import axios from "axios";

export const useBoardStore = defineStore("board", {
  state: () => ({
    //글목록을 담아두기 위한 장소
    posts: [],
    currentPost: {},
    error: "",
  }),
  //기능 구현
  actions: {
    // 목록.
    async fetchPost() {
      try {
        const response = await axios.get("/api/boards/");
        this.posts = response.data;
        this.error = "";
      } catch (err) {
        console.error(err);
        this.error = "게시글 목록을 가져오는데 실패했습니다.";
      }
    },
    // 상세조회.
    async fetchPostDetail(id) {
      try {
        const response = await axios(`/api/boards/${id}`);
        this.currentPost = response.data;
        this.error = "";
      } catch (err) {
        console.error(err);
        this.error = "게시글 상세정보를 가져오는데 실패했습니다.";
      }
    },

    // 게시글 저장.
    async savePost(postData, board_id = null) {
      if (board_id) {
        //수정
        await axios.put(`/api/boards/${board_id}`, postData);
        return true;
      } else {
        //등록
        await axios.post("/api/boards", postData);
        return true;
      }
    },

    // // // 삭제.
    async deletePost(id) {
      await axios.delete(`/api/boards/${id}`);
      // this.fetchPost();

      // posts refresh처리.
      // this.posts = "filter 메소드를 제거해주면 ";
    },
  },
});
