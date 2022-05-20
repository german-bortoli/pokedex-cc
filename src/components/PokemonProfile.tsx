import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  capitalize,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { red, grey } from '@mui/material/colors';

import { usePokemonProfile } from '../hooks/usePokemonProfile';
import { AvatarType, EffectEntry } from '../types';
import { getPokemonImageUrl } from '../utils';

export interface PokemonProfileProps {
  name: string;
}

const MoreInfoItems = (items: EffectEntry[]) => {
  return items.map(item => {
    return (
      <Accordion key={item.name}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${item.name}-content`}
          id={`${item.name}-header`}
        >
          <Typography>{capitalize(item.name.replace(/-/gi, ' '))}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{item.description.effect}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
};

const PokemonProfile = ({ name }: PokemonProfileProps) => {
  const { data: pokemon, isLoading, isError } = usePokemonProfile(name);

  if (isError) {
    return <div>An error occurred while fetching the data</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card sx={{ backgroundColor: grey[200] }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ backgroundColor: red[500] }}
            src={getPokemonImageUrl(pokemon?.id || 0, AvatarType.SMALL)}
          />
        }
        title={
          <Typography variant="h4" color="text.primary">
            {capitalize(pokemon?.name || '')}
          </Typography>
        }
        action={
          <IconButton aria-label="close modal">
            <CloseIcon />
          </IconButton>
        }
      ></CardHeader>
      <CardMedia
        sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
      >
        <img
          height="200"
          src={getPokemonImageUrl(pokemon?.id || 0, AvatarType.BIG)}
          alt={`pokemon ${pokemon?.name}`}
        />
      </CardMedia>
      <CardContent>
        <TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableRow>
              <TableCell>
                <b>Height</b>
              </TableCell>
              <TableCell>{pokemon?.height || 'Unknown'}</TableCell>
              <TableCell>
                <b>Weight</b>
              </TableCell>
              <TableCell>{pokemon?.weight || 'Unknown'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Base Experience</b>
              </TableCell>
              <TableCell>{pokemon?.base_experience || 'Unknown'}</TableCell>
              <TableCell>
                <b>Order</b>
              </TableCell>
              <TableCell>{pokemon?.order || 'Unknown'}</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
        <Grid container spacing="2">
          <Grid item xs={6} md={6}>
            <Typography variant="h6">Moves</Typography>
            {MoreInfoItems(pokemon?.fetched_moves || [])}
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography variant="h6">Abilities</Typography>
            {MoreInfoItems(pokemon?.fetched_abilities || [])}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PokemonProfile;
