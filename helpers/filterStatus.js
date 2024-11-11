module.exports = ( query ) => {
  let listStatus = [
    {
      name: "Tất cả",
      status: "",
      class: "active"
    },
    {
      name: "Hoạt động",
      status: "active",
      class: ""
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      class: ""
    }
  ]

  if (query.status) {
    listStatus.forEach(item => {
      if (item.status == query.status) {
        item.class = "active";
      }
      else {
        item.class = "";
      }
    })
  }

  return listStatus;
}