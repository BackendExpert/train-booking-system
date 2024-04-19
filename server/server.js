const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const path = require('path')

const resourceLimits = require('worker_threads');
const e = require('express');
const { stat } = require('fs');


const app = express();
const PORT = process.env.PORT || 8081

//file  upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images')
    }, 
    filename:(req, file, cb) => {
      cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
})
  
const upload = multer({
    storage:storage
})


//make connection between dbsever and node app

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_tbs"
})
//email Sending - Nodemailer transporter

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
});


// middleware
app.use(express.json())
app.use(cors())
app.use(express.static('public')); 


// Endpoint for EmailSubscribe

app.post('/EmailSubscribe', (req, res) => {
    const checksql = "SELECT * FROM news_subscribe WHERE email = ?"
    connection.query(checksql, [req.body.email], (err, result) => {
      if(err) throw err

      if(result.length === 0){
        const sql = "INSERT INTO news_subscribe (email) VALUES (?)"
        const values = [
          req.body.email
        ]
      connection.query(sql, [values], (err, result) => {
        if(err){
          res.json({Error: "Error on server"})
        }
        else{
          res.json({Status: "Success"})
        }
      })
      }
      else{
        return res.json({Error: "Your are Already Subscribe for NEWS"})
      }
    })
})


// SignUp Endpoint

app.post('/SignUp', (req, res) => {
    // console.log(req.body)

    const checksql = "SELECT * FROM users WHERE email = ?"
    connection.query(checksql, [req.body.email], (err, result) => {
      if(err) throw err

      if(result.length === 0){
        bcrypt.hash(req.body.password, 10, (err, hashPass) => {
          if(err) throw err

          const create_at = new Date()
          const update_at = new Date()
          const roleUser = "member"
          const is_active = 1
          const is_lock = 0

          const sql = "INSERT INTO users(username, email, role, create_at, update_at, is_active, is_lock, password) VALUES (?)"
          const values = [
            req.body.username,
            req.body.email,
            roleUser,
            create_at,
            update_at,
            is_active,
            is_lock,
            hashPass
          ]

          connection.query(sql, [values], (err, result) => {
            if(err){
              return res.json({Error: "Error on Server"})
            }
            else{
              return res.json({Status: "Success"})
            }
          })

        })


      }
      else{
        return res.json({Error: "Your are Already Registered"})
      }
    })
})

// SignIn EndPoint

app.post('/SignIn', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ?"
    connection.query(sql, [req.body.email], (err, result) => {
      if(err) throw err

      if(result.length === 0){
        return res.json({Error: "User Not Found...."})
      }
      else{
        bcrypt.compare(req.body.password, result[0].password, (err, PasswordMatch) => {
          if(err) throw err

          if(PasswordMatch){

          }
          else{
            return res.json({Error: "Password not Match"})
          }
        })
      }
    })
})

//check the server is working
app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));
