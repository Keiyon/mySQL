var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    //console log this
    runSearch();
});

function runSearch() {
connection.query("SELECT * FROM product", function(err, res) {
    res.forSelected(function(row) {
        // console.log
});

runSearch(res);

})
}
    

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "input",
            message: "What is the id of the product that you would like to buy?"

        })
        .then(function (itemID) {
                 // Trying to display the products in the ID
                 connection.query("SELECT * FROM product WHERE item_id = ?", itemID.action, function (err, result) {
                    console.log(result)
    
                });

            inquirer
                .prompt({
                    name: "quantity",
                    type: "input",
                    message: "How many units of the product would you like to buy?"

                })
                .then(function (itemQuantity) {

                    connection.query("SELECT * FROM product WHERE stock_quantity = ?", itemQuantity.quantity, function (err, result) {
                        console.log(result)

                    })
                })
            }
        )}
                
                
                
            




        
        // });
    


    // Be able to enter a valid quantity of the product if it is in stock



    // })
    //     });
    // }
    //     )}



    // function productSearch() {
    //     inquirer
    //     .prompt({
    //         name: "product",
    //         type: "input",
    //         message: "Which product would you "
    //     })
    // }