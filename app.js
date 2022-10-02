// const input = document.querySelector("#input");
// const btn = document.querySelector(".btn");
// const uyarı = document.querySelector(".uyarı");
// const main = document.querySelector(".main");
//
// const getApi = async () => {
//   const link = input.value;
//   const url = `https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html`;
//
//
//   try {
// const res = await fetch(url);
// console.log(res);
// if (!res.ok) {
//   hata();
//   throw new Error("ikazz");
// }
// const data = await res.json();
// console.log(data);
// const {
//   result: { full_short_link },
//   result: { short_link },
// } = data;
// console.log(data.result);
// const par = document.createElement("p");
// console.log(par);
// par.innerText = input.value;
// main.appendChild(par);
//
// const par2 = document.createElement("a");
// console.log(par2);
// par2.href = full_short_link;
// par2.innerText = short_link;
// par2.target = "_blank";
// main.appendChild(par2);
//   } catch (error) {
// console.log(error);
//   }
//
//   const hata = () => {
// uyarı.innerHTML = `something went going`;
//   };
// };
//
// btn.addEventListener("click", () => {
//   main.innerHTML=""
//   getApi();
// });
//
//?2.yol
const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const uyarı = document.querySelector(".uyarı");
const main = document.querySelector(".main");

const getApi = async () => {
  const link = input.value;
  const url = `https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html`;

  try {
    const res = await fetch(url);
    console.log(res);
    if (!res.ok) {
      danger();
      throw new Error("something went false");
    }
    const data = await res.json();
    console.log(data);
    const {
      result: { short_link },
    } = data;
    console.log(data.result);
    main.innerHTML = `
          <div class="link">
    <div class="left_link"><a target="_blank" href="${input.value}">${short_link}</a></div>
    <button onclick="myCopy()" class="copy_link">Copy</button>
  </div> `;
  } catch (error) {
    console.log(error);
  }
};
input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    btn.click();
  }
});




btn.addEventListener("click", () => {
    
  if (input.value == "") {
    main.innerHTML = `
       Please add a url `;
       return
  }
   getApi();
 
});
const danger= ()=>{
    main.innerHTML=`
    <p>we dont find api</p>`
}
const myCopy= ()=>{
    let text=document.querySelector(".left_link a")
    let cpy=document.querySelector(".copy_link")
     navigator.clipboard.writeText(text.href);
     cpy.innerText = `Copied`;
}

