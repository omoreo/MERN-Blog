import { useSelector } from "react-redux"

export default function ThemeProvider({ children }) {

    const { theme } = useSelector(state => state.theme);

  return (
    <div className={theme}>
        <div className="bg-white text-black dark:text-gray-300 dark:bg-gray-950 min-h-screen">
            { children }
        </div>
    </div>
  )
}
