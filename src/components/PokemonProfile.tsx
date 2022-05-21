import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Avatar,
  capitalize,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import { red, grey } from '@mui/material/colors';

import { AvatarType, EffectEntry, PokemonResponse } from '../types';
import { getPokemonImageUrl } from '../utils';

export interface PokemonProfileProps {
  isError: boolean;
  isLoading: boolean;
  onClose?: () => void;
  pokemon?: PokemonResponse;
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
          <Typography>
            {item.description
              ? item.description.effect
              : 'none'}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
};

const PokemonProfile = ({
  isLoading,
  isError,
  pokemon,
  onClose
}: PokemonProfileProps) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  if (isError) {
    return (
      <Card sx={{ backgroundColor: grey[200] }} data-testid="profile-error-card">
        <CardHeader
          title={
            <Typography variant="h4" color="text.primary">
              Error
            </Typography>
          }
          action={
            <IconButton aria-label="close modal" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          }
        ></CardHeader>
        <CardContent>
          <Alert severity="error">An error occurred while fetching the data</Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card sx={{ backgroundColor: grey[200] }}>
      <CardHeader
        avatar={
          isLoading ? (
            <Skeleton
              data-testid="skeleton-loading1"
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              sx={{ backgroundColor: red[500] }}
              src={getPokemonImageUrl(pokemon?.id || 0, AvatarType.SMALL)}
            />
          )
        }
        title={
          <Typography variant="h4" color="text.primary">
            {isLoading ? (
              <Skeleton
                animation="wave"
                height={40}
                width="100%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              capitalize(pokemon?.name || '')
            )}
          </Typography>
        }
        action={
          <IconButton aria-label="close modal" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        }
      ></CardHeader>
      <CardMedia
        sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
      >
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={200}
            height={200}
          />
        ) : (
          <img
            height="200"
            src={getPokemonImageUrl(pokemon?.id || 0, AvatarType.BIG)}
            alt={`pokemon ${pokemon?.name}`}
          />
        )}
      </CardMedia>
      <CardContent>
        <TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableRow>
              <TableCell>
                <b>Height</b>
              </TableCell>
              <TableCell>
                {isLoading ? <Skeleton /> : pokemon?.height || 'Unknown'}
              </TableCell>
              <TableCell>
                <b>Weight</b>
              </TableCell>
              <TableCell>
                {isLoading ? <Skeleton /> : pokemon?.weight || 'Unknown'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Base Experience</b>
              </TableCell>
              <TableCell>
                {isLoading ? <Skeleton /> : pokemon?.base_experience || 'Unknown'}
              </TableCell>
              <TableCell>
                <b>Order</b>
              </TableCell>
              <TableCell>
                {isLoading ? <Skeleton /> : pokemon?.order || 'Unknown'}
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
        <Grid container spacing="2">
          <Grid item xs={6} md={6}>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              Moves
            </Typography>
            {isLoading && (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width="80%"
                height={100}
              />
            )}
            {MoreInfoItems(pokemon?.fetched_moves || [])}
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              Abilities
            </Typography>
            {isLoading && (
              <Skeleton
                animation="wave"
                variant="rectangular"
                width="80%"
                height={100}
              />
            )}
            {MoreInfoItems(pokemon?.fetched_abilities || [])}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PokemonProfile;
