let tree = {
    'id1': {
        message: 'hello'
    },
    'id2': {
        message: 'world',
        children: {
          'id2-1': {
              message: 'haha',
              children: {
              }
          },
          'id2-2': {
              message: 'heihei'
          }
        }
    }
}


//递归实现遍历tree

function dfs(tree = {}, messages = []) {
let i = 0;
if(!messages) messages = [];
if(tree.message) messages.push(tree.message);

const keys = Object.keys(tree.children || {});
while (i < keys.length) {
        dfs(tree.children[keys[i]], messages);
        i += 1;
    }
return messages;
}

 tree = {
    message: null,
    children: tree
 };  

 dfs(tree);

 //非递归实现

function dfs(tree = {}) {
const array = [tree];
let messages = [];
while (array.length) {
const top = array.pop();
if (top.message) {
        messages.push(top.message);
      }
const keys = Object.keys(top.children || {});
let i = keys.length;
while (i > 0) {
        i -= 1;
        array.push(top.children[keys[i]]);
      }
    }
return messages
  }

 tree = {
    message: null,
    children: tree
 };  

 dfs(tree);