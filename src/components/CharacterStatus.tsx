import { ChevronDown } from 'tabler-icons-react';
import { CharacterStatusType } from '../types';
import React from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  options: CharacterStatusType[];
};

export default function CharacterStatus({ value, onChange, options }: Props) {
  return (
    <div className='inline-block relative w-full max-w-60'>
      <select
        className='text-slate-700 h-14 block appearance-none w-full px-5 py-2 pr-8 text-sm rounded shadow-md leading-tight focus:outline-none focus:shadow-outline'
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <StatusOptions options={options} />
      </select>

      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-5'>
        <ChevronDown size={16} className='stroke-slate-700' />
      </div>
    </div>
  );
}

function StatusOptions({ options }: { options: CharacterStatusType[] }) {
  return (
    <React.Fragment>
      <option value=''>Filter by status</option>
      {options.map(option => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </React.Fragment>
  );
}
