//Btn filter status
const listBtnStatus = document.querySelectorAll("[button-status]");
if (listBtnStatus.length > 0) {
  const url = new URL(window.location.href);
  listBtnStatus.forEach(button => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("button-status");

      if (status) {
        url.searchParams.set("status", status);
      }
      else {
        url.searchParams.delete("status");
      }
      url.searchParams.delete("page");
      window.location.href = url.href;
    })
  })
}

//Form Search
const formSearch = document.querySelector('#form-search');
formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = new URL(window.location.href);
  let value = e.target.elements.keyword.value;
  if (value) {
    url.searchParams.set("name", value);
  }
  else {
    url.searchParams.delete("name");
  }
  window.location.href = url.href;
})


//Pagination
const buttonPaginations = document.querySelectorAll("[button-pagination]");
if (buttonPaginations) {
  buttonPaginations.forEach(button => {
    button.addEventListener("click", () => {
      const url = new URL(window.location.href);
      const page = button.getAttribute("button-pagination");
      if (page) {
        url.searchParams.set("page", page);
      }
      else {
        url.searchParams.delete("page");
      }
      window.location.href = url.href;
    })
  })
}












