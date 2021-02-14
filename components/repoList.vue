<template>
  <div class="repoList">
      <div class="flex repoSearch">
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
      <div class="flex repoItem">
          <div class="left">

          </div>
          <div class="right">
              
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
    color: #24292e;
    vertical-align: middle;
    background-color: white;
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    outline: none;
    box-shadow: inset 0 1px 0 rgba(225,228,232,0.2);
}
.repoSearch{
    padding: 20px 0;
    border-bottom: #e1e4e8 solid 1px;
}
.repoItem{
    padding: 30px 0;
    border-bottom: #e1e4e8 solid 1px;
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
    color: #24292e;
    background-color: #fafbfc;
    border-color: rgba(27,31,35,0.15);
    border: 1px solid #e1e4e8;
}
.notGreen span {
    opacity: .75;
}
</style>