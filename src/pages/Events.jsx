import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Event Name</h3>
                <p>Date, Location, Status</p>
              </div>
              <div className="space-x-2">
                <Button variant="outline">Edit</Button>
                <Button variant="destructive">Delete</Button>
              </div>
            </div>
            {/* Repeat the above block for each event */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;