const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()
// get all workouts
 router.get('/',getWorkouts)

 // get single workout
 router.get('/:id',getWorkout)

 // post new workouts
 router.post('/',createWorkout)

 // delete workout
 router.delete('/:id',deleteWorkout)

 // update all workouts
 router.patch('/:id',updateWorkout)





module.exports = router