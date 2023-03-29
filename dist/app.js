"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const main = document.getElementById("main");
let data = [];
const url = "https://dummyjson.com/products";
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const json = yield response.json();
            data = json.products;
        }
        catch (error) {
            console.log("error :>> ", error);
        }
    });
}
fetchData().then(() => {
    const numberOfProducts = data.length;
    const tableHtml = `
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          ${data
        .slice(0, numberOfProducts)
        .map((product) => `<tr scope="row" >
                  <td>${product.title}</td>
                  <td>${product.price}</td>
                  <td>${product.description}</td>
                </tr>`)
        .join("")}
        </tbody>
      </table>
    `;
    if (main) {
        main.innerHTML = tableHtml;
    }
});
