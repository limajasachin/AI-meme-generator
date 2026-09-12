import { CATEGORIES } from '../data/categories'
import type { Category, CategoryId } from '../types'

type CategoryPickerProps = {
  activeCategory: CategoryId | null
  loading?: boolean
  onSelect: (categoryId: CategoryId) => void
}

type CategoryCardProps = {
  category: Category
  active: boolean
  disabled?: boolean
  onSelect: (categoryId: CategoryId) => void
}

function CategoryCard({ category, active, disabled, onSelect }: CategoryCardProps) {
  return (
    <button
      type="button"
      className={active ? 'category-card category-card--active' : 'category-card'}
      disabled={disabled}
      aria-pressed={active}
      onClick={() => onSelect(category.id)}
    >
      <span className="category-card__emoji" aria-hidden="true">
        {category.emoji}
      </span>
      <span className="category-card__label">{category.label}</span>
      <span className="category-card__blurb">{category.blurb}</span>
    </button>
  )
}

function CategoryPicker({ activeCategory, loading, onSelect }: CategoryPickerProps) {
  return (
    <section aria-label="Meme categories" className="category-picker">
      <h2 className="category-picker__label">Meme categories</h2>
      <div className="category-grid">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            active={category.id === activeCategory}
            disabled={loading}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  )
}

export default CategoryPicker