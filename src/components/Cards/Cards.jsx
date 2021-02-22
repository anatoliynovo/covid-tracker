import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const cards = [
    {
      class: styles.infected,
      title: 'Infected',
      coutUpEnd: confirmed,
      description: 'Number of active cases of COVID-19',
    },
    {
      class: styles.recovered,
      title: 'Recovered',
      coutUpEnd: recovered,
      description: 'Number of recoveries from COVID-19',
    },
    {
      class: styles.deaths,
      title: 'Deaths',
      coutUpEnd: deaths,
      description: 'Number of deaths caused of COVID-19',
    },
  ];

  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        {cards.map((data, i) => (
          <Grid
            key={i}
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, data.class)}
          >
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                {data.title}
              </Typography>
              <Typography variant='h5'>
                <CountUp
                  start={0}
                  end={data.coutUpEnd.value}
                  duration={2.5}
                  separator='.'
                />
              </Typography>
              <Typography color='textSecondary'>
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant='body2'>{data.description}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
