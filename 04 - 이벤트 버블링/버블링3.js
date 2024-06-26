// 이벤트 위임 (Event Delegation)
const list = document.querySelector('#list');
list.addEventListener('click', function (e) {
    // if (e.target.tagName === 'LI')
    if (e.target.classList.contains('item')) {
        e.target.classList.toggle('done');
    }
});

//부모요소에 이벤트 핸들러를 등록하여 새로 추가된 요소가 들어와도 작동할 수 있게 함
//근데 그 부모태그를 눌러도 작동할 수 있기 때문에 contains 나 tagName 을 사용하여 적용에 제한을 둠


const addlist = document.createElement('li');
addlist.classList.add('item');
addlist.textContent = '일기 쓰기';
list.append(addlist);
list.addEventListener('click', function (e) {
    e.stopPropagation();
});


/*
for (let item of list.children){
    item.addEventListener('click', function(e)){
        e.target.classList.toggle('done');
    }};
    이렇게 이벤트 각각에 대해 핸들러 설정 X
    추가했을 때 추가된 요소에 작동 안함
*/