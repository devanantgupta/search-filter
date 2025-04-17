const indianStatesUl = document.getElementById("indian-states-ul");
const indianUtUl = document.getElementById("indian-ut-ul");
const searchInput = document.getElementById("search-input");



const statesArr = [...indianStatesUl.children];
const utArr = [...indianUtUl.children];

const statesDataArr = statesArr.map((ele)=>{
    return ele.innerText;
});



const uTDataArr = utArr.map((ele)=>{
    return ele.innerText;
});

const combiArr = [...uTDataArr,...statesDataArr];

searchInput.addEventListener("input",(e)=>{
    const val = e.target.value;
    const filterArr = combiArr.filter((currVal)=>{
        if (currVal==="") {
            return combiArr
        }
        else{
            return currVal.toLowerCase().includes(val.toLowerCase());
        }
    })
    indianStatesUl.innerText = "";
    indianUtUl.innerText = "";

    filterArr.forEach((ele)=>{
        if(statesDataArr.includes(ele)){
            const filterStateLi = document.createElement('li');
            filterStateLi.innerText = ele;
            indianStatesUl.appendChild(filterStateLi);
        }
        if(uTDataArr.includes(ele)){
            const filterUTLi = document.createElement('li');
            filterUTLi.innerText = ele;
            indianUtUl.appendChild(filterUTLi);
        }
    })
})
