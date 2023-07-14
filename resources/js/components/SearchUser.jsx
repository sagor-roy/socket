import React from 'react'

function SearchUser() {
    return (
        <div className="top-srch mt-3">
            <form>
                <input placeholder="Search people" type="text" />
                <button type="submit" className="search-icon">
                    <img src="https://www.nicepng.com/png/detail/350-3506490_search-icon-small-search-icon-small-png.png" width="20" alt="" />
                </button>
            </form>
        </div>
    )
}

export default SearchUser