//-------DOM
var showtBody = callElement("#tblBody")
var inputNameValue = callElement("#input_name")
var inputPointValue = callElement("#input_point")
var inputImgValue = callElement("#input_img")
//-------DOM Button
var btnDeleteMember = callElement("#btn_delete")
var btnAddMember = callElement("#btn_add")
var btnDeleteAll = callElement("#btn_delete_all")
var btnInput = callElement("#btn_input")
var btnMain = callElement("#btn_main")
//-------DOM Button phân loại
var btnStrong = callElement("#btn_strong")
var btnWeak = callElement("#btn_weak")
var btn80Above = callElement("#btn_80above")
var btn80Under = callElement("#btn_80under")
var btnTangDan = callElement("#btn_tangdan")
var btnGiamDan = callElement("#btn_giamdan")
//-------Aray Member List
var memberList = [
    {
        name: "Gojou",
        power: 90,
        image: "images/0 - gojou.jpeg"
    },
    {
        name: "Naruto",
        power: 85,
        image: "images/0 - naruto.png"
    },
    {
        name: "Luffy",
        power: 93,
        image: "images/0 - luffy.jpg"
    },
    {
        name: "Rudeus",
        power: 75,
        image: "images/0 - rudeus.jpg"
    },
    {
        name: "Anya",
        power: 69,
        image: "images/0 - anya.webp"
    },
]
// ------Add Event
btnInput.addEventListener("click", addMember)
//-------Fuction
function callElement(id) {
    return document.querySelector(id);
}

function showMemberList() {
    var str = ""
    memberList.map((item, index) => {
        var memberName = item.name;
        var memberPower = item.power;
        var memberAvatar = item.image;
        str += `
        <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                      <label for="checkbox1"></label>
                    </span>
                  </td>
                  <td><img src="${memberAvatar}" alt="" style="width: 50px; height: 50px; border-radius: 50%" /></td>
                  <td>${memberName}</td>
                  <td class="td-scores">${memberPower}</td>
                  <td>
                    <i class="material-icons"
                        data-toggle="tooltip" title="Edit" style="cursor:pointer; color: skyblue;">&#xE254;</i>
                    <i class="material-icons"
                        data-toggle="tooltip" title="Delete" style="cursor:pointer; color: red;" id="btn_delete" onclick="deleteMember('${item.name}')">&#xE872;</i>
                  </td>
                </tr>
        `
    })
    showtBody.innerHTML = str;
}
showMemberList()

function addMember() {
    var newMemberName = inputNameValue.value;
    var newMemberPower = inputPointValue.value;
    var newMemberImg = inputImgValue.value;

    if (newMemberName && newMemberPower && newMemberImg) {
        var checkMember = false;
        memberList.map((item) => {
            if (newMemberName === item.name) {
                checkMember = true
            }
        })

        if (checkMember) {
            alert("Tên này đã tồn tại trong danh sách")
        } else {
            var newMember = {
                name: newMemberName,
                power: newMemberPower,
                image: newMemberImg
            }
            memberList.push(newMember)
            showMemberList()
        }
    }
}

function deleteMember(tenNhanVat) {
    var xoaNhanVat = memberList.findIndex((item) => {
        return item.name === tenNhanVat
    })

    console.log("Tìm thằng xoaNhanVat: ", xoaNhanVat)
    if (xoaNhanVat !== -1) {
        memberList.splice(xoaNhanVat, 1)
    }
    showMemberList()
}

function strongMember() {
    var powerMember = memberList.map((item) => {
        return item.power
    })

    var strongest = Math.max(...powerMember)
    var strongestMember = memberList.filter((item) => {
        return item.power === strongest
    })

    if (strongestMember.length > 0) {
        for (var i = 0; i < strongestMember.length; i++) {
            var memberListUpdate = []
            memberListUpdate.push(strongestMember[i])
            memberList = memberListUpdate
            showMemberList()
        }
    }
}
btnStrong.addEventListener("click", strongMember)

function weakMember() {
    var powerMember = memberList.map((item, index) => {
        return item.power
    })

    var weakest = Math.min(...powerMember)
    var weakestMember = memberList.filter((item) => {
        return item.power === weakest
    })

    if (weakestMember.length > 0) {
        for (var i = 0; i < weakestMember.length; i++) {
            var memberListUpdate = []
            memberListUpdate.push(weakestMember[i])
            memberList = memberListUpdate
            showMemberList()
        }
    }
}

btnWeak.addEventListener("click", weakMember)

function deleteAll() {
    memberList = []
    showMemberList()
}

btnDeleteAll.addEventListener("click", deleteAll)


function lowToHigh() {
    memberList.sort(function (a, b) { return a.power - b.power })
    var str = ""
    memberList.map((item, index) => {
        var memberName = item.name;
        var memberPower = item.power;
        var memberAvatar = item.image;
        str += `
        <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                      <label for="checkbox1"></label>
                    </span>
                  </td>
                  <td><img src="${memberAvatar}" alt="" style="width: 50px; height: 50px; border-radius: 50%" /></td>
                  <td>${memberName}</td>
                  <td class="td-scores">${memberPower}</td>
                  <td>
                    <i class="material-icons"
                        data-toggle="tooltip" title="Edit" style="cursor:pointer; color: skyblue;">&#xE254;</i>
                    <i class="material-icons"
                        data-toggle="tooltip" title="Delete" style="cursor:pointer; color: red;" id="btn_delete" onclick="deleteMember('${item.name}')">&#xE872;</i>
                  </td>
                </tr>
        `
    })
    memberList.forEach(function (nhanVat) {
        showtBody.innerHTML = str;
    })
}

btnTangDan.addEventListener("click", lowToHigh)

//----------------

function highToLow() {
    memberList.sort(function (a, b) {
        return b.power - a.power
    })
    var str = ""
    memberList.map((item, index) => {
        var memberName = item.name;
        var memberPower = item.power;
        var memberAvatar = item.image;
        str += `
        <tr>
                  <td>
                    <span class="custom-checkbox">
                      <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                      <label for="checkbox1"></label>
                    </span>
                  </td>
                  <td><img src="${memberAvatar}" alt="" style="width: 50px; height: 50px; border-radius: 50%" /></td>
                  <td>${memberName}</td>
                  <td class="td-scores">${memberPower}</td>
                  <td>
                    <i class="material-icons"
                        data-toggle="tooltip" title="Edit" style="cursor:pointer; color: skyblue;">&#xE254;</i>
                    <i class="material-icons"
                        data-toggle="tooltip" title="Delete" style="cursor:pointer; color: red;" id="btn_delete" onclick="deleteMember('${item.name}')">&#xE872;</i>
                  </td>
                </tr>
        `
    })
    memberList.forEach(function (nhanVat) {
        showtBody.innerHTML = str;
        console.log("Nhân vật:", nhanVat.name)
    })
}

btnGiamDan.addEventListener("click", highToLow)






