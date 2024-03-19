import { useParams } from "react-router-dom";

function EventDetailsPage() {
  const params = useParams();
  console.log(params.eventId);
  return (
    <>
      <p> this is Event Detail page</p>
      <p>{params.eventId}</p>
    </>
  );
}

export default EventDetailsPage;
