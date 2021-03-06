// ----querySelector----

// var el = document.getElementById('titleId')
// el.textContent = '321123';

// var el = document.querySelector('#titleId')
// el.textContent = '2333';

// var el = document.querySelector('#titleId em')
// el.textContent = '2333444';

// ----querySelectorAll----

// var elLen = document.querySelectorAll('.titleClass em')

// for (var i = 0 ; i < elLen.length ; i++){
//     elLen[i].textContent = 'Chapter' + (i + 1);
// } 

// ----set Attribute----
// var el = document.querySelector('.titleClass a');
// el.setAttribute('href','https://orow.github.io/MyProjects/'); 

// var el2 = document.querySelector('titleClass a');
// el.setAttribute('id','strId');

// ----get Attribute---
// var el3 = document.querySelector('.titleClass a');
// console.log(el3.getAttribute('href'))
// console.log(el3.textContent);

// var el4 = document.querySelector('.titleClass');
// console.log(el4.innerHTML);

// ----innerHTML----
// var el = document.querySelector('.main').innerHTML = '<h1 class="header">Title for hexschool</h1>';
// console.log(el);


// var el2 = document.querySelector('ul');
// var link ='https://orow.github.io/MyProjects/';
// var owner = 'Orow';
// el2.innerHTML = '<li><a href="'+link+'">'+owner+'</a></li>';




// ----innerHTML + for Loop----
// var farms = [{
//     farmer: '威廉',
//     field: 15,
//     chick: 120,
//     banana: 6000
// },
// {
//     farmer: '約翰',
//     field: 12,
//     chick: 50,
//     banana: 5000
// },
// {
//     farmer: '哈維',
//     field: 20,
//     chick: 200,
//     banana: 9000
// }
// ]
// var qs = document.querySelector("ul");
// var str = "";
// for (var i = 0 ; i < farms.length ; i++) {
//     var content = "<li>" + farms[i].farmer +"</li>";
//     str += content;
// }
// qs.innerHTML = str;



// ----createElement-----
// var str = document.createElement('em');
// str.textContent = '1234';
// str.setAttribute('id', 'strId');

// // 每個li裡面要新增em的元素
// var selectAll = document.querySelectorAll('.list');
// console.log(selectAll);

// var selectAllLen = selectAll.length;

// // 增加子節點,用appendChild會把原有的直接搬移,故需要cloneNode(true)

// for (var i = 0 ; i < selectAllLen ; i++){
//     var cloneElement = str.cloneNode(true);
//     selectAll[i].appendChild(cloneElement);
// }


// ----createElement + for 每個農場農夫的名字----
var farms = [{
        farmer: '威廉',
        field: 15,
        chick: 120,
        banana: 6000
    },
    {
        farmer: '約翰',
        field: 12,
        chick: 50,
        banana: 5000
    },
    {
        farmer: '哈維',
        field: 20,
        chick: 200,
        banana: 9000
    }
]
var el = document.querySelector('.list');
var farmLen = farms.length;
for (var i = 0 ; i < farmLen ; i++){
    var str = document.createElement('li');
    str.textContent = farms[i].farmer;
    el.appendChild(str);
}