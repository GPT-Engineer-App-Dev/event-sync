import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CreateEvent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Event</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <label htmlFor="event-name" className="block text-sm font-medium">
              Event Name
            </label>
            <Input id="event-name" placeholder="Event Name" />
          </div>
          <div>
            <label htmlFor="event-date" className="block text-sm font-medium">
              Date
            </label>
            <Input id="event-date" type="date" />
          </div>
          <div>
            <label htmlFor="event-location" className="block text-sm font-medium">
              Location
            </label>
            <Input id="event-location" placeholder="Location" />
          </div>
          <div>
            <label htmlFor="event-description" className="block text-sm font-medium">
              Description
            </label>
            <Textarea id="event-description" placeholder="Description" />
          </div>
          <Button type="submit">Create Event</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateEvent;