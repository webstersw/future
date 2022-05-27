import * as React from 'react'

const Search: React.FC<{onSearch: (search: string) => void}> = ({onSearch}) => {
    return (
      <h2 className="Search">
        Search: <input type="text" onChange={e => onSearch(e.target.value)} />
      </h2>
    );
  }

  export default Search;