export default function AlertToast({ message }) {
  return (
    <div
      style={{
        height: '15px',
        fontSize: '14px',
        fontWeight: 400,
      }}
    >
      {message}
    </div>
  );
}
