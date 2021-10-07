
import React from "react";

function Search() {
  return (
    <div className="search">
      <div class="container"> 
        <h2>Search</h2>
        <form action="/action_page.php">
          <div class="form-group">
            <input type="text" placeholder="Search Term" class="form-control" id="searchterm"/>
          </div>
          <div class="form-group">
              <label for="searchrating">Search Rating</label>
              <select class="form-control" id="searchratings"  name="searchratings">
                  <option value="all">all</option>
                  <option value="one">1 Star</option>
                  <option value="two">2 Star</option>
                  <option value="three">3 Star</option>
                  <option value="four">4 Star</option>
                  <option value="five">5 Star</option>
              </select>
              <label for="searchrating">Choose your search rating</label>
          </div>
          <button type="submit" class="btn btn-default">Search</button>
        </form>
      </div>
    </div>
    
  );
}

export default Search;