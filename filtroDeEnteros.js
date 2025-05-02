function filter_list(l) {
    return l.filter((num) => typeof num === "number")
  }
  filter_list([1,2,'a','b'])