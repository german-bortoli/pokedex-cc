import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import PokemonProfile from './PokemonProfile';

// @TODO: Instead creating a real client, we may need to mock request/responses
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default {
  title: 'Components/Pokemons/Profile',
  component: PokemonProfile,
  decorators: [
    Story => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    ),
  ],
} as ComponentMeta<typeof PokemonProfile>;

const Template: ComponentStory<typeof PokemonProfile> = args => (
  <PokemonProfile {...args} />
);

export const Profile = Template.bind({});
Profile.args = {
  name: 'pikachu',
};
