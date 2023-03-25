import useRsvps from "../hooks/use-rsvps";

function Invitation() {
  const { data } = useRsvps();

  console.log(JSON.stringify(data));

  return <span>You are Invited</span>;
}

export default Invitation;
