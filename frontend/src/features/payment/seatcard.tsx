import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/Typography";

const TrainCard: React.FC = () => {
  return (
    <section className="mb-6 shadow-lg hover:scale-105">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            My Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a sample card.
          </Typography>
          <div>
            <Typography variant="body1">
              Some additional content here.
            </Typography>
            <div>
              <Typography variant="body1">Nested content.</Typography>
            </div>
          </div>
          <div>
            <Typography variant="body1">More content.</Typography>
          </div>
          <div>
            <Typography variant="body1">Even more content.</Typography>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default TrainCard;
