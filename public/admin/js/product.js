// Change status button
const listButtonStatus = document.querySelectorAll("[button-change-status]");
if (listButtonStatus) {
  listButtonStatus.forEach(item => {
    item.addEventListener("click", () => {
      const formChangeStatus = document.querySelector("#form-change-status");
      const id = item.getAttribute("data-id");
      const status = item.getAttribute("data-status");
      const newStatus = status == 'active' ? 'inactive' : 'active';

      const path = formChangeStatus.getAttribute("path");
      formChangeStatus.action = path + `/${newStatus}/${id}?_method=PATCH`;
      formChangeStatus.submit();
    })
  })
}

//Delete product button
const listButtonDelete = document.querySelectorAll("[button-delete]");
if (listButtonDelete) {
  listButtonDelete.forEach(item => {
    item.addEventListener("click", () => {
      if (confirm("Bạn có chắc chắn xóa ?")) {
        const formDelete = document.querySelector('#form-delete');
        const id = item.getAttribute("data-id");

        const path = formDelete.getAttribute("path");

        formDelete.action = path + `/${id}?_method=DELETE`;
        formDelete.submit();
      }
    });
  });
}

