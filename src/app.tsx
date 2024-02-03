import { Fragment, h } from 'preact'
import { Logo } from './logo'
export function App() {
  const a = 'a'
  a = 'b'
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}
