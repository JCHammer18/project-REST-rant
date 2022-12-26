const router = require('express').Router()
const places = require("../models/places.js")
const db = require('../models')


/*router.post('/', (req, res) => {
    //console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})
//INDEX ROUTE
/*router.get('/', (req, res) => {
    res.render('places/index', { places })
})*/

//NEW PLACES ROUTE
/*router.get('/new', (req, res) => {
    res.render('places/new')
});*/

//SHOW ROUTE
//Changed res.render('places/show') to ('places/edit')
/*router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!places[id]) {
        res.render('error404')
    } else {
        res.render('places/show', { place: places[id], id })
    }
})
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    } else if (!places[id]) {
        res.render('error404')
    } else {
        res.render('places/edit', { place: places[id], id })
    }
})
//PUT Route
/*router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})
//DELETE ROUTE
/*router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {        
        res.render('error404')
    } else if (!places[id]) {
        res.render('error404')
    } else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})*/

//INDEX ROUTE
router.get('/', (req, res) => {
  res.send('GET /places stub')
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  res.send('POST /places stub')
  db.Place.create(req.body)
  .then (() => {
    res.redirect ('/places')
  })
  .catch(err =>{
    if (err && err.name == 'ValidationError') {
        let message = 'Validation Error:'
        for (var field in err.errors){
            message += `${field} was ${err.errors[field].value}.`
            message += '${err.errors[field].message}'
        }
        console.log('validation error message', message)
    //TODO : Generate error message(s)
    res.render('places/new', {message})
  }
  else {
    res.render('error404')
  }
    //console.log('err', err)
    //res.render('error404')
  })
})



router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then((place)=>{
        console.log(place.comments)
        res.render("places/show", {place})
    })
    .catch((err)=> {
        console.log("err", err)
        res.render("error404")
    })
})
    
  //res.send('GET /places/:id stub')

  router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            res.render('error404')
        })
    })
    .catch(err => {
        res.render('error404')
    })
})




router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place })
    })
    .catch(err => {
        res.render('error404')
    })
})


router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
