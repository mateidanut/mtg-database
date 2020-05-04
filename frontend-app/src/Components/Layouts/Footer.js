import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default () => {
  return (
   <Card>
    <CardContent>
      <Typography variant="body2" component="p" align="center">
      © 2020 Matei Gabriel-Danut
      </Typography>
    </CardContent>
  </Card>
  );
}
