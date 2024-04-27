import { useSelector } from 'react-redux';

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='bg-white text-gray-700 dark:text-red-700 dark:bg-[rgb(11,13,19)] min-h-screen'>
        {children}
      </div>
    </div>
  );
}