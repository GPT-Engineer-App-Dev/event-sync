import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const BookTicket = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!selectedEvent || !ticketQuantity || !userName || !userEmail) {
      toast("Please fill in all fields", { description: "All fields are required." });
      return;
    }

    // Create booking object
    const newBooking = {
      event: selectedEvent,
      quantity: ticketQuantity,
      name: userName,
      email: userEmail,
    };

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast("Ticket booked successfully", { description: `You have booked ${ticketQuantity} ticket(s) for ${selectedEvent}.` });

      // Clear form
      setSelectedEvent("");
      setTicketQuantity(1);
      setUserName("");
      setUserEmail("");
    } catch (error) {
      // Show error message
      toast("Failed to book ticket", { description: "An error occurred while booking the ticket." });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Ticket</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="event" className="block text-sm font-medium">
              Select Event
            </label>
            <Select onValueChange={setSelectedEvent} value={selectedEvent}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an event" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Event 1">Event 1</SelectItem>
                <SelectItem value="Event 2">Event 2</SelectItem>
                <SelectItem value="Event 3">Event 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium">
              Number of Tickets
            </label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={ticketQuantity}
              onChange={(e) => setTicketQuantity(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Your Name
            </label>
            <Input
              id="name"
              placeholder="Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Your Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <Button type="submit">Book Ticket</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookTicket;