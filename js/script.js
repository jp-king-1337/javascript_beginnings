fetch("https://swapi.dev/api/people")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data.results[3].films[2]);
    });


// milkyway.sol.earth.continents[1].countries[2].state.county.city[23].street[12].house[0].floor[1].room[1].closet
// As an example, this would dig from the galaxy down to a closet