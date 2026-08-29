export default function SearchPopup() {
  return (
    <div className="search-popup">
      <button className="close-search style-two" type="button">
        <span className="flaticon-multiply" />
      </button>
      <button className="close-search" type="button">
        <span className="flaticon-up-arrow-1" />
      </button>
      <form method="post" action="/blog.html">
        <div className="form-group">
          <input type="search" name="search-field" defaultValue="" placeholder="Search Here" required />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </div>
      </form>
    </div>
  )
}
