const express = require('express')
const router = express.Router()

const fs = require('fs')

const students = JSON.parse(fs.readFileSync('students.json'))

//gets student by id
router.get('/:id', (req, res) => {
    const selectedStudent = students.find(student => student.id === Number(req.params.id))
    res.send(selectedStudent)
})

//gets students by grade, name or all
router.get('/', (req, res) => {
    if(req.query.grade)
    {
        const selectedStudent = students.filter(student => student.grade.includes(req.query.grade))
        res.send(selectedStudent)
    }
    else if(req.query.name)
    {
        const selectedStudent = students.filter(student => student.name.includes(req.query.name))
        res.send(selectedStudent)
    }
    else
    {
        res.send(students)
    }
});

//posts student's grade or register
router.post('/', function(req, res){
     if(req.query.grade)
     {
         if(req.query.id)
         {
            result = {
                "status": "success",
                "message": "The grade has been successfully added"}
         }
         else
        {
            result = {
                "status": "failed",
                "message": "The grade has not been added"
            }
            res.status(400);
        }
     }
     else if(req.query.username)
     {
         if(req.query.email)
         {
            result = {
                "status": "success",
                "message": "You have successfully registered"}
         }
         else
         {
            result = {
                "status": "failed",
                "message": "You did not registered"
                
            }
            res.status(400);
         }
     }
     else
     {
        result = {
            "status": "failed",
            "message": "Your request cannot be completed"
        }
        res.status(400);
     }
    res.json(result);
});

module.exports = router