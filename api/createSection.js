export async function CreateSection(section, books) {
  let formData = new FormData();
  formData.append("section", section);

  try {
    let response = await fetch(
      "https://89tvbkxl-8000.euw.devtunnels.ms/api/section/",
      {
        method: "post",
        body: formData,
      }
    );

    let data = await response.json();
    console.log(data);
    books.forEach(async (book) => {
      console.log(book);
      let form = new FormData();
      for (let i of book.entries()) {
        console.log(i);
        form.append(i[0], i[1]);
      }
      form.append("section", data.id);
      await fetch("https://89tvbkxl-8000.euw.devtunnels.ms/api/book/", {
        method: "post",
        body: form,
      }).catch((e) => {
        console.error(e);
      });
    });
  } catch (e) {
    console.error("error", e);
  }
}
