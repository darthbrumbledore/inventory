$("#saveNewItem").off().click(() => {
  var itemName = $("#itemName").val();
  var itemDescription = $("#itemDescription").val();
  var itemCategory = $("#itemCategory").val();
  var purchasePrice = $("#purchasePrice").val();
  var salePrice = $("#salePrice").val();
  var itemCondition = $("#itemCondition").val();
  var itemPhoto = $("#itemPhoto");
  var itemSold = $("#itemSold").val();

  console.log(itemName, itemDescription);

  axios.post('/items', {
    name: itemName,
    description: itemDescription,
    category: itemCategory,
    purchasePrice: purchasePrice,
    salePrice: salePrice,
    condition: itemCondition,
    photos: "just a string for now",
    sold: false
  }).then(() => {
    // console.log("Successful db upload");
    $('#itemsTable > tbody:last-child').append(`<tr>
      <td>
        <img class="images" src="/images/logo.png" style="width: 50px; height: 50px"/>
      </td>
      <td>
        ${itemName}
      </td>
      <td>
        ${itemDescription}
      </td>
      <td>
        ${salePrice}
      </td>
    </tr>`);
  }).catch((err) => {
    console.log("There was an error " + err);
  });
});
