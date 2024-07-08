import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Attendees = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attendees</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input placeholder="Search attendees..." />
          <div className="space-y-2">
            <div>
              <h3 className="text-lg font-semibold">Attendee Name</h3>
              <p>Details about the attendee...</p>
            </div>
            {/* Repeat the above block for each attendee */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Attendees;