type SpinnerProps = {
  label?: string
}

function Spinner({ label = 'Cooking up memes…' }: SpinnerProps) {
  return (
    <div className="spinner" role="status" aria-live="polite">
      <div className="spinner__ring" aria-hidden="true" />
      <p className="spinner__label">{label}</p>
    </div>
  )
}

export default Spinner