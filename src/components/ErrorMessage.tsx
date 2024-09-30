import { FallbackProps } from 'react-error-boundary';
import errorGif from '../assets/error.gif';

export default function ErrorMessage({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <section className='flex flex-col gap-y-6 items-center justify-center h-[calc(100vh-84px)] p-4'>
      <img src={errorGif} />
      <p className='text-2xl font-medium text-center'>{error.message}</p>
      <button
        onClick={() => resetErrorBoundary()}
        className='text-white bg-slate-700 hover:bg-slate-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none'
      >
        Try again
      </button>
    </section>
  );
}
