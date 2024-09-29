import Container from './Container';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className='py-3 shadow-md'>
      <Container>
        <div className='flex items-center justify-between'>
          <h1 className='text-lg font-semibold'>Characters</h1>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
