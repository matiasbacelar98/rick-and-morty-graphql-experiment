import { Search } from 'tabler-icons-react';

type Props = {
  value: string;
  onSearch: (value: string) => void;
};

export default function CharacterSearch({ value, onSearch }: Props) {
  return (
    <div className='relative basis-full max-w-[400px]'>
      <input
        type='search'
        name='search'
        placeholder='Search character...'
        className='h-14 px-5 pl-10 text-sm shadow-md rounded focus:outline-none w-full text-slate-700'
        value={value}
        onChange={e => onSearch(e.target.value)}
      />
      <div className='absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 ml-5'>
        <Search className='stroke-slate-700' size={16} />
      </div>
    </div>
  );
}
