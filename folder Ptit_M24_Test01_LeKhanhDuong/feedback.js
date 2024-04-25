"use strict";
//click hiện màu số
let colorItem = document.getElementsByClassName('color-item');
//hàm xóa màu sau khi chọn
function deleteColor() {
    for (let i = 0; i < colorItem.length; i++) {
        colorItem[i].style.backgroundColor = '#f5f5f5';
    }
}
// hàm lấy số trong id
function getNumber(numb) {
    let numStr = '';
    for (let i = 0; i < numb.length; i++) {
        if (!isNaN(Number(numb[i]))) {
            numStr += numb[i];
        }
    }
    numStr = parseInt(numStr);
    return numStr;
}
let numb = 0; //biến kiểm tra số được nhấn
//biến đếm số nhấn
for (let i = 0; i < colorItem.length; i++) {
    let button = colorItem[i];
    button.addEventListener('click', () => {
        console.log(colorItem[i].id);
        if (colorItem[i].id === 'cl-1') {
            deleteColor();
            colorItem[i].style.backgroundColor = 'rgb(255, 0, 0)';
            numb = getNumber(colorItem[i].id);
        }
        else if (colorItem[i].id === 'cl-2') {
            deleteColor();
            colorItem[i].style.backgroundColor = 'rgb(255, 85, 0)';
            numb = getNumber(colorItem[i].id);
        }
        else if (colorItem[i].id === 'cl-3') {
            deleteColor();
            colorItem[i].style.backgroundColor = 'rgb(255, 98, 0)';
            numb = getNumber(colorItem[i].id);
        }
        else if (colorItem[i].id === 'cl-4') {
            deleteColor();
            colorItem[i].style.backgroundColor = 'rgba(255, 175, 3, 0.992)';
            numb = getNumber(colorItem[i].id);
        }
        else if (colorItem[i].id === 'cl-5') {
            deleteColor();
            colorItem[i].style.backgroundColor = 'rgb(255, 191, 0)';
            numb = getNumber(colorItem[i].id);
        }
        else if (colorItem[i].id === 'cl-6') {
            deleteColor();
            colorItem[i].style.backgroundColor = 'rgb(255, 217, 0)';
            numb = getNumber(colorItem[i].id);
        }
        else if (colorItem[i].id === 'cl-7') {
            deleteColor();
            colorItem[i].style.backgroundColor = 'rgb(221, 255, 0)';
            numb = getNumber(colorItem[i].id);
        }
        else if (colorItem[i].id === 'cl-8') {
            deleteColor();
            colorItem[i].style.backgroundColor = 'rgb(0, 255, 0)';
            numb = getNumber(colorItem[i].id);
        }
        else if (colorItem[i].id === 'cl-9') {
            deleteColor();
            colorItem[i].style.backgroundColor = 'rgb(0, 193, 103)';
            numb = getNumber(colorItem[i].id);
        }
        else if (colorItem[i].id === 'cl-10') {
            deleteColor();
            colorItem[i].style.backgroundColor = 'rgb(0, 148, 148)';
            numb = getNumber(colorItem[i].id);
        }
    });
}
class FeedBack {
    constructor(idCln, nameCln, scoreCln) {
        this.id = idCln;
        this.name = nameCln;
        this.score = scoreCln;
    }
}
class FeedBacks {
    constructor() {
        let feedBackList = localStorage.getItem('feedBackList');
        this.feedBack = feedBackList ? JSON.parse(feedBackList) : [];
    }
    //hiển thị
    renderFeedBack() {
        let commentContainer = document.getElementById('commentContainer');
        for (let i = 0; i < this.feedBack.length; i++) {
            commentContainer.innerHTML += `
                <div class="avatar">
                <div class="image-avatar" style="background-color:palevioletred;">${this.feedBack[i].score}</div>
                <div style="display: flex; gap: 20px">
                  <button class="function-btn updateBtn">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button class="function-btn deleteBtn"  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
              <div class="content-comment">
                <p>${this.feedBack[i].name}</p>
              </div>
                `;
        }
    }
    //thêm
    createFeedback(name, score) {
        let id = Math.ceil(Math.random() * 1000);
        let newObj = new FeedBack(id, name, score);
        this.feedBack.push(newObj);
        localStorage.setItem('feedBackList', JSON.stringify(this.feedBack));
        // localStorage.setItem('feedBackList',JSON.stringify(this.feedBack = [])); 
        window.location.reload();
    }
    //sửa
    updateFeedback(index) {
        inputAdd.value = this.feedBack[index].name;
    }
    //xóa
    deleteFeedback(index) {
        this.feedBack.splice(index, 1);
        localStorage.setItem('feedBackList', JSON.stringify(this.feedBack));
        window.location.reload();
    }
}
let feedBackData = new FeedBacks();
//sự kiện nút send
let sendBtn = document.getElementById('sendBtn');
let inputAdd = document.getElementById('inputAdd');
sendBtn.addEventListener("click", () => {
    console.log(inputAdd.value);
    console.log(numb);
    feedBackData.createFeedback(inputAdd.value, numb);
    inputAdd.value = '';
    deleteColor();
});
//render
feedBackData.renderFeedBack();
//sự kiện cho nút xóa
let deleteBtn = document.getElementsByClassName('deleteBtn');
console.log(deleteBtn);
for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', () => {
        if (confirm('Bạn có chắc muốn xóa bình luận này?')) {
            feedBackData.deleteFeedback(i);
        }
        else {
            alert('Không có gì thay đổi!');
        }
    });
}
//sự kiện nút sửa
let updateBtn = document.getElementsByClassName('updateBtn');
console.log(updateBtn);
for (let i = 0; i < updateBtn.length; i++) {
    updateBtn[i].addEventListener('click', () => {
        feedBackData.updateFeedback(i);
    });
}
