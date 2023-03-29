const main = document.getElementById("main")!;

type fetchObject = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
let data: fetchObject[] = [];
const url: string = "https://dummyjson.com/products";

async function fetchData(): Promise<void> {
  try {
    const response = await fetch(url);
    const json = await response.json();
    data = json.products;
  } catch (error) {
    console.log("error :>> ", error);
  }
}

fetchData().then(() => {
  const numberOfProducts: number = data.length;
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
            .map(
              (product) =>
                `<tr scope="row" >
                  <td>${product.title}</td>
                  <td>${product.price}</td>
                  <td>${product.description}</td>
                </tr>`
            )
            .join("")}
        </tbody>
      </table>
    `;
  if (main) {
    main.innerHTML = tableHtml;
  }
});
