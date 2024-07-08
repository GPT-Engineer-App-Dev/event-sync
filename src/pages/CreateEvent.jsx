import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!eventName || !eventDate || !eventLocation || !eventDescription) {
      toast("Please fill in all fields", { description: "All fields are required." });
      return;
    }

    // Create event object
    const newEvent = {
      name: eventName,
      date: eventDate,
      location: eventLocation,
      description: eventDescription,
    };

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast("Event created successfully", { description: `${eventName} has been created.` });

      // Clear form
      setEventName("");
      setEventDate("");
      setEventLocation("");
      setEventDescription("");
    } catch (error) {
      // Show error message
      toast("Failed to create event", { description: "An error occurred while creating the event." });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Event</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="event-name" className="block text-sm font-medium">
              Event Name
            </label>
            <Input
              id="event-name"
              placeholder="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="event-date" className="block text-sm font-medium">
              Date
            </label>
            <Input
              id="event-date"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="event-location" className="block text-sm font-medium">
              Location
            </label>
            <Input
              id="event-location"
              placeholder="Location"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="event-description" className="block text-sm font-medium">
              Description
            </label>
            <Textarea
              id="event-description"
              placeholder="Description"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </div>
          <Button type="submit">Create Event</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateEvent;