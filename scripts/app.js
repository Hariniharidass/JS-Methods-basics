/*************************************************************************************************
 *                                          Task 1 :
 *************************************************************************************************/
let price_tag = prompt("Enter the price tag starting with $ sign ");

if (price_tag.length > 0) { // checks if input is empty
    if (price_tag.charAt(0) !== "$") { // checks if price tag was entered with $ sign, else it adds $ to the number
        price_tag = "$" + price_tag;
    }
    console.log("The price tag entered " + price_tag);

    /*************************************************************************************************
     *                                           Task 2 :
     *************************************************************************************************/
    let price_str_to_float = parseFloat(price_tag.slice(1));
    console.log("The price tag parsed to float is $" + price_str_to_float);

    /*************************************************************************************************
     *                                          Task 3 :
     *************************************************************************************************/
    const discount = 10;

    function calculate_discount(price, discount) {
        return parseFloat(price - parseFloat(price * (discount / 100)));
    }

    let discounted_price = calculate_discount(price_str_to_float, discount);

    /*************************************************************************************************
     *                                          Task 4 :
     *************************************************************************************************/
    console.log("Your new price is $" + discounted_price);
}
else {
    console.log("No price tag was entered!");
}
