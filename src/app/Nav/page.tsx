

export function Nav() {
  return (
    <nav className="flex items-center justify-around w-full">
      <a href="/" className="flex items-center justify-around border border-white rounded-md p-2 hover:invert hover:bg-black transition ease-in-out duration-500">
        TOP NEWS
      </a>
      <a href="/Search" className="flex items-center justify-around border border-white rounded-md p-2 hover:invert hover:bg-black transition ease-in-out duration-500">
        SEARCH
      </a>
    </nav>
  )
}