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

// 0531 匯率計算機
var calu = new Vue({
    el: '.calu',
    data: {
        NT: 0
    },
    computed: {
        japen() {
            // 注意!! computed特性
            /*let total = this.NT * 0.2936;
            const d = new Date();
            return d.getSeconds();*/
            return this.NT * 0.2936;
        },
        usa() {
            return this.NT * 31.855;
        }
    },
});

// BMI
var bmi = new Vue({
    el: '.bmi',
    data: {
        a: 0,
        b: 0,
        BMI: 20
    },
    computed: {
        whoheavy() {
            if (this.a > this.b) {
                return 'a重';
            } else if (this.a < this.b) {
                return 'b重';
            } else {
                return '一樣重';
            }
        },
        judegeA() {
            if (this.a > 0) {
                return this.a - this.BMI;
            }
        }
    }
});

// v-bind
var imgBind = new Vue({
    el: '.imgBind',
    data: {
        imgUrl: 'https://stickershop.line-scdn.net/stickershop/v1/product/8440/LINEStorePC/main.png;compress=true',
    }
});

// github repo
var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=5&sha=';
var github = new Vue({
    el: '.github',
    data: {
        branches: ['master', 'dev'],
        currentBranch: 'master',
        commits: null
    },
    created() {
        this.fatchData();
        console.log('create');
    },
    watch: {
        currentBranch: 'fatchData'
    },
    methods: {
        fatchData() {
            var xhr = new XMLHttpRequest();
            var self = this;
            xhr.open('GET', apiURL + self.currentBranch, true);
            xhr.send();
            xhr.onload = function () {
                self.commits = JSON.parse(xhr.responseText);
                console.log(self.commits[0].html_url);
            }
        }
    }
});

//  作業3 找出自己github repo
let apiGitHub = '';
const myGitRepo = new Vue({
    el: '.myGitRepo',
    data: {
        owner: 'JessieRabbit',
        repoList: []
    },
    created() {
        this.addRepoList(this.owner)
    },
    methods: {
        addRepoList(owner) {
            const self = this;
            if (owner !== '') {
                apiGitHub = `https://api.github.com/users/${owner}/repos`;
                // console.log('apiGitHub', apiGitHub);
                // console.log('按下');
                const xhr = new XMLHttpRequest();
                xhr.open('GET', apiGitHub, true);
                xhr.send();
                xhr.onload = function () {
                    const parseResult = JSON.parse(xhr.responseText);
                    // console.log(parseResult[0].name);
                    self.repoList = parseResult;
                }
            }
        }
    }
})