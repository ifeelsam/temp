import { ModeToggle } from "./mood-toggle"

const Header = () => {
  return (
    <header className="w-full p-4 md:px-8">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">app</h1>
        <ModeToggle />
      </nav>
    </header>
  )
}
export default Header
