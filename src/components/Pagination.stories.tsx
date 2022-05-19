import React from 'react';

import { ComponentMeta } from '@storybook/react';

import { LimitOffsetType } from '../types';

import ThemePagination from './Pagination';

export default {
  title: 'Components/Pagination',
  component: ThemePagination,
} as ComponentMeta<typeof ThemePagination>;

// const Template: ComponentStory<typeof ThemePagination> = args => <ThemePagination {...args} />;

// export const Pagination = Template.bind({});

// Pagination.args = {
//     count: 1000,
//     limit: 20,
//     offset: 60,
// };

export const Pagination = () => {
  const [offset, setOffset] = React.useState(0);
  const count = 1126;
  const limit = 10;

  const onPageChange = ({ offset }: LimitOffsetType) => {
    setOffset(offset);
  };

  return (
    <ThemePagination
      count={count}
      limit={limit}
      offset={offset}
      onPageChange={onPageChange}
    />
  );
};
