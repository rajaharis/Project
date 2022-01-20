const express = require('express');
const mysql = require('mysql');
const app = express();
const bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'record'
});
connection.connect((err, data) => {
    if (err) {
        console.log("error while connecting")
    }
    else {
        console.log("Database connected")
    }
});

app.get('/data', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    connection.query("SELECT * FROM categories", function (err, result) {
        if (err) throw err;
        else {
            res.send(result)
        }

    });
});
app.get('/product/:id', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let pid = req.params.id;
    connection.query("SELECT * FROM products where category_id=" + pid + "", function (err, result) {
        if (err) throw err;
        else {
            res.send(result)
        }

    });
});
app.get('/carousel/first', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    connection.query("SELECT * FROM carosuel1", function (err, result) {
        if (err) throw err;
        else {
            res.send(result)
        }

    });
});

app.get('/detail/:id', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let pid = req.params.id;
    connection.query("SELECT * FROM products where id=" + pid + "", function (err, result) {
        if (err) throw err;
        else {

            res.send(result);
        }

    });
});

app.get('/add/:id/:qty', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let pid = req.params.id;
    let qty = req.params.qty
    var sql = ("INSERT INTO `cart` (`cid`, `ProductID`, `qty`) VALUES (NULL, '" + pid + "', '" + qty + "')")
    connection.query(sql, function (err, res) {
        if (err) throw err;
        else {
            console.log("added");
        }
    })
});
app.get('/cart', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let pid = req.params.id;
    connection.query("select * from products inner join cart on products.id=cart.productID", function (err, result) {
        if (err) throw err;
        else {
            res.send(result)
        }

    });
});
app.get('/delete/:cid', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let pid = req.params.cid;
    connection.query("DELETE FROM cart WHERE cid= " + pid + " ", function (err, result) {
        if (err) throw err;
        else {
            res.send(result)
        }

    });
});

app.get('/search/:input/:select', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let search = req.params.input;
    let selector = req.params.select;

    var sql1 = "SELECT * FROM products WHERE `category_id`='" + selector + "' and  detail LIKE '%" + search + "%'";
    var sql2 = "SELECT * FROM products WHERE  detail LIKE '%" + search + "%'";
    if (selector == 9) {
        connection.query(sql2, search, function (err, result) {

            if (result.length == 0) {
                res.send(false)
                console.log("nothing found");
            }
            else {
                res.send(result);

                console.log(result);
            }
        });
    }
    else {
        connection.query(sql1, search, function (err, result) {

            if (result.length == 0) {
                res.send(false)
                console.log("nothing found");
            }
            else {
                res.send(result)
                console.log(result);
            }
        });
    }
});

app.post('/sign/:name/:email/:password/:phone/:address', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let username = req.params.name;
    let useremail = req.params.email;
    let userpassword = req.params.password;
    let userphone = req.params.phone;
    let userAddress = req.params.address;
    let news;
    let parse;


    // console.log(username, useremail, userpassword, userphone);
    var sql = ("SELECT * FROM `signin`where `email`='" + useremail + "'")
    connection.query(sql, function (err, result) {
        if (result.length !== 0) {
            console.log("user already exits");
        }


        else {
            bcrypt.hash(userpassword, salt, function (err, encrypted) {
                userpassword = encrypted
                if (err) throw err;
                else {
                    console.log(userphone);
                    connection.query("INSERT INTO `signin` (`acc_id`, `name`, `email`, `phone`, `password`) VALUES (NULL, '" + username + "', '" + useremail + "', '" + userphone + "',  '" + encrypted + "')", function (err, result) {
                        if (err) throw err;

                        else {

                            news = JSON.stringify(result)
                            parse = JSON.parse(news);

                            console.log(parse.insertId);


                            sql = ("INSERT INTO `address` (`ID`, `address`, `isDefault`, `userID`) VALUES (NULL, '" + userAddress + "', '1', '" + parse.insertId + "')")
                            connection.query(sql, function (err, res) {
                                if (err) {


                                    throw err;
                                }
                                else {
                                    console.log("address added");
                                }

                            })
                        }
                    });
                }

            });
        }
    })
});
app.post('/login/:email/:password', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let log_email = req.params.email;
    let log_password = req.params.password;
    var sql = ("SELECT * FROM `signin`where `email`='" + log_email + "'");
    connection.query(sql, function (err, result, field) {
        if (result.length !== 0) {
            bcrypt.compare(log_password, result[0].password, (err, isMatch) => {
                if (isMatch) {

                    let name = result[0].name;
                    let phone = result[0].phone;
                    let id = result[0].acc_id;
                    let address;
                    sql = ("select address from `address` where userID='" + id + "'")
                    connection.query(sql, function (err, add_result) {
                        address = (add_result[0].address);
                        return res.status(200).json({
                            name, phone, id, address
                        })
                    })

                }

                else {
                    return res.status(401).json({
                        msg: 'Email or Password not match'
                    });
                }
            });
        }
        else {
            console.log("user not found");

        }

    });
});

app.get('/UserAddress/:id/:newAdress', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let pid = req.params.id;
    let newAddres = req.params.newAdress;
    console.log(pid, newAddres);
    var sql1 = ("INSERT INTO `address` (`ID`, `address`, `userID`) VALUES (NULL, '" + newAddres + "', '" + pid + "')")
    var sql3 = ("select * from address where userID='" + pid + "'And isDefault='0'")

    if (newAddres == "undefined") {
        connection.query(sql3, function (err, result) {
            if (err) throw err;
            else {

                res.send(result)
            }
        });
    }
    else {
        connection.query(sql1, function (err, result) {
            if (err) throw err;
            else {
                connection.query(sql3, function (err, result) {
                    if (err) throw err;
                    else {

                        res.send(result)
                    }

                })
            }
        });
    }
});
















const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
});
