import CategoryButton from "./CategoryButton"

const Footer = () => {
  return (
    <footer>
      <h3>Discover more of what happens</h3>
      <div className="category-btns">
        <CategoryButton text="Poems" />
        <CategoryButton text="Programming" />
        <CategoryButton text="Sports" />
        <CategoryButton text="Nollywood" />
        <CategoryButton text="Hollywood" />
        <CategoryButton text="Drama" />
        <CategoryButton text="Machine Learning" />
      </div>

      <div className="links">links</div>
    </footer>
  )
}

export default Footer