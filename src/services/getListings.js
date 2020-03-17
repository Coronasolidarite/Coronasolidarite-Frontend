export default function getListings() {
  var data = JSON.parse(localStorage.getItem("listings"));
  if (!data) {
    return [];
  }
  return data.feed.entry
    .map(({ gs$cell }) => [gs$cell.$t, gs$cell.col, gs$cell.row])
    .reduce((list, [value, col, row]) => {
      if (row === "1") {
        return list;
      }
      if (!list[row]) {
        list[row] = [];
      }
      list[row][col] = value;
      return list;
    }, []);
}
