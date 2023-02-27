import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";


export const UserCard = ({ users, uniqueData }) => {
  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "400px"}}>
      {uniqueData.map(({ id, name, lastName, gender, email }) => (
        <Card key={id} sx={{ width: "30%", zIndex: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div" key={id}>
              {name + ' ' + lastName}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {email}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {gender}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Back</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};
