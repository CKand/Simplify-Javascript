function order_summary(order_object) {
  var x=order_object.price
  var y=0;
  var subtotal_str = "Subtotal: " + "$" + x;
    if (order_object.price_level == "free") {
        x=0;
        subtotal_str = "Subtotal: This order is free";
    } else if (order_object.price_level == "discount") {
        x -=  (order_object.discount_percentage * x);
    } else if (order_object.price_level == "sale") {
        x -=   order_object.markdown;
    } 
 
    if (order.taxes_applicable == true) {
        y = order_object.tax;
    }
 
    var tax_str = "Tax: $" + y;
    var total_str = "Order total: " + "$" + x + y;
 
  html = "<p>" + "Product:  " + order_object.product_name  + "</p>" + "<p>" + subtotal_str + "</p>" + "<p>" + tax_str + "</p>" + "<p>" + total_str + "</p>";
  document.write("<h1> Order summary </h1>" + html);
}