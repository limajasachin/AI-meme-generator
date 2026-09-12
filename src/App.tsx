import Header from './components/Header'
import EmptyState from './components/EmptyState'
import CategoryPicker from './components/CategoryPicker'
import Spinner from './components/Spinner'
import Button from './components/Button'
import MemeGallery from './components/MemeGallery'
import { useMemeGenerator } from './hooks/useMemeGenerator'
import { CATEGORIES } from './data/categories'

function App() {
  const { memes, activeCategory, loading, error, generate } = useMemeGenerator()
  const hasMemes = memes.length > 0

  const activeLabel = CATEGORIES.find((category) => category.id === activeCategory)?.label ?? null

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="pitch">
          <p className="pitch__title">Instant memes, zero effort</p>
          <p className="pitch__text">Choose a vibe and get five ready-to-share memes in seconds.</p>
        </div>
        <CategoryPicker
          activeCategory={activeCategory}
          loading={loading}
          onSelect={generate}
        />
        {error && (
          <div className="error" role="alert">
            {error}
          </div>
        )}
        {loading && <Spinner label={`Cooking up ${activeLabel ?? ''} memes…`} />}
        {!loading && hasMemes && (
          <>
            <div className="results-bar">
              <h2 className="results-bar__title">{activeLabel ?? ''} memes</h2>
              <Button variant="ghost" onClick={() => activeCategory && generate(activeCategory)}>
                🔀 Shuffle again
              </Button>
            </div>
            <MemeGallery memes={memes} />
          </>
        )}
        {!loading && !hasMemes && !error && <EmptyState />}
      </main>
      <footer className="app-footer">
        Built for the Naukri AI Bootcamp · Captions by AI via OpenRouter · Images by memegen.link
      </footer>
    </div>
  )
}

export default App