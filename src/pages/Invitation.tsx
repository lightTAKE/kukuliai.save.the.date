import useRsvps from "../hooks/use-rsvps";

function Invitation() {
  const { data } = useRsvps();

  console.log(JSON.stringify(data));

  return (
    <span>
      <small>
        Kukuliai rest-api base:{" "}
        <b>{process.env.REACT_APP_KUKULIAI_REST_API_BASE}</b>
      </small>
    </span>
  );
}

export default Invitation;
