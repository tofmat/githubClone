<template>
  <div class="repoList">
      <div class="flex repoSearch scrollX">
          <div class="flex-auto">
            <input type="text" placeholder="Find a repository..." class="repoInput">
          </div>
          <div class="flex">
            <button class="mxx-6 notGreen flex items-center">
                <span>Type:</span> All
                <span class="dropdown-caret ml-6"></span>
            </button>
            <button class="mxx-6 notGreen notGreen flex items-center">
                <span>Language:</span> All
                <span class="dropdown-caret ml-6"></span>
            </button>
            <button class="ml-6 text-center flex items-center">
                <svg class="octicon octicon-repo" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                New
            </button>
          </div>
      </div>
      <div class="flex repoItem" v-for="repo in repos" :key="repo.id">
          <div class="left">
            <h1><a :href="repo.html_url" target="_blank">{{repo.name}}</a></h1>
            <small v-if="repo.fork" class="noRepo">Forked from {{repo.full_name}}</small>
            <p v-if="repo.description">{{repo.description}}</p>
            <div class="flex">
                <div class="flex items-center" v-if="repo.language">
                    <span class="repo-language-color mr-5" style="background-color: #2c3e50"></span>
                    <p class="mr-16">{{repo.language}}</p>
                </div>
                <p>Updated on {{repo.updated_at | slicee}}</p>
            </div>
          </div>
          <div class="right">
              <button class="flex items-align mb-15">
                  <svg class="octicon octicon-star mr-5 blacckk" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                  Star
              </button>
              <svg width="155" height="30" class="graph">
                <defs>
                    <linearGradient id="gradient-242949638" x1="0" x2="0" y1="1" y2="0">
                        <stop offset="10%" stop-color="#9be9a8"></stop>
                        <stop offset="33%" stop-color="#40c463"></stop>
                        <stop offset="66%" stop-color="#30a14e"></stop>
                        <stop offset="90%" stop-color="#216e39"></stop>
                    </linearGradient>
                    <mask id="sparkline-242949638" x="0" y="0" width="155" height="28">
                    <polyline transform="translate(0, 28) scale(1,-1)" points="0,1.0 3,3.86 6,1.0 9,1.0 12,1.0 15,1.0 18,1.0 21,1.0 24,1.0 27,1.0 30,1.0 33,1.5699999999999998 36,1.0 39,1.5699999999999998 42,2.1399999999999997 45,2.71 48,5.57 51,5.57 54,10.14 57,29.0 60,2.1399999999999997 63,3.86 66,1.5699999999999998 69,1.0 72,17.0 75,21.57 78,1.5699999999999998 81,14.71 84,6.71 87,4.43 90,11.29 93,11.86 96,13.0 99,7.29 102,4.43 105,6.14 108,3.29 111,2.71 114,1.0 117,1.0 120,1.0 123,1.0 126,1.0 129,1.0 132,1.0 135,1.0 138,1.0 141,1.0 144,1.5699999999999998 147,1.0 150,2.1399999999999997 153,1.5699999999999998 " fill="transparent" stroke="#8cc665" stroke-width="2">
                    </polyline></mask>
                </defs>
                <g transform="translate(0, 2.0)">
                    <rect x="0" y="-2" width="155" height="30" style="stroke: none; fill: url(#gradient-242949638); mask: url(#sparkline-242949638)"></rect>
                </g>
              </svg>
          </div>
      </div>
      <div v-if="!repos.length">
          <h1 class="text-center noRepo">There's no repo here at the moment</h1>
      </div>
      <div class="pagination flex items-center justify-center">
          <button class="previous" @click="(pageNumber = pageNumber - 1), clickPag()" :disabled="pageNumber == 1">Previous</button>
          <button class="next" @click="(pageNumber = pageNumber + 1), clickPag()">Next</button>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            pageNumber: 1
        }
    },
    computed: {
        ...mapGetters({
            repos: 'repos',
        })
    },
    methods: {
        clickPag() {
            window.scrollTo(0, 0);
            this.$store.dispatch("clearRepos", this.pageNumber);
            this.$store.dispatch("getNewRepos", this.pageNumber);
        }
    },
    filters: {
        slicee(data) {
            let str = data.toString();
            let res = str.slice(0, 10);
            return res;
        }
    }
}
</script>

