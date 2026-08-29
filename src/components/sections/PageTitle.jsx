import { Link } from 'react-router-dom'

export default function PageTitle({ title, current }) {
  return (
    <section className="page-title">
      <div className="pattern-layer-one" style={{ backgroundImage: 'url(/images/background/pattern-16.png)' }} />
      <div className="auto-container">
        <h2>{title}</h2>
        <ul className="page-breadcrumb">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>{current}</li>
        </ul>
      </div>
    </section>
  )
}
