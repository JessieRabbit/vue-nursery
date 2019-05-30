var app = new Vue({
    el: '#app', // element 元素，需要綁定哪個區塊，class或id名稱
    data: {
        message: 'hello word', // 資料
        score: 10,
        loading: true,
        // 0530 v-for
        colors: ['red', 'blue', 'black'],
        home: [{
                father: 'tom'
            },
            {
                father: 'bob'
            }
        ]
    },
    methods: {
        myFather: function (father) {
            alert('我的爸爸是' + father);
        }
    },
});

// todolist小實作
// this
function check() {
    console.log(this); // window
}
check();

var data = {
    check: function () {
        console.log(this); // data object
    }
}

data.check();

// indexof
var colors = ['yellow', 'blue', 'red', 'pink'];
// 刪除第三筆陣列元素，僅刪除一筆
colors.splice(2, 1);
console.log(colors);
// 詢問第一筆相符資料的索引
console.log(colors.indexOf('pink'));

// splice與indexof結合
colors.splice(colors.indexOf('pink'));
console.log(colors);

//小作品1
var appTodolist = new Vue({
    el: '.appTodolist',
    data: {
        todos: [],
        newTodo: ''
    },
    methods: {
        addTodo: function (todo) {
            this.todos.push({
                content: todo,
                completed: false
            });
        },
        removeTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        }
    }
});

// 生命週期
var myVue = new Vue({
    el: '.test',
    data: {
        a: 'A內容',
        content: null
    },
    beforeCreate: function () {
        console.log(this.a);
        console.log('屬性未載入前');
    },
    created: function () {
        console.log(this.a);
        console.log('資料$data可取得，但$el屬性未被建立');
    },
    beforeMount() {
        console.log('還沒抓到el資料');
    },
    mounted() {
        console.log('已掛上DOM，並取得el資料');
    },
    methods: {

    }
});