<style>
.pagination {
    margin: 20px 0;
}
.previous {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border: solid 1px var(--borderKini);
    padding: 6px 12px;
    color: #0366d6;
    font-size: 14px;
}
.previous:disabled {
    color: rgba(3,102,214,0.5);
}
.previous:disabled:hover{
    background-color: rgba(239, 239, 239, 0.3);
    color: rgba(3,102,214,0.5);
}
.previous:hover {
    background-color: #0366d6;
    color: white;
}
.next {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border: solid 1px var(--borderKini);
    padding: 6px 12px;
    color: #0366d6;
    font-size: 14px;
}
.next:hover {
    background-color: #0366d6;
    color: white;
}
.dropdown-caret {
    display: inline-block;
    width: 0;
    height: 0;
    vertical-align: middle;
    content: "";
    border-top-style: solid;
    border-top-width: 4px;
    border-right: 4px solid transparent;
    border-bottom: 0 solid transparent;
    border-left: 4px solid transparent;
}
.text-center{
    text-align: center;
}
.repoInput{
    width: 90%;
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: var(--blackish-grey);
    vertical-align: middle;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid var(--borderKini);
    border-radius: 6px;
    outline: none;
    box-shadow: inset 0 1px 0 rgba(225,228,232,0.2);
}
.blacckk{
    fill: var(--blacktowhite)
}
.repoSearch{
    padding: 20px 0;
    border-bottom: var(--borderKini) solid 1px;
}
.repoItem{
    padding: 15px 0;
    border-bottom: var(--borderKini) solid 1px;
}
.repoItem p {
    font-size: 14px;
    color: var(--muchText)
}
.repoItem h1 a{
    text-decoration: none;
    color: #0366d6;
}
.repoItem h1 a:hover{
    text-decoration: underline;
}
.repoList{
    padding: 0 20px;
}
.repoSearch button {
    padding: 5px 16px;
    border-radius: 6px;
    color: white;
    background-color: #2ea44f;
    border: none;
}
.repoSearch button svg {
    margin-right: 5px;
}
.repoSearch .notGreen {
    color: var(--blackish-grey);
    background-color: var(--buttonKini);
    border-color: rgba(27,31,35,0.15);
    border: 1px solid var(--borderKini);
}
.notGreen span {
    opacity: .75;
}
.left{
    width: 75%;
}
.right{
    width: 25%;
    display: flex;
    flex-direction: column;

}
.repo-language-color {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 1px solid rgba(27,31,35,0.1);
    border-radius: 50%;
}
.private{
    padding: 5px 10px;
    border: solid 1px var(--borderKini);
    border-radius: 2em;
    color: var(--blacktowhite)
}
.right{
    margin-top: 20px;
    align-items: flex-end;
}
.right button {
    padding: 3px 12px;
    width: max-content;
    font-size: 12px;
    color: var(--blackish-grey);
    background-color: var(--buttonKini);
    border: 1px solid rgba(27,31,35,0.15);
    border-radius: 6px;
    box-shadow: 0 1px 0 rgba(27,31,35,0.04), inset 0 1px 0 hsla(0,0%,100%,0.25);
}
.noRepo{
    color: var(--blacktowhite)
}
@media (max-width: 900px) {
    .repoSearch{
        flex-direction: column;
    }
    .repoInput{
        margin-bottom: 15px;
    }
    .repoList{
        padding: 0;
    }
    .graph{
        display: none;
    }
}
@media (max-width: 500px){
    .left{
        width: 80%;
    }
    .right{
        width: 20%;
        display: flex;
        flex-direction: column;
    }
    .left h1 {
        font-size: 16px;
    }
}
</style>