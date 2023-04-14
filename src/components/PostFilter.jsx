import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
  return (
    <div className="PostFilter">
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sorting"
        options={[
          { value: 'title', name: 'By title' },
          { value: 'body', name: 'By description' },
        ]}
      />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Number of posts"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Show all' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
