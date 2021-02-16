import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core/";
import { Button } from "@material-ui/core/";
export const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    <Button color="primary" onClick={()=>{console.log('Button');}}> Hi there </Button>
  </Card>
);
export default Dashboard;
