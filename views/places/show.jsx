const React = require('react')
const Def = require('../default')

function show(data) {
    let comments =(
        <h3 className="inactive">
            No comments yet!
        </h3> 
    )
    let rating = (
        <h3 className="inactive">
        Not Yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce ((tot, c) => {
            return tot + c.stars
        },0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i<averageRating; i++) {
            stars +=''
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
           
        
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlfor="name">Place Name</label>
                        <h3 id="name">{data.place.name}</h3>
                        <h2>
                            Rating
                        </h2>
                        {rating}
                        <br/>
                    </div>
                    <hr />
                    <h2>Comments</h2>
                    {comments}
                    <div className="form-group col-sm-6">
                        <label htmlfor="city">Place City</label>
                        <h3 id="city">{data.place.city}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="state">Place State</label>
                        <h3 id="state">{data.place.state}</h3>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <img id="pic" src={data.place.pic} alt={data.place.name} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name}/>
                        {/*<label htmlFor="cuisines">Place Cuisines</label>*/}
                        <h3>
                            Located in {data.place.city}, {data.place.state} {/*id="cuisines">{data.place.cuisines}</h3>*/}
                        </h3>
                    </div>
                    </div>
                <div className="col-sm-6">
                    <h2>
                        Description
                    </h2>
                    <h3>
                        {data.place.showEstatblished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                    </div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                <input type="submit" className="btn btn-danger" value="Delete Comment" />
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show
